export default class ErrorScreen extends HTMLElement{

    constructor(){
        super();
        this.innerHTML = this.render();
    }

    render(){
        return `
        <p> error </p>
        `;
    }
}
customElements.define("error-screen", ErrorScreen);