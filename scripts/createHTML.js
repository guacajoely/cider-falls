import { areas } from "./areas.js";
import { guestList } from "./guests.js";
import { services } from "./services.js";

export const createHTML = () => {
    return `

        <header>
            <img id="img-header" src="./images/logo.png">
            <h1>Cider Falls Park</h1>
        </header>

        <section id="main-container">
            <div class="services-and-areas container"
                <article class="services container">
                ${services()}
                </article>

                <article class="areas container">
                    ${areas()}
                </article>
            </div>

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