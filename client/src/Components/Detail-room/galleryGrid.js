import React from 'react'
import Listphoto from './listphoto'

const GalleryGrid = ({gallery,handleClick}) =>{
    return(
        <div style={styles}>
            {
               gallery.map((galleri,index) => {
                   return(
                       <Listphoto
                        key={galleri.imgUrl}
                        imgUrl = {galleri.imgUrl}
                        handleClick = {handleClick}
                        index={index}
                       />
                   )
               })
            }
        </div>
    )
}

const styles = {
    height: '100%',
    width: '100%',
    background: 'yellow',
    display: 'flex',
    flexDirection: "column"
}

export default GalleryGrid