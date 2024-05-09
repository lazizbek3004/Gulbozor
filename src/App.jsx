import React, { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter, Routes, Route, Link, useLocation, useNavigate} from 'react-router-dom'
import Home from './components/Home/Home'
import Shop from './components/Shop/Shop'
import NoPage from './components/NoPage/NoPage'
import Logo from './images/Logo.svg'
import search from './images/Vector.svg'
import savat from './images/Savat.svg'
import Login from './components/Login/Login'
import LogOut from './images/LogOut.svg'
import eks from './images/X.svg'





function App() {
  const [isSearching, setIsSearching] = useState(false);
  const navigate = useNavigate();
  const [modal, setModal] = useState(false)
  function changeSearch(){
    setIsSearching(!isSearching) 
  }
 
  const loginButton = () => {
    setModal(!modal)
  }
  const location = useLocation();
  
  
  useEffect(() => {
    if(modal){
      document.body.style.overflow = "hidden"
    }else{
      document.body.style.overflow = "auto"
    }
  }, [modal]);

  return(
    <>
   
        <nav className='navbar'>
            <div className='logo'>
              <Link to="/">
              <img src={Logo} alt="logo" />
              </Link>
            </div>
            <ul>
                <li>
                  <Link to="/" className={location.pathname == "/" ? "nav greenNav": "nav"}>Home</Link>
                </li>
                <li >
                  <Link to="/shop" className={location.pathname == "/shop" ? "nav greenNav": "nav"}>Shop</Link>
                </li>
                <li className='nav'>
                  <Link to="/plant" className={location.pathname == "/plant" ? "nav greenNav": "nav"}>Plant Care</Link>
                </li>
                <li className='nav'>
                  <Link to="/blogs" className={location.pathname == "/blogs" ? "nav greenNav": "nav"}>Blogs</Link>
                </li>
            </ul>
            <div className='restPart'>
              <div className='searchIcon' >
              <input type="text"
              placeholder='Search for something...'
              className={isSearching? "activeInput":"inActiveInput"}
              autoFocus />
                <img src={search} alt="" onClick={changeSearch} />
              </div>
              <img src={savat} alt="savat" />
              
              <button className='loginBtn' onClick={loginButton}>
                <img src={LogOut} alt="logout" />
                <span>Login</span>
              </button>
              
            </div>
        </nav>
        {modal && (<div className='activeLogin'>
           <div className='modalInner'>
            <div id='register'>
              <p id='loginText'>Login</p>
              <p id='loginText'>|</p>
              <p id='loginText'>Register</p>
            </div> 
            <p id='enterUser'>Enter your username and password to login.</p>
            <input type="text" id="input1" placeholder='almamun_uxui@outlook.com'/>
            <input type="password" id='input2' />
            <p id='forgotPas'>Forgot Password?</p>
            <button id='loginBtn'>Login</button>
            <div id='loginWith'>
              <div id='line'></div>
              <span id='loginw'>Or login with</span>
              <div id='line1'></div>
            </div>
            <div id='google'>
              <p>Login with Google</p>
            </div>
            <div id='facebook'>
              <p>Login with Facebook</p>
            </div>
            <button onClick={loginButton} id='closeBtn'><img src={eks} alt="" /></button>
           </div>
        </div>)}
        <Routes>
            <Route index element={<Home />} />
            <Route path='/' element={<Home />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='*' element={<NoPage />} />
            <Route path='/login' element={<Login />}/>
        </Routes>
   
</>
  )
}

export default App
