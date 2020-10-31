import React from 'react'

const Listphoto = ({imgUrl,handleClick,index}) =>{
    return(
        <div style={styles}>
                <img src={imgUrl}
                    style={{
                        width:'100%',
                        height:'100%',
                        cursor:'pointer'
                    }}
                    onClick={handleClick}
                    data-index ={index}
                    alt=''
                ></img>
        </div>
    )
}

const styles = {
    height: '50%',
    width: '25%',
    float:'right'
}

export default Listphoto