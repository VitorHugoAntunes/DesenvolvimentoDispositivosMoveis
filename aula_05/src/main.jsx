import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free';

import { createRoot } from 'react-dom';
import React from 'react';

class App extends React.Component {
  // window.navigator.geolocation.getCurrentPosition((position) => {
  //   console.log(position)
  // })

  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
      estacao: null,
      data: null,
      icone: null
    };
  }

  icones = {
    'Verão': 'sun',
    'Inverno': 'snowflake',
    'Outono': 'canadian-maple-leaf',
    'Primavera': 'tree',
  };

  obterEstacao = (dataAtual, latitude) => {
    const anoAtual = dataAtual.getFullYear();

    // Datas de cada estacao, com mes comecando a partir de 0
    const d1 = new Date(anoAtual, 5, 21);
    const d2 = new Date(anoAtual, 8, 24);
    const d3 = new Date(anoAtual, 11, 22);
    const d4 = new Date(anoAtual, 2, 21);

    // const sul = latitude < 0 ? true : false
    // Ternario que guarda boolean pode ser passado apenas a expressao
    const sul = latitude < 0;

    if(dataAtual >= d1 && dataAtual < d2) {
      return sul ? 'Inverno' : 'Verão';
    }
    if (dataAtual >= d2 && dataAtual < d3) {
      return sul ? 'Primavera' : 'Outono';
    }
    if (dataAtual >= d3 || dataAtual < d4) {
      return sul ? 'Verão' : 'Inverno';
    } else {
      return sul ? 'Outono' : 'Primavera';
    }
  };

  obterLocalizacao = () => {
    window.navigator.geolocation.getCurrentPosition( 
    (posicao) => {
        const dataAtual = new Date();
        const estacaoClimatica = this.obterEstacao(dataAtual, posicao.coords.latitude);
        const nomeIcone = this.icones(estacaoClimatica);

        this.setState({
          latitude: posicao.coords.latitude,
          longitude: posicao.coords.longitude,
          estacao: estacaoClimatica,
          icone: nomeIcone,
          data: dataAtual
        })
      },

      (erro) => {}
    )
  }

  render() {
    return (
      <div>
        oi
      </div>
    );
}
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);