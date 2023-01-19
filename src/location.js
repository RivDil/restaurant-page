export function location(){
    const content = document.getElementById('content');
    const nav = document.getElementById('header-nav--list')


    content.innerHTML ='';

    content.innerHTML =`
    <div id="location-title"><h1>_Restaurants</h1></div>
    <main>
        <div id="location-container">
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