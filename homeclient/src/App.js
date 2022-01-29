import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';
import Options_available from './components/Options_available';
import Customer from "./components/Customer";
import Success from "./components/Success";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/sign-up' element={ <SignUp /> }/>
          <Route  path='/Option/:cname' element={ <Options_available />}></Route>
          <Route path="/Filter/:name/:cost/:val" element={<Options_available />}></Route>
          <Route path="/customer/:cus_name/:cus_cost" element={<Customer />}></Route>
          <Route path="/success" element={<Success />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
