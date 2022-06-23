import React from 'react'
import logo from '../images/particeep.png'

function Navbar() {
  return (
    <div className='nav'>
        <img src={logo} alt='Logo de Particeep' className='logoImg'/> 
        <div className='nav-menu'>
            <p className='category'>Category</p>
            {/* {category.map((item,index) => (
              <div key={index}>
                <button onClick={() => handleFilter(item)}>{item}</button>
              </div> 
            ))} */}
        </div>
        
    </div>
  )
}

export default Navbar