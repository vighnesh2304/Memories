import React from 'react';
import { Container} from '@material-ui/core';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Auth from './components/Auth/Auth';


const App = () => {

  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar/>
        <Routes>
          <Route path='/' exact Component={Home}/>
          <Route path='/auth' exact Component={Auth}/>
        </Routes>
    </Container>
    </BrowserRouter>
  );
};

export default App;