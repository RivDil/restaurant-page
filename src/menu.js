export function menu(){
    const content = document.getElementById('content');
    content.innerHTML ='';
    content.innerHTML =`
        <div id="menu-title">
        <h1>_The Menu</h1>
    </div>
    <div id="background">
        <div id="background-menu" style="background-image: url(https://www.grossonapoletano.com/wp-content/uploads/2022/07/grosso-napoletano-carta.jpg)"></div>
    </div>
    <main>
        <div id="menu-container">
            <div id="menu-list--container">
               <h2>_The Must di Grosso</h2>
                <section class="menu-list--section">
                    <h3>“NO SIN MI DULCE”</h3>
                    <p>ICHIS NUTELLA PIZZA</p>
                    <p>Nuestra famosa pizza de Nutella.</p>
                </section>
                <section class="menu-list--section">
                    <h3>“EL PICANTE ME PONE HOT”</h3>
                    <p>DIAVOLA</p>
                    <p>Base de tomate San Marzano, salame picante napolitano, mozzarella fiordilatte y albahaca.</p>
                </section>
                <section class="menu-list--section">
                    <h3>“UN TOQUE DE SOFISTICACIÓN”</h3>
                    <p>NOBILE BORGHESE</p>
                    <p>Base de crema de trufa, mix de setas salteadas con ajo y perejil en nuestro horno de leña, speck y mozzarella fiordilatte
                        con un toque de perejil.</p>
                </section>
                <section class="menu-list--section">
                    <h3>“CUANTO MÁS ARTESANAL, MEJOR”</h3>
                    <p>AMACORD GRADISCA 50CL</p>
                    <p>Premiun lager. Un equilibrio perfecto del sabor más deseado. 5,2% vol.</p>
                </section>
            </div>
        </div>
    </main>`
}
