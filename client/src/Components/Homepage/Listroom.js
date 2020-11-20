import React from 'react'
import Room from '../SearchMap/ListRoom/Room';
import data from './data'

export default function Listroom () {
  
    return (
     <>
               {data.map((item,index)=>{
                 return(
      <div className="col-lg-3 col-md-6 mb-4">
                  <div className="card h-100">
                    <a href={"/rooms/"+item.fields.slug}>
                      <img
                        className="card-img-top"
                        src={item.fields.images[1].fields.file.url}
                        alt=""
                      ></img>
                    </a>
                    <div className="card-body">
                      <h4 className="card-title">
                        <a href={"/rooms/"+item.fields.slug}>{item.fields.name}</a>
                      </h4>
                      <h5>${item.fields.price}</h5>
                      <p className="card-text">
                      {item.fields.extras[0]}
                      </p>
                    </div>
                    <div className="card-footer">
                      <small className="text-muted">
                        &#9733; &#9733; &#9733; &#9733; &#9734;
                      </small>
                    </div>
                  </div>
                </div>
                 )
                 })}
     </>
    );
  }