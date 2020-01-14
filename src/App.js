import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'antd/dist/antd.css'; 
import './App.css';

import Home from './component/home';
import Css from './component/css';
import Es from './component/es';
import Header from './common/header';
import Slider from './common/slider';
import BackTop from './common/backTop';

function App() {
  return (
    <Router>
      <div className='wrap'>
        <Header/>
        <div className='content'>
          <Slider/>
          <div className='content-right'>
              <Route exact path="/" component={Home} />
              <Route path="/css" component={Css} />
              <Route path="/es" component={Es} />
          </div>
        </div>
        <BackTop/>
      </div>
    </Router>
  );
}

export default App;
