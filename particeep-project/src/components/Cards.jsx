import React from 'react'
import { movies } from "../movies"

function Cards() {


  return (
    <div>
        {movies.map(item => (

            <div key={item.id}>
                <div>
                    <img src={item.image} alt='' />
                </div>
                <p>{item.title}</p>
                <p>{item.category}</p>
            </div>
        ))}

    </div>
  )
}

export default Cards