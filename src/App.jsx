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
            <a href="google.co.in">Products</a>
            <ul>
              <li className="extends">
                <a href="google.co.in">Dog Supplies</a>
                <ul>
                  <li>
                    <a href="google.co.in">Food & Treats</a>
                  </li>
                  <li>
                    <a href="google.co.in">Toys</a>
                  </li>
                  <li>
                    <a href="google.co.in">Beds & Furniture</a>
                  </li>
                  <li>
                    <a href="google.co.in">Outdoor Supplies</a>
                  </li>
                  <li>
                    <a href="google.co.in">Clothing</a>
                  </li>
                </ul>
              </li>

              <li className="extends">
                <a href="google.co.in">Cat Supplies</a>
                <ul>
                  <li>
                    <a href="google.co.in">Food & Treats</a>
                  </li>
                  <li>
                    <a href="google.co.in">Toys</a>
                  </li>
                  <li>
                    <a href="google.co.in">Beds & Furniture</a>
                  </li>
                </ul>
              </li>

              <li className="extends">
                <a href="google.co.in">Bird Supplies</a>
                <ul>
                  <li>
                    <a href="google.co.in">Food & Treats</a>
                  </li>
                  <li>
                    <a href="google.co.in">Toys</a>
                  </li>
                  <li>
                    <a href="google.co.in">Furniture</a>
                  </li>
                </ul>
              </li>
              <li className="extends">
                <a href="google.co.in">Fish Supplies</a>
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

          <li className="extends">
            <a href="google.co.in">Services</a>
            <ul>
              <li className="extends">
                <a href="google.co.in">Grooming</a>
                <ul>
                  <li>
                    <a href="google.co.in">Coat Care</a>
                  </li>
                  <li>
                    <a href="google.co.in">Nail Care</a>
                  </li>
                  <li>
                    <a href="google.co.in">Doggie Deluxe Spa Day</a>
                  </li>
                </ul>
              </li>
              <li className="extends">
                <a href="google.co.in">Boarding</a>
                <ul>
                  <li>
                    <a href="google.co.in">Short Term Boarding</a>
                  </li>
                  <li>
                    <a href="google.co.in">Doggie Daycare</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="extends">
            <a href="google.co.in">Locations & Hours</a>
            <ul>
              <li>
                <a href="google.co.in">North America</a>
              </li>
              <li>
                <a href="google.co.in">Europe</a>
              </li>
            </ul>
          </li>
          <li className="extends">
            <a href="google.co.in">About Us</a>
            <ul>
              <li>
                <a href="google.co.in">Our Team</a>
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
