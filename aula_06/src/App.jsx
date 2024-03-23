import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numerosSorteados: []
    };
  }

  sorteiaNumeroAleatorio = () => {
    const { numerosSorteados } = this.state;
    if (numerosSorteados.length >= 6) return;

    let numero;

    for (let i = numerosSorteados.length; i < 6; i++) {
      numero = Math.floor(Math.random() * 60) + 1;
      numerosSorteados.includes(numero)
      
      this.setState({ numerosSorteados: [...numerosSorteados, numero] });
    }
  }

  apagaNumerosSorteados = () => {
    this.setState({ numerosSorteados: [] });
  }

  render() {
    const { numerosSorteados } = this.state;

    return (
      <div className="container">
        <div className="row">
          {numerosSorteados.map((numero, index) => (
            <div key={index} className="col-2 bg-secondary text-center border p-5">{numero}</div>
          ))}
        </div>

        <button onClick={this.sorteiaNumeroAleatorio} className="btn btn-primary w-100 p-3">Gerar combinação numérica</button>
        
        {numerosSorteados.length > 0 && (
          <button onClick={this.apagaNumerosSorteados} className="btn btn-danger w-100 p-3">Apagar</button>
        )}
      </div>
    );
  }
}

export default App;