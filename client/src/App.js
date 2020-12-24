import React, { useEffect } from "react";
import Navbar from "./Components/navbar/navbar";
import "./App.css";
import store from "./store";
import Homepage from "./Components/Homepage/Homepage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { loadUser } from "./action/auth";
import { setToken } from "./api/setToken";
import rootRoutes from "./Components/admin/rootRoutes";
import NoMatch from "./Components/nomatch";
import MainRoom from "./Components/leesor/MainRoom"
import { MainSearch } from "./Components/SearchMap/MainSearch";
import SingleRoom from "./Components/Homepage/pages/SingleRoom";
import Profile from "./Components/Profile/MainProfile";
import About from "./Components/Homepage/pages/About";
import Contact from "./Components/Homepage/pages/Contact";
// Login Register
import register from "./Components/Login-register/Signup";
import login from "./Components/Login-register/Signin";

//Book Room
import BookRoom from "./Components/BookRoom/BookRoom";
import Add from "./Components/leesor/Addroom/Add";
import EditRoom from "./Components/leesor/Editroom/MainEditRoom"
if (localStorage.getItem("token")) {
  setToken(localStorage.getItem("token"));
}
function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <>
      {/* <div className='App'> */}
      <Provider store={store}>
        <Router>
          <Navbar />
          <div style={{ marginTop: "100px" }}>
            <Switch>
              <Route exact path="/account" component={login} />
              <Route exact path="/register" component={register} />
              <Route exact path="/" component={Homepage} />
              <Route exact path="/bookroom" component={BookRoom} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
              {/* Leesorr */}
              <Route exact path="/room/addroom" component={Add} />
              <Route exact path="/room/" component={MainRoom} />
              <Route exact path="/room/edit/:slug" component={EditRoom} />
       
              <Route exact path="/searchmap" component={MainSearch} />
              <Route exact path="/rooms/detail/:slug" component={SingleRoom} />
              {/* Admin */}
              <Route exact path="/admin" component={rootRoutes} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </Provider>
      {/* <Footer/> */}

      {/* <MainSearch/> */}
      {/* </div>  */}
    </>
  );
}

export default App;
