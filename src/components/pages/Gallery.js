import React, { Component } from "react";
import Navbar from "../components/Navbar.js";
import "../../styles/Gallery.css";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

////////////// HER LEGGES BILDER INN MED TITTEL OG BESKRIVELSE //////////////////////
// Bilder legges inn på formen: ["link til mappe", "tittel", "beskrivelse"],
const images = [
  ["./resources/1.png", "Title", "Her er en beskrivelse av bildet"],
  ["./resources/2.png", "Title", "blablabla"],
  ["./resources/3.jpg", "Title", "test"],
  ["./resources/5.png", "Title", "heisann"],
  ["./resources/1967.jpg", "Title", "sdjnfdkf"],
  ["./resources/1978.jpg", "Title", "yo"],
  ["https://i.imgur.com/Kvppbw3.mp4", "dfhbdsfj"],
  ["./resources/rattKonsoll.jpg", "Title", "bfhbjhbf"]
];

////////////// KODE ETTER DENNE LINJEN SKAL IKKE RØRES /////////////////////////

export default class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;
    console.log(images[0][0]);

    return (
      <div>
        {isOpen ? "" : <Navbar />}

        <div class="mt-3">
          <div className="card-columns">
            {images.map((e, i) => (
              <div class="card mx-5 rounded-0 border-0">
                <a
                  onClick={() => this.setState({ photoIndex: i, isOpen: true })}
                >
                  <img src={e[0]} class="img-fluid rounded-0"></img>
                </a>
              </div>
            ))}
          </div>
        </div>
        {this.state.isOpen && (
          <Lightbox
            className="custom-lightbox"
            mainSrc={images[this.state.photoIndex][0]}
            imageTitle={images[this.state.photoIndex][1]}
            imageCaption={images[this.state.photoIndex][2]}
            nextSrc={images[(photoIndex + 1) % images.length][0]}
            prevSrc={
              images[(photoIndex + images.length - 1) % images.length][0]
            }
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
            style={{ zIndex: 10 }}
          />
        )}
      </div>
    );
  }
}
