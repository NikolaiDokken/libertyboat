import React, { Component } from "react";
import Navbar from "../components/Navbar.js";
import "../../styles/Gallery.css";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const images = [
  "./resources/1.png",
  "./resources/2.png",
  "./resources/3.jpg",
  "./resources/5.png",
  "./resources/1967.jpg",
  "./resources/1978.jpg",
  "https://i.imgur.com/TzhCbti.mp4"
];

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;

    return (
      <div>
        <Navbar />
        <div>
          <div class="container">
            <div class="row">
              <a
                onClick={() => this.setState({ photoIndex: 0, isOpen: true })}
                class="col-md-4"
              >
                <img src={images[0]} class="img-fluid rounded"></img>
              </a>
              <a
                onClick={() => this.setState({ photoIndex: 1, isOpen: true })}
                class="col-md-4"
              >
                <img src={images[1]} class="img-fluid rounded"></img>
              </a>
              <a
                onClick={() => this.setState({ photoIndex: 2, isOpen: true })}
                class="col-md-4"
              >
                <img src={images[2]} class="img-fluid rounded"></img>
              </a>
            </div>
            <div class="row">
              <a
                onClick={() => this.setState({ photoIndex: 3, isOpen: true })}
                class="col-md-4"
              >
                <img src={images[3]} class="img-fluid rounded"></img>
              </a>
              <a
                onClick={() => this.setState({ photoIndex: 4, isOpen: true })}
                class="col-md-4"
              >
                <img src={images[4]} class="img-fluid rounded"></img>
              </a>
              <a
                onClick={() => this.setState({ photoIndex: 5, isOpen: true })}
                class="col-md-4"
              >
                <img src={images[5]} class="img-fluid rounded"></img>
              </a>
            </div>
            <div class="row">
              <a
                onClick={() => this.setState({ photoIndex: 6, isOpen: true })}
                class="col-md-4"
              >
                <video src={images[6]} class="img-fluid rounded"></video>
              </a>
            </div>
          </div>

          {isOpen && (
            <Lightbox
              mainSrc={images[photoIndex]}
              nextSrc={images[(photoIndex + 1) % images.length]}
              prevSrc={images[(photoIndex + images.length - 1) % images.length]}
              onCloseRequest={() => this.setState({ isOpen: false })}
              onMovePrevRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + images.length - 1) % images.length
                })
              }
              onMoveNextRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + 1) % images.length
                })
              }
            />
          )}
        </div>
      </div>
    );
  }
}
