import React, { useState, useEffect } from 'react';
import { movies$ } from '../Utils/movies';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import DeleteIcon from '@mui/icons-material/Delete';


const Card = ({ onDelete, category, image, title, like, dislike }) => {
  const [likes, setLikes] = useState(like);
  const [dislikes, setDisLikes] = useState(dislike);

  const handleLike = (value) => {
    setLikes((prev) => prev + 1);
    setCompleted((prev) => prev + 1);
  };

  const handleDislike = (value) => {
    setDisLikes((prev) => prev + 1);
    setUnCompleted((prev) => prev + 1);
  };

  const [completed, setCompleted] = useState(like);
  const [unCompleted, setUnCompleted] = useState(dislike);

  useEffect(() => {
    setCompleted(like);
    setUnCompleted(dislike);
  }, []);


  return (
    <div className='main-container'>
        <div className='cards'>
          <div>
            <img src={image} className='cards-img' alt='' />
          </div>

          <div className='description'>
          <div className='description-film'>
            <p className="cards-title">{title}</p>
            <p className="cards-category">{category}</p>
          </div>

          <div className="description-likes">
          <div className='setup-likes'>
            <ThumbUpIcon onClick={() => handleLike()} />
            <p className='likes'>{likes}</p>
          </div>
          <div className='setup-dislikes'>
            <ThumbDownAltIcon onClick={() => handleDislike()} />
            <p className='dislikes'>{dislikes}</p> 
          </div>
        </div>
        <div className='delete-btn'>
            <DeleteIcon onClick={onDelete}/>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Card;
