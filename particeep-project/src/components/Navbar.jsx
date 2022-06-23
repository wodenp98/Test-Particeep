import React from 'react'
import logo from '../images/particeep.png'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Navbar() {
  return (
    <div className='nav'>
      <a href='https://www.particeep.com/fr'>
        <img src={logo} alt='Logo de Particeep' className='logoImg'/>
      </a>
         
        <div className='nav-menu'>
            <p className='category'>Category <KeyboardArrowDownIcon className="arrow-category" /></p>
            
        </div>
        
    </div>
  )
}

export default Navbar