import React,{useContext} from 'react';
import Button from './Button';
import Card from './Card';
import classes from './Home.module.css';
import AuthContext from '../store/auth-context';

const Home = (props) => {
  const authCtx = useContext(AuthContext);
  
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onClick ={authCtx.onLogout}>logout</Button>
    </Card>
  );
};

export default Home;