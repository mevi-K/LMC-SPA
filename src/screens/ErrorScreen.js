export default class ErrorScreen extends HTMLElement{

    constructor(){
        super();
        this.innerHTML = this.render();
    }

    render(){
        return `
        <p> 404 Page Not Found</p>
        `;
    }
}
customElements.define("error-screen", ErrorScreen);