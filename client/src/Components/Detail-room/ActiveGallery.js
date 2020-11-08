import React from 'react'

const ActiveGallery = ({activeGallery}) =>{
    return(
<<<<<<< HEAD
        <div className='acive-image'>
              <img src={activeGallery.imgUrl}  className='acive-image' alt=''/>
=======
        <div style={styles}>
            <img src={activeGallery.imgUrl} style={{width:'100%', height:'100%'}} alt=''/>
>>>>>>> demo1
        </div>
    )
}

<<<<<<< HEAD
=======
const styles = {
    height: '100%',
    width: '100%',
    flex:'3',
    background: '#333',
    position: 'relative',
}

>>>>>>> demo1
export default ActiveGallery