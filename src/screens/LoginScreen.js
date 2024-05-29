import HeaderComponent from "../components/HeaderComponent.js";
import FooterComponent from "../components/FooterComponent.js";
export default class LoginScreen extends HTMLElement{

    constructor(){
        super();
        this.innerHTML = this.render();
    }

    render(){
        return `
        <header-component></header-component>
        <section class="login-form py-5">
        <div class="container">
            <h3 class="text-center mb-4">Login</h3>
            <form>
                <div class="form-group">
                    <label for="inputEmail">Email</label>
                    <input type="email" class="form-control" id="inputEmail" placeholder="Enter email" required="required" pattern="(.){2,}@(.){2,}\.[a-zA-Z]{2,4}">
                </div>
                <div class="form-group">
                    <label for="inputPassword">Password</label>
                    <input type="password" class="form-control" id="inputPassword" placeholder="Enter password" required="required" pattern="((.)*[a-zA-Z](.)*[0-9](.)*)|((.)*[0-9](.)*[a-zA-Z](.)*)">
                </div>
                <button type="submit" class="btn btn-purple btn-block">Login</button>
                <div class="text-center mt-3">
                    <a href="/signup">Don't have an account? Sign up here</a>
                </div>
            </form>
        </div>
    </section>
    
    
    
    
    
    
    
        </main>
        <footer-component></footer-component>
        `;
    }
}
customElements.define("login-screen", LoginScreen);