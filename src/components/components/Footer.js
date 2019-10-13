import React, { Component } from "react";
import "../../styles/Navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      // Footer
      <footer class="page-footer font-small bg-dark pt-4 text-light">
        <div class="container-fluid text-center text-md-left">
          <div class="row">
            <div class="col-md-6 mt-md-0 mt-3">
              <h5 class="text-uppercase">spørsmål/info</h5>
              <p>
                Ta kontakt dersom du har spørsmål om båten eller sitter på
                kunnskap om båtens fortid.
              </p>
            </div>

            <hr class="clearfix w-100 d-md-none pb-3"></hr>

            <div class="col-md-3 mb-md-0 mb-3">
              <h5 class="text-uppercase">Kontakt informasjon</h5>

              <ul class="list-unstyled">
                <li>
                  <div>Om båten</div>
                  <a href="mailto:dokkena@libertyboat.no">Dokkena@libertyboat.no</a>
                </li>
                <li>
                  <div>Om nettsiden</div>
                  <a href="mailto:nikolairdokken@gmail.com">NikolaiRDokken@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="footer-copyright text-center bg-secondary py-3">
          © 2018 Copyright: Nikolai Dokken
        </div>
      </footer>
    );
  }
}
