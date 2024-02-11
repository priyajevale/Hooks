import React,{ useContext } from 'react';

import Login from './Components/Login';
import Home from './Components/Home';
import MainHeader from './Components/MainHeader';
import AuthContext from './store/auth-context';
function App() {
   const ctx = useContext(AuthContext);
  return (
   <React.Fragment>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login  />}
        {ctx.isLoggedIn && <Home />}
      </main>
      </React.Fragment>
      
  );
}

export default App;


