import React from 'react'
import { social } from '../Utils/movies'
 
function Footer() {
  return (
    <div className='social'>
        {social.map((item, index) => {
            return (
                <li  key={index} className='border-icon'>
                    <a className='social-icon' href={item.href}>{item.icon}</a>
                </li>
            )
        })}

    </div>
  )
}

export default Footer