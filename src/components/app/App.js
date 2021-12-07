import React from 'react';

import { BrowserRouter ,Route ,Routes } from "react-router-dom";

import Navigation from '../Navigation'
import Footer from '../Footer'
import Home from '../pages/home/home.js'
import Contact from '../pages/contact/contact'
import Works from '../pages/works/works.js'
import About from '../pages/about/about.js'

import './App.css';

const App = (props) => (
    <BrowserRouter>
      <Navigation />

      <Routes>
        <Route exact={true} path ="/About" element={<About />} />
        <Route exact={true} path ="/Works" element={<Works />} />
        <Route exact={true} path ="/Contact" element={<Contact />} />
        <Route exact={true} path ="/" element={<Home />} />
      </Routes>

      <Footer />
    </BrowserRouter>
);

export default App;
