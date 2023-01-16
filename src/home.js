export function home(){
    const content = document.getElementById('content');

    content.innerHTML = '';
    content.innerHTML =`
    <nav id="header-nav--container">
        <ul id="header-nav--list">
        <li><a href="#about"><img src="https://www.grossonapoletano.com/wp-content/themes/grossonapoletano/img/icons/icon-menu-white.svg" alt="Menu"> Menu</a></li>
        <li><a href="#home"><img src="https://www.grossonapoletano.com/wp-content/themes/grossonapoletano/img/logos/logo-white.svg" alt="Logo" id="logo"></a></li>
        <li><a href="#services">Location</a></li>
        </ul>
    </nav>
    <div id="title">
        <h4>Grosso Napoletano</h4>
        <h1>Authentic Napolitanian Pizza</h1>
    </div>
    <video id="video" autoplay loop muted playsinline>
        <source src="https://www.grossonapoletano.com/wp-content/themes/grossonapoletano/videos/grosso-napoletano-home-video.mp4" type="video/mp4">
    </video>`
}
