import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css'

import { createRoot } from 'react-dom';
import React from 'react';

class App extends React.Component{
  // window.navigator.geolocation.getCurrentPosition((position) => {
  //   console.log(position)
  // })

  constructor(props){
    super(props)
    this.state = {
      latitude: null,
      longitude: null,
      estacao: null,
      data: null,
      icone: null,
      mensagemDeErro: null
    }
  }

  icones = {
    'Verão': 'sun',
    'Inverno': 'snowflake',
    'Outono': 'leaf',
    'Primavera': 'tree'

  }

  obterEstacao = (dataAtual, latitude) => {
    const anoAtual = dataAtual.getFullYear()
    //21/06
    //new Date(ano, mes(começa do 0), dia(começa do 1))
    const d1 = new Date(anoAtual, 5, 21)
    //24/09
    const d2 = new Date(anoAtual, 8, 24)
    //22/12
    const d3 = new Date(anoAtual, 11, 22)
    //21/03
    const d4 = new Date(anoAtual, 2, 21)
    // const sul = latitude < 0 ? true : false
    const sul = latitude < 0
    if (dataAtual >= d1 && dataAtual < d2)
      return sul ? 'Inverno' : 'Verão'
    if (dataAtual >= d2 && dataAtual < d3)
      return sul ? 'Primavera' : 'Outono'
    if (dataAtual >= d3 || dataAtual <= d4)
      return sul ? 'Verão' : 'Inverno'
    return sul ? 'Outono' : 'Primavera'
  }

  obterLocalizacao = () => {
    //1. Solicitar a localização do usuário usando getCurrentPosition
    window.navigator.geolocation.getCurrentPosition(
      //caso a localização tenha sido obtida com sucesso
      (posicao) => {
        //2. Na função callback, fazer o seguinte:
        // construir um novo Date (com new Date()) que representa a data atual
        const dataAtual = new Date()    
        //chamar a funcao obterEstacao entregando a ela a latitude e a data atual, obtendo como resposta a estacao climatica
        const estacaoClimatica = this.obterEstacao(dataAtual, posicao.coords.latitude)    
        //utilizando o nome da estacao climatica obtido, acessar o objeto icones para obter o nome do icone
        const nomeIcone = this.icones[estacaoClimatica]    
        //usar a funcao chamada setState para atualizar o estado da aplicação    
        //this.setState({..todos os valores de interesse aqui, como pares chave/valor})
        this.setState({
          latitude: posicao.coords.latitude,
          longitude: posicao.coords.longitude,
          estacao: estacaoClimatica,
          icone: nomeIcone,
          data: dataAtual
        })
      },
      //caso contrário (usuário negou, por exemplo)
      (erro) => {
        this.setState({
          mensagemDeErro: 'Não foi possível obter a sua localização'
        })
        
        console.log(erro);
      }
    )
  }

  componentDidMount(){
    this.obterLocalizacao();
  }

  render() {
    return (
      <div className='container mt-2'>
        <div className='row justify-content'>
          <div className="col-sm-12 col-md-8">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center border rounded mb-2"
                  style={{height: '6rem'}}
                >
                 <i className={`fa-solid fa-5x fa-${this.state.icone}`}></i>
                  <p className="w-75 ms-3 text-center fs-1">{this.state.estacao}</p>

                </div>
                <div>
                  <p className="text-center">
                    {
                      this.state.latitude ? `Coordenadasa: ${this.state.latitude}, ${this.state.longitude}.
                      Data: ${this.state.data}` :
                      this.state.mensagemDeErro ? `${this.state.mensagemDeErro}` :
                      `Clique no botao para saber a sua estacao climatica...`
                    }
                  </p>
                </div>
                <button className='btn btn-outline-primary w-100 mt-2'
                  onClick={this.obterLocalizacao}
                >
                  Qual a minha estacao?
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);