export default class FooterComponent extends HTMLElement{

    constructor(){
        super();
        this.innerHTML = this.render();
    }

    render(){
        return `
        <footer class="bg-light text-center py-3">
        <div class="container">
            <p class="mb-0">&copy; 2024 LMC. All rights reserved.</p>
        </div>
    </footer>
    
      `;
    }
}
customElements.define("footer-component", FooterComponent);