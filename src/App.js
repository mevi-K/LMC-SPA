import Router from "./Router.js";
export default class App{

    constructor(){
        const router = new Router();
    }
    
    render(screen){
        document.querySelector('#app').innerHTML = "";
        //document.querySelector('#app').innerHTML = "<h1>La page demandée</h1>";
        document.querySelector('#app').append(screen);
    }
}