import React from 'react'
import { ReactNode } from 'react'

type FooterProps = {
  iconBrand1: ReactNode;
  iconBrand2: ReactNode;
  iconBrand3: ReactNode;
  content: string;
}

const Footer = ({ iconBrand1, iconBrand2, iconBrand3, content }: FooterProps) => {
  return (
    <div className='flex-1 d-flex align-items-center justify-content-center gy-5'>
      <div>
        <h2>{content}</h2>
      </div>

      <div className='flex-1 d-flex'>
        <div>
          {iconBrand1}
        </div>
        <div>
          {iconBrand2}
        </div>
        <div>
          {iconBrand3}
        </div>
      </div>
    </div>
  )
}

export default Footer;
