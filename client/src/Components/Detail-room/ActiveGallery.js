import React from 'react'

const ActiveGallery = ({activeGallery}) =>{
    return(
        <div className='acive-image'>
              <img src={activeGallery.imgUrl}  className='acive-image' alt=''/>
        </div>
    )
}

export default ActiveGallery