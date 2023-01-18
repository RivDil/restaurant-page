export function location(){
    const content = document.getElementById('content');

    content.innerHTML = '';
    content.innerHTML =`
    <nav id="header-nav--container">
        <ul id="header-nav--list">
            <li><a href="#about"><img src="https://www.grossonapoletano.com/wp-content/themes/grossonapoletano/img/icons/icon-menu-white.svg" alt="Menu"> Menu</a></li>
            <li><a href="#home"><img src="https://www.grossonapoletano.com/wp-content/themes/grossonapoletano/img/logos/logo-white.svg" alt="Logo" id="logo"></a></li>
            <li><a href="#services">Location</a></li>
        </ul>
        <div id="location-title">
            <h1>_Restaurants</h1>
    </nav>
    <main>
        <div id="location">
            <div id="location-list--container">
               <h2>_Near You</h2>
                <section class="location-list--section">
                    <img src="https://www.grossonapoletano.com/wp-content/themes/grossonapoletano/img/logos/logo-white.svg" alt="">
                    <div>
                        <h3>Da Asporto – Avinguda de Vilanova, 116</h3>
                        <p>Avinguda de Vilanova, 116. 08902 L´Hospitalet de Llobregat. Barcelona</p>
                    </div>
                </section>
            </div>
        </div>
    </main>
    <div id="background">
        <div id="background-location"></div>
    </div>`
}