import { ReactNode } from 'react'

import "bootstrap/dist/css/bootstrap.min.css"

type OrderProps = {
  icon: ReactNode;
  title: string;
  description: string;
}

const Order = ({ icon, title, description }: OrderProps) => {
  return (

    <div className="d-flex p-2">
      {/* .card>.cardHeader.text-muted{22/04/2021}+.cardBody.d-flex */}
      <div className="d-flex align-items-center">
        {/* <FontAwesomeIcon icon={faHardDrive} size='2x' className='fa-beat-fade' /> */}
        {icon}
      </div>
      <div className="flex-grow-1 ms-3 border">
        <h4 className="text-center">{title}</h4>
        <p className="text-center">{description}</p>
      </div>
    </div>
  )
}

export default Order;