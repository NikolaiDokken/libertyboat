import React, { Component } from "react";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import "../../styles/Home.css";

export default class Home extends Component {
  render() {
    const { location } = this.props;
    return (
      <div>
        <img
          className="header-image"
          src="resources/header.png"
          alt="08.07.19"
        ></img>
        <Navbar location={location} />

        <div className="card mb-3 my-4" style={{ maxWidth: "100%" }}>
          <div className="row no-gutters">
            <div className="col-md-6 p-2 my-auto" styles={{ width: "50%" }}>
              <img
                src="./resources/finnAnnonse.png"
                className="card-img"
                alt="..."
                styles={{ width: "100%" }}
              ></img>
            </div>
            <div className="col-md-6 my-auto">
              <div className="card-body">
                <table className="table table-striped">
                  <tbody>
                    <tr>
                      <th scope="row">Båten står i</th>
                      <td>Norge</td>
                    </tr>
                    <tr>
                      <th scope="row">Type</th>
                      <td>Cabincruiser</td>
                    </tr>
                    <tr>
                      <th scope="row">Årsmodell</th>
                      <td>1967</td>
                    </tr>
                    <tr>
                      <th scope="row">Lengde</th>
                      <td>49 fot</td>
                    </tr>
                    <tr>
                      <th scope="row">Bredde</th>
                      <td>430 cm</td>
                    </tr>
                    <tr>
                      <th scope="row">Motor</th>
                      <td>2 x Yanmar BY260 HK</td>
                    </tr>
                    <tr>
                      <th scope="row">Motorstr</th>
                      <td>520 hk</td>
                    </tr>
                    <tr>
                      <th scope="row">Maks fart</th>
                      <td>23 knop</td>
                    </tr>
                    <tr>
                      <th scope="row">Drivstoff</th>
                      <td>Diesel</td>
                    </tr>
                    <tr>
                      <th scope="row">Vekt</th>
                      <td>15 000 kg</td>
                    </tr>
                    <tr>
                      <th scope="row">Materiale</th>
                      <td>Tre</td>
                    </tr>
                    <tr>
                      <th scope="row">Farge</th>
                      <td>Mahogny/hvit</td>
                    </tr>
                    <tr>
                      <th scope="row">Soveplasser</th>
                      <td>8</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="card mb-3" style={{ maxWidth: "100%" }}>
          <div className="row no-gutters">
            <div className="col-md-6 my-auto">
              <div className="card-body">
                <h5 className="card-title">Funksjonalitet</h5>
                <p className="card-text">
                  Stor cockpit delvis under tak, delvis åpen. Stor "L­-Sofa" med
                  bord under åpen himmel som kan dekkes med kallesje. Luker i
                  dørken for adgang til motorrom. Luke akterut for tilgang til
                  akterkabin. Lav dør i siden for adkomst til dekk. Babord side
                  dobbelt sete i fartsretning med "frokostbord". Sete kan snus
                  slik at det vender mot hovedsalong ute. Under dobbeltsete er
                  det kjøleboks samt stuverom. Helt akterut er det ett sete i
                  hvert hjørne. Brede og gode dollbord rundt hele båten. På
                  styrbord side akterut er det montert badetrapp som felles ned
                  manuelt. fordekket er også teakbelagt med elektrisk
                  ankervinsj. Hovedadgang til nedre salong med luke/dør mellom
                  styreposisjon og fremre seter. Styreposisjonen styrbord er
                  under tak med dobbeltsete og alt utstyr du forventer på en
                  slik båt. Stor akterkabin med nedgang fra cockpit rommer to
                  enkeltsenger, garderobeskap og kommode samt bad/wc med dusj.
                  Forut styreposisjonen finner du trapp ned til en stor salong
                  med "U­sofa", bord og pantry. Byssa inneholder et stort
                  kjøleskap med 220V platetopp samt masser av skapplass. Varmt
                  og kaldt vann i dobbel stålvask. I salongen er det integrert
                  stereo som også går til cockpit ute. Forut salong er en
                  fire­køyers lugar med mulighet for omdannelse til sofaer, samt
                  klesskap og kommode. Forut lugaren finnes et WC med vask, som
                  går over båtens bredde med gjennomgang til forpigg. Forpiggen
                  har soveplass for to, og luke for lufting samt adkomst til
                  dekk.
                </p>
                <p className="card-text">
                  <small className="text-muted">Oppdatert 13.10.2019</small>
                </p>
              </div>
            </div>
            <div className="col-md-6 p-2 my-auto">
              <img
                src="./resources/salong1978.jpg"
                className="card-img"
                alt="..."
                styles={{ width: "100%" }}
              ></img>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
