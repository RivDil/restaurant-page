export function home(){
    const content = document.getElementById('content');
    content.innerHTML ='';
    content.innerHTML =`
    <div id="title">
        <h4>Grosso Napoletano</h4>
        <h1>Authentic Napolitanian Pizza</h1>
    </div>
    <video id="video" autoplay loop muted playsinline>
        <source src="https://www.grossonapoletano.com/wp-content/themes/grossonapoletano/videos/grosso-napoletano-home-video.mp4" type="video/mp4">
    </video>`
}
