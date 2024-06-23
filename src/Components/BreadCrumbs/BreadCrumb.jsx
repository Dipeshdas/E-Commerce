import React from 'react'
import arrow_icon from '../Assests/breadcrumb_arrow.png'
import './BreadCrumb.css'

export const BreadCrumb = (props) => {
    const{product}=props
  return (
    <div className='breadcrumb'>
        HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  )
}
