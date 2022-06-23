import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Pagination() {
  return (
    <div className='pagination'>
        <div>
            <ArrowBackIcon />
            <p>Préc.</p>
        </div>
        <div>
            <ArrowForwardIcon />
            <p>Suiv.</p>
        </div>


    </div>
  )
}

export default Pagination