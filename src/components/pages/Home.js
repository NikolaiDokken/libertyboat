import React, { Component } from "react";
import Navbar from "../components/Navbar.js";
import "../../styles/Home.css";

export default class Home extends Component {
  render() {
    const { location } = this.props;
    return (
      <div>
        <img
          class="header-image"
          src="resources/header.png"
          alt="08.07.19"
        ></img>
        <Navbar location={location} />

        <div class="card mb-3" style={{ "max-width": "100%" }}>
          <div class="row no-gutters">
            <div class="col-md-6" styles={{"width": "50%"}}>
              <img
                src="./resources/finnAnnonse.png"
                class="card-img"
                alt="..."
                styles={{"width": "100%"}}
              ></img>
            </div>
            <div class="col-md-6">
              <div class="card-body">
                <h5 class="card-title"></h5>
                <table class="table table-striped">
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
      </div>
    );
  }
}
