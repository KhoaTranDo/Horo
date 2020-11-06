import React,{useEffect} from 'react';
import Navbar from './Components/navbar/navbar'
import Register from './Components/Login-register/loginRegister'
import Login from './Components/Login-register/Login' 
import './App.css';
import store from './store'
import Dashboard from './Components/dashboard/dashboard'
import {  BrowserRouter  as Router, Route , Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { loadUser } from './action/auth';
import { setToken } from './setToken';
if(localStorage.getItem('token')){
  setToken(localStorage.getItem('token'));
}
function App(){

  useEffect(()=>{
    store.dispatch(loadUser());
  },[])

  return (
    <div className='App'>
      <Navbar/>
      <Provider store={store}>
        <Router>
          <div>
         <Navbar/>
         </div>
          <div style={{marginTop:'0px'}}>
        <Switch>
         <Route exact path='/register' component={Register}/>
         <Route exact path='/' component={Dashboard}/>
         <Route exact path='/login' component={Login}/>
        </Switch>
        </div>
        </Router>
        </Provider>
        
      </div> 
  );
}

export default App;
