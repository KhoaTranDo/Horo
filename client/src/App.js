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
import rootRoutes from './Components/admin/rootRoutes';
import NoMatch from './Components/nomatch';

import {MainSearch} from './Components/SearchMap/MainSearch'
import SingleRoom from './Components/Homepage/pages/SingleRoom'
import Rooms from './Components/Homepage/pages/Rooms'
import Profile from './Components/Profile/Profile'

// demo
import register from './Components/Login-register/Signup'
import login from './Components/Login-register/Signin'

//Book Room
import BookRoom from './Components/BookRoom/BookRoom'
import AddRoom from './Components/Addroom/Addroom'

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
         <Route exact path='/room/' component={Detail}/>
         <Route exact path='/bookroom' component={BookRoom}/>
         <Route exact path='/addroom' component={AddRoom}/>
         <Route exact path='/searchmap' component={MainSearch}/>
         <Route exact path="/rooms/:slug" component={SingleRoom} />
         <Route exact path='/admin' component={rootRoutes} />
         <Route exact path='/profile' component={Profile} />
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
