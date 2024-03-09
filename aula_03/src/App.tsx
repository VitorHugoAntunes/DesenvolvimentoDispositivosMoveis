
import { faMemory, faMouse, faMobileScreen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHardDrive } from '@fortawesome/free-regular-svg-icons';
import { faTwitter, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import "bootstrap/dist/css/bootstrap.min.css"
import Order from './components/Order';
import Card from './components/Card';
import Footer from './components/Footer';
import Feedback from './components/Feedback';

function App() {
  const feedback = <Feedback
    textoOK='Ja chegou'
    textoNOK='Nao chegou'
    funcaoOK={() => alert('Obrigado pelo feedback.')}
    funcaoNOK={() => alert('Verificaremos o que aconteceu.')}
  />

  return (
    <div className="container border p-2 mt-2">
      <div className="row">
        <div className="col-12">
          {/* h1.display-5.text-center{Seus pedidos} */}
          <h1 className="display-5 text-center">Seus pedidos</h1>
        </div>

        {/* Linha para os pedidos */}
        <div className="row gy-5">
          {/* Primeiro pedido */}
          <div className='col-sm-12 col-lg-6 col-xxl-3'>
            <Card title='07/03/2024'>
              <Order title='HDD' description='HDD 500GB' icon={<FontAwesomeIcon icon={faHardDrive} size='2x' className='fa-beat-fade' />} />
              {feedback}
            </Card>
          </div>

          <div className='col-sm-12 col-lg-6 col-xxl-3'>
            <Card title='05/01/2024'>
              <Order title='Memoria RAM' description='DDR 3200Mhz' icon={<FontAwesomeIcon icon={faMemory} size='2x' className='fa-shake' />} />
              {feedback}
            </Card>
          </div>

          <div className='col-sm-12 col-lg-6 col-xxl-3'>
            <Card title='20/02/2024'>
              <Order title='Mouse' description='Mouse Logitech' icon={<FontAwesomeIcon icon={faMouse} size='2x' className='fa-bounce' />} />
              {feedback}
            </Card>
          </div>

          <div className='col-sm-12 col-lg-6 col-xxl-3'>
            <Card title='10/12/2024'>
              <Order title='Smartphone' description='Samsung Galaxy S24' icon={<FontAwesomeIcon icon={faMobileScreen} size='2x' className='fa-flip' />} />
              {feedback}
            </Card>
          </div>

        </div>
      </div>

      <div className='row'>
        <Footer
          content='FATEC IPIRANGA'
          iconBrand1={<FontAwesomeIcon icon={faTwitter} size='2x' className='fa-flip' />}
          iconBrand2={<FontAwesomeIcon icon={faLinkedin} size='2x' className='fa-flip' />}
          iconBrand3={<FontAwesomeIcon icon={faYoutube} size='2x' className='fa-flip' />}
        />
      </div>
    </div>
  )
}

export default App
