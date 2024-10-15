import React from 'react'
import image12 from './assets/img/Logo.png'
function Header() {
  
  return (
    <div className='header'>
        <div className='logo'>
         <img alt='' src={image12}></img>
         <div>INNOBYTE</div>
        </div>
        <div className='registre'>Registre Now</div>
    </div>
  )
}

export default Header