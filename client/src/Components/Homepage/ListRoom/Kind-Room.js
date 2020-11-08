import React, { Component } from 'react';

export default class KindRoom extends Component{
    render(){
        return(
            <div className="col-lg-2 sidebar">
              <div className="list-group">
                <a href="/#" className="list-group-item">
                  Category 1
                </a>
                <a href="/#" className="list-group-item">
                  Category 2
                </a>
                <a href="/#" className="list-group-item">
                  Category 3
                </a>
              </div>
            </div>
        )
    }
}