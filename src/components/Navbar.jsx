import React from 'react'
import './Navbar.scss'
import userIcon from '../assets/circle-user.svg'
import cart from '../assets/shopping-cart.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <ul>
        <li>Inicio</li>
        <li>Hombre</li>
        <li>Mujer</li>
        <li>Marcas</li>
        <li>Contacto</li>
        <img src={userIcon} alt="" />
        <img src={cart} alt="" />
      </ul>
    </div>
  )
}

export default Navbar