import "./App.css";
import React from "react";

import "./navbar";

import "https://code.jquery.com/jquery-3.4.1.min.js";
import "https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js";

function App() {
  return (
    <header>
      <nav>
        <ul class="navigation-menu">
          <li>
            <a href="#">Home</a>
          </li>
          <li class="extends">
            <a href="#">Products</a>
            <ul>
              <li class="extends">
                <a href="#">Dog Supplies</a>
                <ul>
                  <li>
                    <a href="#">Food & Treats</a>
                  </li>
                  <li>
                    <a href="#">Toys</a>
                  </li>
                  <li>
                    <a href="#">Beds & Furniture</a>
                  </li>
                  <li>
                    <a href="#">Outdoor Supplies</a>
                  </li>
                  <li>
                    <a href="#">Clothing</a>
                  </li>
                </ul>
              </li>

              <li class="extends">
                <a href="#">Cat Supplies</a>
                <ul>
                  <li>
                    <a href="#">Food & Treats</a>
                  </li>
                  <li>
                    <a href="#">Toys</a>
                  </li>
                  <li>
                    <a href="#">Beds & Furniture</a>
                  </li>
                </ul>
              </li>

              <li class="extends">
                <a href="#">Bird Supplies</a>
                <ul>
                  <li>
                    <a href="#">Food & Treats</a>
                  </li>
                  <li>
                    <a href="#">Toys</a>
                  </li>
                  <li>
                    <a href="#">Furniture</a>
                  </li>
                </ul>
              </li>
              <li class="extends">
                <a href="#">Fish Supplies</a>
                <ul>
                  <li>
                    <a href="#">Food</a>
                  </li>
                  <li>
                    <a href="#">Aquariums</a>
                  </li>
                  <li>
                    <a href="#">Rocks & Decorations</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li class="extends">
            <a href="#">Services</a>
            <ul>
              <li class="extends">
                <a href="#">Grooming</a>
                <ul>
                  <li>
                    <a href="#">Coat Care</a>
                  </li>
                  <li>
                    <a href="#">Nail Care</a>
                  </li>
                  <li>
                    <a href="#">Doggie Deluxe Spa Day</a>
                  </li>
                </ul>
              </li>
              <li class="extends">
                <a href="#">Boarding</a>
                <ul>
                  <li>
                    <a href="#">Short Term Boarding</a>
                  </li>
                  <li>
                    <a href="#">Doggie Daycare</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="extends">
            <a href="#">Locations & Hours</a>
            <ul>
              <li>
                <a href="#">North America</a>
              </li>
              <li>
                <a href="#">Europe</a>
              </li>
            </ul>
          </li>
          <li class="extends">
            <a href="#">About Us</a>
            <ul>
              <li>
                <a href="#">Our Team</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default App;
