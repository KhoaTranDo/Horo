import React,{useEffect} from 'react';
import Navbar from './Components/navbar/navbar'
import './App.css';
import store from './store'
import Homepage from './Components/Homepage/Homepage'
import Detail from './Components/Detail-room/RoomDetail'
import {  BrowserRouter  as Router, Route , Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { loadUser } from './action/auth';
import { setToken } from './setToken';
import loginRegister from './Components/Login-register/loginRegister';
import {MainSearch} from './Components/SearchMap/MainSearch'


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
         
  
          <div>
        <Switch>
         <Route exact path='/account' component={loginRegister}/>
         <Route exact path='/' component={Homepage}/>
         <Route exact path='/rooms' component={Detail}/>
        </Switch>
         </div>
        </Router>
        </Provider>
          {/* <MainSearch/> */}
      {/* </div>  */}
      </>
  );
}

export default App;
