import React, { useState,useEffect } from 'react';

import Login from './Components/Login';
import Home from './Components/Home';
import MainHeader from './Components/MainHeader';
import AuthContext from './store/auth-context';
function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
 
  useEffect(() =>{
    const storedUserLoggedInInformation =localStorage.getItem('isLoggedIn');
    if(storedUserLoggedInInformation==='1'){
      setIsLoggedIn(true);
    }

  },[]);
  const loginHandler = (email, password) => {
    // We should of course check email and password
   
    // But it's just a dummy/ demo anyways
    localStorage.setItem('isLoggedIn','1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    // <React.Fragment>
    <AuthContext.Provider value={{
      isLoggedIn:isLoggedIn,
      onLogout:logoutHandler
    }}>
      <MainHeader />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
      </AuthContext.Provider>
    // </React.Fragment>
  );
}

export default App;


