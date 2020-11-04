import React from 'react'

const ActiveGallery = ({activeGallery}) =>{
    return(
        <div style={styles}>
            <img src={activeGallery.imgUrl} style={{width:'100%', height:'100%'}} alt=''/>
        </div>
    )
}

const styles = {
    height: '100%',
    width: '100%',
    flex:'3',
    background: '#333',
    position: 'relative',
}

export default ActiveGallery