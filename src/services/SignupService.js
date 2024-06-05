import SignupForm from "../models/SignupForm.js";
export default class SignupService{


    userdata = [];

    constructor(){
        if(localStorage.getItem('messageList')){
            this.userdata = JSON.parse(localStorage.getItem('messageList')).map(obj => {
                return new SignupForm(obj)
            });
        }
    }

    create(entries){
        const usermessage = new SignupForm(entries);
        this.userdata.push(usermessage);
        localStorage.setItem('messageList', JSON.stringify(this.userdata));
    }
    read(id) {
        return this.userdata.find(user => user.id === id);
    }

    update(updatedUser) {
        const index = this.userdata.findIndex(user => user.id === updatedUser.id);
        if (index !== -1) {
            this.userdata[index] = new SignupForm(updatedUser);
            localStorage.setItem('messageList', JSON.stringify(this.userdata));
        }
    }

    delete(id) {
        this.userdata = this.userdata.filter(user => user.id !== id);
        localStorage.setItem('messageList', JSON.stringify(this.userdata));
    }
    // read(){

    // }

    // update(json){

    // }

    // delete(json){

    // }

} 

