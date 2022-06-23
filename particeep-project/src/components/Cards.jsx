import React from 'react'
import { movies } from "../movies"
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import DeleteIcon from '@mui/icons-material/Delete';




function Cards() {


  return (
    <div className='container'>
        {movies.map(item => (
          // console.log(item)
          <div className='main-container'>
            <div key={item.id} className='cards'>
                <div>
                    <img src={item.image} alt='' className='cards-img'/>              
                </div>
                <div className='description'>
                  <div className='description-film'>
                    <p className='cards-title'>{item.title}</p>
                    <p className='cards-category'>{item.category}</p>
                  </div>
                <div className='description-likes'>
                  <div className='setup-likes'>
                    <ThumbUpIcon />
                    <p className='likes' >{item.likes}</p>
                  </div>
                  <div className='setup-dislikes'>
                    <ThumbDownAltIcon />
                    <p className='dislikes'>{item.dislikes}</p>
                  </div>
                </div>
                <div className='delete-btn'>
                  <DeleteIcon />
                </div>
                </div>
            </div>
          </div>
        ))}

    </div>
  )
}

export default Cards