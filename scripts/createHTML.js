import { areaCards } from "./areaCards.js";
import { guestList } from "./guests.js";

export const createHTML = () => {
    return `

        <header>
            <img id="img-header" src="./images/logo.png">
            <h1>Cider Falls Park</h1>
        </header>

        <section id="main-container">
            <article class="areas container">
                ${areaCards()}
            </article>

            <article class="guests container">
                ${guestList()}
            </article>
        </section>

        <footer>
            <div id="address info">100 Forest Rd <br>Somewhere, WV 12345</div>
            <div id="phone info">1-800-555-PARK</div>
            <div id="email info">admin@CiderFalls.com</div>
        </footer>

        
      `;
  };