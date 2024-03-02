import { faHardDrive } from '@fortawesome/free-regular-svg-icons';
import { faMemory, faMouse, faMobileScreen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "bootstrap/dist/css/bootstrap.min.css"
function App() {
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
            {/* .card>.cardHeader.text-muted{22/04/2021}+.cardBody.d-flex */}
            <div className="card">
              <div className="card-header text-muted">22/04/2021</div>
              <div className="card-body d-flex">
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon icon={faHardDrive} size='2x' className='fa-beat-fade' />
                </div>
                <div className="flex-grow-1 ms-3 border">
                  <h4 className="text-center">HD</h4>
                  <p className="text-center">HD 1Tb</p>
                </div>
              </div>
            </div>
          </div>

          <div className='col-sm-12 col-lg-6 col-xxl-3'>
            <div className="card">
              <div className="card-header text-muted">22/04/2021</div>
              <div className="card-body d-flex">
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon icon={faMemory} size='2x' className='fa-bounce' />
                </div>
                <div className="flex-grow-1 ms-3 border">
                  <h4 className="text-center">Memoria RAM</h4>
                  <p className="text-center">DDR 16GB</p>
                </div>
              </div>
            </div>
          </div>

          <div className='col-sm-12 col-lg-6 col-xxl-3'>
            <div className="card">
              <div className="card-header text-muted">22/04/2021</div>
              <div className="card-body d-flex">
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon icon={faMouse} size='2x' className='fa-flip' />
                </div>
                <div className="flex-grow-1 ms-3 border">
                  <h4 className="text-center">Mouse</h4>
                  <p className="text-center">Logitech</p>
                </div>
              </div>
            </div>
          </div>

          <div className='col-sm-12 col-lg-6 col-xxl-3'>
            <div className="card">
              <div className="card-header text-muted">22/04/2021</div>
              <div className="card-body d-flex">
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon icon={faMobileScreen} size='2x' className='fa-shake' />
                </div>
                <div className="flex-grow-1 ms-3 border">
                  <h4 className="text-center">Smartphone</h4>
                  <p className="text-center">Samsung</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default App
