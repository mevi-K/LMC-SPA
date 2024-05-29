import BasketMessage from "../models/BasketMessage.js";
export default class BasketService {

   
    data = [];

    constructor(){
        if(localStorage.getItem('messageList')){
            this.data = JSON.parse(localStorage.getItem('messageList')).map(obj => {
                return new BasketMessage(obj)
            });
        }
    }

    create(entries){
        const message = new BasketMessage(entries);
        this.data.push(message);
        localStorage.setItem('messageList', JSON.stringify(this.data));
    }

    read(){

    }

    update(json){

    }

    delete(json){

    }

} 
