import React from 'react';
import Button from './Button';
import Card from './Card';
import classes from './Home.module.css';

const Home = (props) => {
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onClick ={props.onLogout}>logout</Button>
    </Card>
  );
};

export default Home;