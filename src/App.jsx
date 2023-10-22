import "./App.css";
import React from "react";


function App() {
  return (
    <header>
      <nav>
        <ul className="navigation-menu">
          <li>
            <a href="google.co.in">Home</a>
          </li>
          <li className="extends">
            <a href="google.co.in">Board</a>
            <ul>
              <li className="extends">
                <a href="google.co.in">Advisory Board</a>
                
                  <li>
                    <a href="google.co.in">Editorial Board</a>
                  </li>

              
              </li>

              <li className="extends">
                
                <ul>
                  <li>
                    <a href="google.co.in">Food</a>
                  </li>
                  <li>
                    <a href="google.co.in">Aquariums</a>
                  </li>
                  <li>
                    <a href="google.co.in">Rocks & Decorations</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a href="google.co.in">Policy</a>
          </li>
          <li>
            <a href="google.co.in">Issues</a>
          </li>
          <li className="extends">
            <a href="google.co.in">Services</a>
            <ul>
              <li className="extends">
                <a href="google.co.in">Papers</a>
                <ul>
                  <li>
                    <a href="google.co.in">Call For Paper</a>
                  </li>
                  <li>
                    <a href="google.co.in">Paper  Template</a>
                  </li>
                </ul>
              </li>
              <li className="extends">
                <a href="google.co.in">Peer Review</a>
                <ul>
                  <li>
                    <a href="google.co.in">Peer Review Process</a>
                  </li>
                  <li>
                    <a href="google.co.in">Join As Reviewer</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
         
          <li className="extends">
            <a href="google.co.in">About Us</a>
            <ul>
              <li>
                <a href="google.co.in">FAQ's</a>
              </li>
              <li>
                <a href="google.co.in">Contact Us</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default App;
