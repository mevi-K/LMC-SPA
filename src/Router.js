import App from "./App.js";
import HomeScreen from "./screens/HomeScreen.js";
import CollectionScreen from "./screens/CollectionScreen.js";
import ContactScreen from "./screens/ContactScreen.js";
import LoginScreen from "./screens/LoginScreen.js";
import SignupScreen from "./screens/SignupScreen.js";
import BasketScreen from "./screens/BasketScreen.js";
import ErrorScreen from "./screens/ErrorScreen.js";





export default class Router {

    constructor() {
        window.onload = this.navigate;
        window.onpopstate = this.navigate;
        window.onclick = this.handleDataLinks;
    }

    handleDataLinks = (e) => {
        const link = e.target.closest('[data-link]');
        if (link) {
            e.preventDefault();
            history.pushState("", "", link.href);
            this.navigate();
        }
    }


    navigate = (e) => {
        const app = new App();
        let page = "";

        if (location.pathname == "/") {
            page = new HomeScreen();
        }
        // else if (location.pathname == "/collection") {
        //     page = new CollectionScreen();
        // }
        // else if (location.pathname == "/basket") {
        //     page = new BasketScreen();
        // }
        // else if (location.pathname == "/login") {
        //     page = new LoginScreen();
        // }
        // else if (location.pathname == "/contact") {
        //     page = new ContactScreen();
        // } 
        // else if (location.pathname == "/signup") {
        //     page = new SignupScreen();
        // }
        // else {
        //     page = new ErrorScreen();
        // }

        app.render(page);
    }
}