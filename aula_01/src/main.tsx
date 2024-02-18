import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css';

import medico1 from './images/medico1.jpeg'

const App = () => {
  const containerStyle = () => {
    // Adicionei a tipagem do retorno pois estou utilizando typescript
    const style: React.CSSProperties =
    {
      padding: 32,
      backgroundColor: "#EEE",
      borderRadius: 8,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems:
        "center",
      justifyContent: "center"
    };
    return style;
  }

  const nomeDosMedicos = {
    1: "Mauro Gomes",
    2: "Serafina Estefana",
    3: "Alencar Dutra",
  }

  // Usando import.meta inves de process.env pois estou em ambiente com VITE, mas tem a mesma funcao
  const ENV_MEDICO2_URL = import.meta.env.VITE_PUBLIC_URL;

  return (
    <div className='container' style={containerStyle()}>
      <header>
        <h2>Profissionais da saúde</h2>
      </header>
      <section style={{ display: 'flex', flex: 1, justifyContent: "space-evenly", width: "100%", border: "1px solid #ddd", padding: 8 }}>
        <div className="image">
          <img src={medico1} alt="imagemDoProfissional" />
          <span>{nomeDosMedicos[1]}</span>
        </div>
        <div className="image">
          <img src={ENV_MEDICO2_URL} alt="imagemDoProfissional" />
          <span>{nomeDosMedicos[2]}</span>
        </div>
        <div className="image">
          <img src="https://conteudo.imguol.com.br/c/entretenimento/d8/2021/06/02/ilustracao-para-medico-homem-1622651981666_v2_900x506.jpg.webp" alt="imagemDoProfissional" />
          <span>{nomeDosMedicos[3]}</span>
        </div>
      </section>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));