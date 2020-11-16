import React from 'react'
import Listphoto from './listphoto'

const GalleryGrid = ({gallery,handleClick}) =>{

    return(
        <div className='grid-image'>
            {
                
               gallery.map((galleri,index) => {
                   return(
                       <Listphoto
                        key={galleri.imgUrl}
                        imgUrl = {galleri.imgUrl}
                        handleClick = {handleClick}
                        index={index}
                        max={gallery.length}
                       />
                   )
               })
            }
        </div>
    )
}


export default GalleryGrid