import React from 'react';

import { BrowserRouter ,Route ,Routes } from "react-router-dom";

import Navigation from '../Navigation'
import Footer from '../Footer'
import Home from '../pages/home/home.js'
import Contact from '../pages/contact/contact'
import Works from '../pages/works/works.js'
import About from '../pages/about/about.js'
import Buyaladdin from '../pages/features/features.js'

import SmoothScroll from '../SmoothScroll/SmoothScroll';

import './App.css';

const App = (props) => (
    <BrowserRouter>
      <Navigation />
        {/* <SmoothScroll>   */}
          <Routes>
            <Route exact={true} path ="portfolio/About" element={<About />} />
            <Route exact={true} path ="portfolio/Works" element={<Works />} />
            <Route exact={true} path ="portfolio/Contact" element={<Contact />} />
            <Route exact={true} path ="portfolio/Buyaladdin" element={<Buyaladdin />} />
            <Route exact={true} path ="/" element={<Home />} />
            <Route exact={true} path ="portfolio" element={<Home />} />
          </Routes>
          <Footer />
        {/* </SmoothScroll> */}
    </BrowserRouter>
);

export default App;
