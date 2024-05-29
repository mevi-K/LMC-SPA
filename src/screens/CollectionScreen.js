import HeaderComponent from "../components/HeaderComponent.js";
import FooterComponent from "../components/FooterComponent.js";
export default class CollectionScreen extends HTMLElement{

    constructor(){
        super();
        this.innerHTML = this.render();
    }

    render(){
        return `
        <header-component></header-component>
 
        <!-- Cards from bootstrap fofr the description of shawls and their prices -->
   
        <!-- Collection Section -->
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-4 mb-4">
                <div class="card h-100">
                    <img src="./src/assets/images/Shawl1-catalog.jpg" class="card-img-top" alt="Shawl Image 1">
                    <div class="card-body">
                        <h5 class="card-title">Étole Cachemire</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Price:€105.00</li>
                        <li class="list-group-item">Pashmina</li>
                        <li class="list-group-item">Size: 20x32</li>
                    </ul>
                    <div class="card-body">
                        <button class="btn btn-purple btn-block">Add to Basket</button>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-4">
                <div class="card h-100">
                    <img src="/src/assets/images/Shawl2-catalog.jpg" class="card-img-top" alt="Shawl Image 2">
                    <div class="card-body">
                        <h5 class="card-title">Étole Cachemire</h5>
                        <p class="card-text">Cette étole en cachemire entièrement brodée main de couleur noire et aux motifs floraux colorés est un accessoire vestimentaire de grande beauté, idéal pour booster votre style et votre charme. </p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Price: €175.00</li>
                        <li class="list-group-item">Cachemire</li>
                        <li class="list-group-item">Size: 200x70</li>
                    </ul>
                    <div class="card-body">
                        <button class="btn btn-purple btn-block">Add to Basket</button>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-4">
                <div class="card h-100">
                    <img src="./src/assets/images/Shawl3-catalog.jpg" class="card-img-top" alt="Shawl Image 3">
                    <div class="card-body">
                        <h5 class="card-title">Étole Cachemire</h5>
                        <p class="card-text">Doredar Brode-Cette étole de cérémonie est parfaite pour agrémenter votre style, que vous alliez à un mariage, à une réunion d’affaires ou à un baptême. Vous serez chic et tendance lorsque vous la porterez.</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Price: €99.00</li>
                        <li class="list-group-item">Cachemire</li>
                        <li class="list-group-item">Size: 200x70</li>
                    </ul>
                    <div class="card-body">
                        <button class="btn btn-purple btn-block">Add to Basket</button>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-4">
                <div class="card h-100">
                    <img src="./src/assets/images/Shawl4 catalog.jpg" class="card-img-top" alt="Shawl Image 4">
                    <div class="card-body">
                        <h5 class="card-title">Étole Cachemire</h5>
                        <p class="card-text">Ce modèle en cachemire entièrement brodé main pour donner de l’élégance à votre tenue et vous envelopper de douceur.</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Price: €125.00</li>
                        <li class="list-group-item">Cachemire</li>
                        <li class="list-group-item">Size: 200×70</li>
                    </ul>
                    <div class="card-body">
                        <button class="btn btn-purple btn-block">Add to Basket</button>
                    </div>
                </div>
            </div> <div class="col-md-4 mb-4">
                <div class="card h-100">
                    <img src="./src/assets/images/Shawl5 catalog.jpg" class="card-img-top" alt="Shawl Image 5">
                    <div class="card-body">
                        <h5 class="card-title">Étole Cachemire</h5>
                        <p class="card-text">Sozni doredar entierement brodée main</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Price: €105.00</li>
                        <li class="list-group-item">Cachemire</li>
                        <li class="list-group-item">Size: 200×70</li>
                    </ul>
                    <div class="card-body">
                        <button class="btn btn-purple btn-block">Add to Basket</button>
                    </div>
                </div>
            </div> <div class="col-md-4 mb-4">
                <div class="card h-100">
                    <img src="./src/assets/images/shawl6 catalog.jpg" class="card-img-top" alt="Shawl Image 6">
                    <div class="card-body">
                        <h5 class="card-title">Étole Cachemire</h5>
                        <p class="card-text">Sozni entieremnt brodé main</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Price: €99.00</li>
                        <li class="list-group-item">Cachemire</li>
                        <li class="list-group-item">Size: 200x70</li>
                    </ul>
                    <div class="card-body">
                        <button class="btn btn-purple btn-block">Add to Basket</button>
                    </div>
                </div>
            </div> <div class="col-md-4 mb-4">
                <div class="card h-100">
                    <img src="./src/assets/images/shawl7 catalog.jpg" class="card-img-top" alt="Shawl Image 7">
                    <div class="card-body">
                        <h5 class="card-title">Étole Cachemire</h5>
                        <p class="card-text">Etole Cachemire entierement brodé main.Drapez-vous les épaules ou enveloppez votre cou avec cette étole si vous avez porté une robe simple et noire. Les modèles à couleur unie ou à motifs sont parfaits avec des chaussures de la même couleur.</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Price: €90.00</li>
                        <li class="list-group-item">Cachemire</li>
                        <li class="list-group-item">Size: 200×70</li>
                    </ul>
                    <div class="card-body">
                        <button class="btn btn-purple btn-block">Add to Basket</button>
                    </div>
                </div>
            </div> <div class="col-md-4 mb-4">
                <div class="card h-100">
                    <img src="./src/assets/images/shawl8 catalog.jpg" class="card-img-top" alt="Shawl Image 8">
                    <div class="card-body">
                        <h5 class="card-title">Etole en laine</h5>
                        <p class="card-text">L’étole est un accessoire douillet qui s’adapte à tous les styles et à toutes les saisons. Appréciez les nombreux avantages de cette étoffe, mettez-vous en valeur avec ce modèle en laine  à dominance violette et rose.</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Price: €119.00</li>
                        <li class="list-group-item">Laine</li>
                        <li class="list-group-item">Size: 200x70</li>
                    </ul>
                    <div class="card-body">
                        <button class="btn btn-purple btn-block">Add to Basket</button>
                    </div>
                </div>
            </div> <div class="col-md-4 mb-4">
                <div class="card h-100">
                    <img src="./src/assets/images/shawl9 catalog.jpg" class="card-img-top" alt="Shawl Image 9">
                    <div class="card-body">
                        <h5 class="card-title">Étole Cachemire</h5>
                        <p class="card-text">Ce modèle de couleur bleue claire ornée de dessins et de perles est ce dont vous avez besoin si vous souhaitez apporter une touche de pep’s à votre look.</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Price: €99.00</li>
                        <li class="list-group-item">Cachemire</li>
                        <li class="list-group-item">Size: 200×70</li>
                    </ul>
                    <div class="card-body">
                        <button class="btn btn-purple btn-block">Add to Basket</button>
                    </div>
                </div>
            </div>
           
           
        </div>
    </div>
</main>

        <footer-component></footer-component>
        `;
    }
}
customElements.define("collection-screen", CollectionScreen);