import React, { Component } from "react";
import Navbar from "../components/Navbar.js";
import "../../styles/History.css";

export default class Register extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div class="container py-5">
          <div class="row text-center text-white mb-5">
            <div class="col-lg-8 mx-auto">
              <h1 class="display-4">Libertys Historie</h1>
              <p class="lead mb-0">Eiere og inngrep gjort siden 1967</p>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-7 mx-auto">
              <ul class="timeline">
                <li class="timeline-item bg-white rounded ml-3 p-4 shadow">
                  <div class="timeline-arrow"></div>
                  <h2 class="h5 mb-0">Overbygg akterplatform fjernet</h2>
                  <span class="small text-gray">
                    <i class="fa fa-clock-o mr-1"></i>Arne Gunnar Dokken
                  </span>
                  <p class="text-small mt-2 font-weight-light">
                    Overbygg på akterplatform fjernet, slik at det nå er
                    originalt. Dette gjort av båtverft på Lysaker. Båten ligger
                    på Blommenholm Båtforening i Bærum.
                  </p>
                  <img
                    src="./resources/nyAkter.jpg"
                    alt=""
                    style={{ width: "100%" }}
                  ></img>
                </li>
                <li class="timeline-item bg-white rounded ml-3 p-4 shadow">
                  <div class="timeline-arrow"></div>
                  <h2 class="h5 mb-0">
                    Arne Gunnar Dokken tar over Månestråle
                  </h2>
                  <span class="small text-gray">
                    <i class="fa fa-clock-o mr-1"></i>5 April, 2017
                  </span>
                  <p class="text-small mt-2 font-weight-light">
                    Båten får en ny eier, Arne Gunnar Dokken, som omdøper båten
                    til Liberty. Båten blir flyttet til Blommenholm Båtforening
                    i Bærum.
                  </p>
                </li>
                <li class="timeline-item bg-white rounded ml-3 p-4 shadow">
                  <div class="timeline-arrow"></div>
                  <h2 class="h5 mb-0">Båten er eid av Alexander Hegard</h2>
                  <span class="small text-gray">
                    <i class="fa fa-clock-o mr-1"></i>2001-2005
                  </span>
                  <p class="text-small mt-2 font-weight-light">
                    Båten går under navnet Hiawatha og en rekke arbeid utføres
                    på båten i denne perioden. Arbeidet ble gjort av
                    Båtvardsvarvet AB i Svineviken, Orust:
                  </p>
                  <div id="accordion">
                    <div class="card">
                      <div class="card-header" id="headingOne">
                        <h5 class="mb-0">
                          <button
                            class="btn btn-link"
                            data-toggle="collapse"
                            data-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            Overflate
                          </button>
                        </h5>
                      </div>

                      <div
                        id="collapseOne"
                        class="collapse"
                        aria-labelledby="headingOne"
                        data-parent="#accordion"
                      >
                        <div class="card-body">
                          Bunnen ble renskrapt, påført 6 strøk med blymønje, og
                          stoffet. Skrogsider ble renskrapt og malt opp med 7
                          strøk hvit maling.
                        </div>
                      </div>
                    </div>
                    <div class="card">
                      <div class="card-header" id="headingTwo">
                        <h5 class="mb-0">
                          <button
                            class="btn btn-link collapsed"
                            data-toggle="collapse"
                            data-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            Rekkestøtter og daviter
                          </button>
                        </h5>
                      </div>
                      <div
                        id="collapseTwo"
                        class="collapse"
                        aria-labelledby="headingTwo"
                        data-parent="#accordion"
                      >
                        <div class="card-body">
                          Fjernet rekkestøtter rundt dekk over akterkabin.
                          Fjernet aluminiums daviter som var levert originalt på
                          båten, og restaurerte akterdekk og innfestning i
                          forbindelse med skader forårsaket av davitene. Nye
                          rekkestøtter ble laget rundt båten. Dollbord og
                          fenderstøtte ble byttet til teak.
                        </div>
                      </div>
                    </div>
                    <div class="card">
                      <div class="card-header" id="headingThree">
                        <h5 class="mb-0">
                          <button
                            class="btn btn-link collapsed"
                            data-toggle="collapse"
                            data-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            Overbygg
                          </button>
                        </h5>
                      </div>
                      <div
                        id="collapseThree"
                        class="collapse"
                        aria-labelledby="headingThree"
                        data-parent="#accordion"
                      >
                        <div class="card-body">
                          Vinduer byttet med grønn-tone herdet glass med de
                          originale, men restaurerte elokserte
                          aluminiumsrammene. Overbygget er i plywwod med
                          relativt tykk(5 millimeter) mahogny fasade. Da båten
                          kom til Orust var det flere områder uten lakk på
                          overbygg og hadde store sprekkdannelser i det ytre
                          mahogny sjiktet. Disse ble fylt med brun epoxy. Videre
                          ble overbygget lakket og beiset. Ankervinsj ble
                          restaurert og nytt ankerspill ble montert.
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="timeline-item bg-white rounded ml-3 p-4 shadow">
                  <div class="timeline-arrow"></div>
                  <h2 class="h5 mb-0">
                    Båten er eid av Kristian Fredrik Horgens
                  </h2>
                  <span class="small text-gray">
                    <i class="fa fa-clock-o mr-1"></i>1978-2001
                  </span>
                  <p class="text-small mt-2 font-weight-light">
                    Under denne perioden het båten Hiawatha II. Båten ble
                    importert fra Sverige til Norge i 1978.
                  </p>
                  <img
                    src="./resources/1978.jpg"
                    alt=""
                    style={{ width: "100%" }}
                  ></img>
                </li>
                <li class="timeline-item bg-white rounded ml-3 p-4 shadow">
                  <div class="timeline-arrow"></div>
                  <h2 class="h5 mb-0">
                    Båten blir kontrahert av Haakon Onstad
                  </h2>
                  <span class="small text-gray">
                    <i class="fa fa-clock-o mr-1"></i>1967-1978
                  </span>
                  <p class="text-small mt-2 font-weight-light">
                    Haakon Ondstad, broren til Niels Onstad, som var Sonja
                    Hennies mann, kjøper båten og døper den Holma 2.
                  </p>
                  <p class="text-small mt-2 font-weight-light">
                    Under er det første bildet av båten da den ble levert av
                    Bootswerft Bölte til Haakon Onstad på bryggeanlegget til
                    Holma Säterin ved Gullmarsfjorden (mellom Munkedal og
                    Lysekil). Legg merke til at overleveringen er så fersk at
                    den fremdeles har tysk flagg.
                  </p>
                  <img
                    src="./resources/1967.jpg"
                    alt=""
                    style={{ width: "100%" }}
                  ></img>
                </li>
                <li class="timeline-item bg-white rounded ml-3 p-4 shadow">
                  <div class="timeline-arrow"></div>
                  <h2 class="h5 mb-0">
                    Båten stilles ut på båtutstilling i Amsterdam
                  </h2>
                  <span class="small text-gray">
                    <i class="fa fa-clock-o mr-1"></i>1965
                  </span>
                  <p class="text-small mt-2 font-weight-light">
                    Under følger video fra båtutstillingen i Amsterdam i 1965.
                    Båten vises litt ut i videoen (rundt 01:30), og omtales som
                    Comptesse.
                  </p>
                  <iframe
                    width="100%"
                    height="385px"
                    src="https://www.youtube.com/embed/69-a5jiHbFo"
                  ></iframe>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
