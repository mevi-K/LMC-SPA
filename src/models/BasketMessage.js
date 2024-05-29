export default class BasketMessage{

    id;
    name;
    email;
    message;
    // isRead;

    static nextId = 0;

    constructor(props){
        const {id, name, email, message} = props;
        this.id = id || ++BasketMessage.nextId;
        this.name = name;
        this.email = email;
        this.message = message;
    }


}