
import HeaderComponent from "../components/HeaderComponent.js";
import FooterComponent from "../components/FooterComponent.js";

export default class HomeScreen extends HTMLElement{

    constructor(){
        super();
        this.innerHTML = this.render();
    }

    render(){
        return `
        <header-component></header-component>

        <!-- Main Content -->
    <main role="main" class="container my-5">
        <!-- Carousel -->
        <div id="shawlCarousel" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#shawlCarousel" data-slide-to="0" class="active"></li>
                <li data-target="#shawlCarousel" data-slide-to="1"></li>
                <li data-target="#shawlCarousel" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="../images/pashmina-1portfolio.jpg" class="d-block w-100" alt="Shawl 1">
                </div>
                <div class="carousel-item">
                    <img src="../images/2014-11-17-001-600x1062Land.jpg" class="d-block w-100" alt="Shawl 2">
                </div>
                <div class="carousel-item">
                    <img src="../images/Sozni Jama brodé.jpg" class="d-block w-100" alt="Shawl 3">
                </div>
                <div class="carousel-item">
                    <img src="../images/thumbnail_IMG_2036-510x591Land.jpg" class="d-block w-100" alt="Shawl 4">
                </div>
                <div class="carousel-item">
                    <img src="../images/2017-09-29-007-612x1024.jpg" class="d-block w-100" alt="Shawl 5">
                </div>
                <div class="carousel-item">
                    <img src="../images/2016-10-15-014-643x1024.jpg" class="d-block w-100" alt="Shawl 6">
                </div>

            </div>
            <a class="carousel-control-prev" href="#shawlCarousel" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#shawlCarousel" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
        <div class="container">
            <div class="g-col-6">
                <h2 class="display-4">Notre Histoire</h2>
                <p class="lead">
                    À La Maison de Châles, nous sommes fiers de vous offrir des pashminas d'une qualité et d'une pureté
                    inégalées. Chaque châle est confectionné à partir du duvet d'hiver le plus fin de la chèvre Capra
                    Hircus, sélectionné avec soin pour garantir une douceur exceptionnelle. Nos pashminas, fabriqués
                    principalement au Cachemire et au Népal, sont le fruit d'un savoir-faire artisanal ancestral qui
                    respecte les traditions tout en répondant aux exigences modernes. La pureté de nos tissus assure non
                    seulement un confort luxueux, mais aussi une durabilité qui fait de chaque pièce un véritable
                    trésor.</p>
            </div>
            <div class="g-col-6">
                <h2 class="display-4">Pure Cachemire </h2>
                <p class="lead"> Notre collection de pashminas se décline en une variété de couleurs et de styles pour répondre à toutes vos envies. Que vous recherchiez une pièce classique ou une touche de modernité, vous trouverez chez nous le pashmina idéal pour chaque occasion.
                    Chez La Maison de Châles, nous croyons que chaque châle est plus qu'un simple accessoire : c'est une expérience de luxe et de confort.</p>
            </div>

        </div>


    </main>




        <footer-component></footer-component>
      
        `;
    }
}
customElements.define("home-screen", HomeScreen);