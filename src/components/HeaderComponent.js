export default class HeaderComponent extends HTMLElement{

    constructor(){
        super();
        this.innerHTML = this.render();
    }

    render(){
        return `
        
    <header class="header">
    <div class="container">
        <h2 class="display-4" id="mainTitle">La Maison de Châles</h2>
    </div>
</header>

<div class="sticky-top">

<!-- Navbar -->
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="index.html">
        <img src="../images/logo-maison de chales.jpg" alt="Logo" class="logo mr-2">
        Rêve de Cachemire
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
                <a class="nav-link" href="index.html">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="collection.html">Collection</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="contact.html">Contact</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="login.html">Login</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="signup.html">Signup</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="basket.html">Basket</a>
            </li>
        </ul>
    </div>
</nav>
</div>
      `;
    }
}
customElements.define("header-component", HeaderComponent);