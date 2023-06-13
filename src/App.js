import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Pages/Home';
import NavBar from './NavBar';
import About from './Pages/About';
import Shop from './Pages/Shop';
import Item from './Pages/ItemDetails';


function App() {

  return (
    <Router>
      <div className="App">

        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/shop"  element={<Shop></Shop>} />
          <Route path="/about"  element={<About></About>} />
          <Route path="/shop/:id"  element={<Item></Item>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
