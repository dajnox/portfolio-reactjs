import './style.css';
import './Bootstrap.css';
import React, { useState, useEffect } from 'react';

//Fontawesom
import './Fontawesomicon/index.js';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import persimage from './images/personalimg.png';
import instalogo from './images/insta-logo.png';
import maillogo from './images/maillogo.png';
import githublogo from './images/githublogo.png';
import hslogo from './images/hslogo.png';
import baterijapola from './images/battery-half.png';


function App() {
  const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
           setInterval(() => setDateState(new Date()), 30000);
    }, []);
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-sm-2 col-md-offset-4">
            <div data-aos="flip-left" className="card-body">
            <div className="card-icon">
              <img src={persimage} alt="logo" />
              <img class="image-hover" src={hslogo} alt="hs logo"/>
            </div>
            <div className="card-infobatt">
              <img src={baterijapola} alt="baterija" />
              <p className="satvrijeme">{dateState.toLocaleString('eu-US', {
                hour: 'numeric',
                minute: 'numeric',
                hour24: true,
                })}
              </p>

            </div>
            <div className="card-title">
              <p>hajrudin <span>softic</span></p>
            </div>
            <div className="card-desc">
              <h4>System Administrator & ITA Student & Front-end Developer & Microsoft Deskt. App. Dev.</h4>
            </div>
            <div className="card-random">
              <h4>"There is only one thing that makes a dream impossible to achieve: the fear of failure."</h4><p>- Paulo Coelho</p>
            </div>

            <div className="card-footer">
              <p>hajrudin.dev</p>
            </div>
            <div className="card-socials">
              <a href="https://www.instagram.com/softicc.h/" rel="noopener noreferrer" target="_blank"><img src={instalogo} alt="instagram logo" /></a>
              <a href="mailto:hajrudindev@gmail.com" rel="noopener noreferrer" target="_blank"><img src={maillogo} alt="mail logo" /></a>
              <a href="https://github.com/dajnox" rel="noopener noreferrer" target="_blank"><img src={githublogo} alt="github logo" /></a>
            </div>
          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
