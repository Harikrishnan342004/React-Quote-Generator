import React from 'react';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Bookpage from './components/Bookpage';

const App = () => {
  return (
    <Router>
    <Navbar />
      <div>
      <Routes>
      <Route path="/" element={  <Home /> }> </Route>
      <Route path="/Bookpage" element={  <Bookpage />  }> </Route>
      </Routes>
      </div>

    </Router>
    
  );
}

export default App;
