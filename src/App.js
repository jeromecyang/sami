import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Card from './Card';

const App = () => {
  return (
    <div>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
      <Card />
    </div>
  );
}

export default App;