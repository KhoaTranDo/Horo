import React from 'react'
import {logOut} from '../../action/auth'
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

const Dashboard = ({isLoggedIn , logOut}) => {
    
    return(
        <div>
            <h1 >Dashboard</h1>
            <br/>
            <Link to="/register" style={{display: isLoggedIn ? 'none':'block' }}>Register</Link>
            <br/>
            <Link to="/login" style={{display:isLoggedIn? 'none':'block'}} >LoginLogin</Link>
            {
                
                isLoggedIn ? (
                    <div>
                        <h1>You are Logged in</h1>
                        <br/>
                        <button onClick={()=>logOut()}>Login out</button>
                    </div>
                )
                :
                (
                    <div>
                        <h1>You are Not Logged in</h1>
                    </div>
                )
            }
        </div>
    )
}

const mapStateToProps= state =>({
    isLoggedIn: state.isLoggedIn
});

export default connect(mapStateToProps,{logOut})(Dashboard)