export default class SignupForm {
    

        id;
        loginName;
        loginEmail;
       
        // isRead;
    
        static nextId = 0;
    
        constructor(props){
            const {id,loginName, loginEmail, } = props;
            this.id = id || ++SignupForm.nextId;
            this.loginName = loginName;
            this.loginEmail = loginEmail;
            
        }
    
    
    }
