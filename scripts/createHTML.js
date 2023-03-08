export const createHTML = () => {
    return `

        <header>
            <img id="img-header" src="./images/logo.png">
            <h1>Cider Falls Park</h1>
        </header>

        <section id="main-container">
            <article class="areas container">
                !AREA CARDS GO HERE!
            </article>

            <article class="parkguests container">
                !GUEST LIST GO HERE!
            </article>
        </section>

        <footer>
            <div id="phone info">1-800-555-PARK</div>
            <div id="email info">admin@CiderFalls.com</div>
            <div id="address info">100 Forest Rd <br>Somewhere, WV 12345</div>
        </footer>

        
      `;
  };