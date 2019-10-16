import React, { Component } from "react";
import Navbar from "../components/Navbar.js";
import "../../styles/Gallery.css";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container mx-auto my-4 w-100 ">
          <div class="bd-example">
            <div
              id="carouselExampleInterval"
              class="carousel slide"
              data-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active" data-interval="10000">
                  <img
                    src="./resources/1.png"
                    class="d-block w-100"
                    alt="..."
                  ></img>
                </div>
                <div class="carousel-item" data-interval="2000">
                  <img
                    src="./resources/2.png"
                    class="d-block w-100"
                    alt="..."
                  ></img>
                </div>
                <div class="carousel-item">
                  <img
                    src="./resources/3.jpg"
                    class="d-block w-100"
                    alt="..."
                  ></img>
                </div>
              </div>
              <a
                class="carousel-control-prev"
                href="#carouselExampleInterval"
                role="button"
                data-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#carouselExampleInterval"
                role="button"
                data-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
