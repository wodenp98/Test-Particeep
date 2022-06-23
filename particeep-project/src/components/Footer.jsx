import React from 'react'
import { social } from '../movies'
 
function Footer() {
  return (
    <div className='social'>
        {social.map((item, index) => {
            return (
                <li  key={index}>
                    <a className='social-icon' href={item.href}>{item.icon}</a>
                </li>
            )
        })}

    </div>
  )
}

export default Footer