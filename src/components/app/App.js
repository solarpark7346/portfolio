import React from 'react';

import { BrowserRouter ,Route ,Routes } from "react-router-dom";

import Background from '../Background';
import Home from '../pages/home/home.js'

import SmoothScroll from '../util/SmoothScroll/SmoothScroll';

import './App.css';

const App = (props) => (
    <BrowserRouter>
      <Background />
        {/* <SmoothScroll>   */}
          <Routes>
            <Route exact={true} path ="/" element={<Home />} />
            <Route exact={true} path ="portfolio" element={<Home />} />
          </Routes>
        {/* </SmoothScroll> */}
    </BrowserRouter>
);

export default App;
