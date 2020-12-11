import React,{useEffect,useState} from 'react';
import Navbar from './Components/navbar/navbar'
import './App.css';
import store from './store'
import Homepage from './Components/Homepage/Homepage'
import Detail from './Components/Detail-room/RoomDetail'
import {  BrowserRouter  as Router, Route , Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { loadUser } from './action/auth';
import { setToken } from './setToken';
import rootRoutes from './Components/admin/rootRoutes';
import NoMatch from './Components/admin/nomatch';
import loginRegister from './Components/Login-register/loginRegister';
import {MainSearch} from './Components/SearchMap/MainSearch'
import SingleRoom from './Components/Homepage/pages/SingleRoom'
import Rooms from './Components/Homepage/pages/Rooms'
import About from './Components/Homepage/pages/About';

import Contact from './Components/Homepage/pages/Contact';
import Booknow from './Components/Homepage/pages/Booknow';


// demo
import register from './Components/Login-register/Signup'
import login from './Components/Login-register/Signin'

if(localStorage.getItem('token')){
  setToken(localStorage.getItem('token'));
}
function App(){

  useEffect(()=>{
    store.dispatch(loadUser());
  },[])

  return (
    <>
    {/* <div className='App'> */}
      <Provider store={store}>
        <Router>
         <Navbar/>
        <Switch>
        <Route exact path='/account' component={login}/>
        <Route exact path='/register' component={register}/>
        <Route exact path='/' component={Homepage}/>
         <Route exact path='/rooms' component={Rooms}/>
         <Route exact path='/searchmap' component={MainSearch}/>
         <Route exact path="/rooms/:slug" component={SingleRoom} />
         <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/booknow/:slug" component={Booknow} />
         <Route exact path='/admin' component={rootRoutes} />
					<Route component={NoMatch} />
        </Switch>
       
        </Router>
        </Provider>
          {/* <MainSearch/> */}
      {/* </div>  */}
      </>
  );
}

export default App;
