
import './App.css';
import Home from './pages/homes/Home'
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Profile from './pages/profile/Profile';
import {BrowserRouter as Router , Switch , Route,Redirect} from "react-router-dom"
import { AuthContext } from './context/AuthContext';
import {useContext} from 'react'
function App() {

  const {user} = useContext(AuthContext)
  return (
    <div >
      <Router>
        <Switch>
          <Route exact path="/">
            {user ? <Home/> : <Register/>}
          </Route>
          <Route path="/profile/:username">
            <Profile/>
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
          <Route path="/auth/login">
            {user ? <Redirect to='/'/> : <Login/>}
          </Route>
        </Switch>
      </Router>
      
      
    </div>
  );
}

export default App;
