import React from 'react'
import { social } from '../movies'
 
function Footer() {
  return (
    <div>
        {social.map((item, index) => {
            return (
                <li key={index}>
                    <a href={item.href}>{item.icon}</a>
                </li>
            )
        })}

    </div>
  )
}

export default Footer