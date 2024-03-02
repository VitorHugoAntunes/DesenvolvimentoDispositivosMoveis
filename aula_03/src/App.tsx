import { } from '@fortawesome/free-solid-svg-icons';
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
        <div className="row">
          {/* Primeiro pedido */}
          <div className='col-sm-12 col-lg-6 col-xxl-3'>
            <div className="bg-primary">Caixa 1</div>
          </div>

          <div className='col-sm-12 col-lg-6 col-xxl-3'>
            <div className="bg-primary">Caixa 2</div>
          </div>

          <div className='col-sm-12 col-lg-6 col-xxl-3'>
            <div className="bg-primary">Caixa 3</div>
          </div>

          <div className='col-sm-12 col-lg-6 col-xxl-3'>
            <div className="bg-primary">Caixa 4</div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default App
