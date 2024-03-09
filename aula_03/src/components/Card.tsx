import { ReactNode } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"

type CardProps = {
  title: string;
  children: ReactNode;
}

const Card = ({ title, children }: CardProps) => {
  return (
    <div>
      <div className="card">
        <div className="card-header text-muted">
          {title}
        </div>
        <div className="card body">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Card;
