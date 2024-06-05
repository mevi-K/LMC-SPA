import HeaderComponent from "../components/HeaderComponent.js";
import FooterComponent from "../components/FooterComponent.js";
import SignupService from "../services/SignupService.js";
import SignupForm from "../models/SignupForm.js";
export default class SignupScreen extends HTMLElement{

 
    constructor(){
        super();
        this.innerHTML = this.render();
        this.querySelector("form").onsubmit = this.handleLoginFormSubmit;
    }
    emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  nameRegex = /^[A-Za-z\s]{3,}$/; // Regex for name validation


  handleLoginFormSubmit = (e) => {
    e.preventDefault();
    const entries = Object.fromEntries(new FormData(e.target));
    console.log(entries);

    let isValide = true;
    if (!this.nameRegex.test(entries.loginName)) {
      e.target.querySelector("#loginnameFeedback").innerHTML = `<span class="invalid">Invalid format <i class="fas fa-exclamation-circle"></i></span>`;
      isValide = false;
    } else {
      e.target.querySelector("#loginnameFeedback").innerHTML = `<span class="valid">Valid format <i class="fas fa-check-circle"></i></span>`;
    }
    if (!this.emailRegex.test(entries.loginEmail)) {
        e.target.querySelector("#loginemailFeedback").innerHTML = `<span class="invalid">Invalid format <i class="fas fa-exclamation-circle"></i></span>`;
        isValide = false;
    } else {
        e.target.querySelector("#loginemailFeedback").innerHTML = `<span class="valid">Valid format <i class="fas fa-check-circle"></i></span>`;
    }
   
   
    if (isValide) {
      const signupService = new SignupService();
      signupService.create(entries);
    }
  }

    render(){
        return `
       
        <header-component></header-component>
        <main>
        <section class="login-form py-5">
    <div class="container">
        <h3 class="text-center mb-4">Sign up</h3>
        <form>
            <div class="form-group">
                <label for="loginName">Name</label>
                <span id="loginnameFeedback"></span>
                    <input type="text" class="form-control" id="loginName" placeholder="Login Name" required="required" name=loginName">
            </div>
            <div class="form-group">
                <label for="loginEmail">Email</label>
                <span id="loginemailFeedback"></span>
                <input type="email" class="form-control" id="loginEmail" placeholder="Enter email" required="required" name=loginEmail pattern="(.){2,}@(.){2,}\.[a-zA-Z]{2,4}">
            </div>
            <div class="form-group">
                <label for="inputPassword">Password</label>
                <input type="password" class="form-control" id="inputPassword" placeholder="Enter password" required="required" pattern="((.)*[a-zA-Z](.)*[0-9](.)*)|((.)*[0-9](.)*[a-zA-Z](.)*)">
            </div>
            <div class="form-group">
                <label for="confirmPassword"> Confirm Password</label>
                <input type="password" class="form-control" id="confirmPassword" placeholder="Confirm password" required="required" pattern="((.)*[a-zA-Z](.)*[0-9](.)*)|((.)*[0-9](.)*[a-zA-Z](.)*)">
            </div>
            <button type="submit" class="btn btn-purple btn-block">Sign up</button>
            <div class="text-center mt-3">
                <a href="/login">Already have an account? Login here</a>
            </div>
        </form>
    </div>
</section>

    </main>
        <footer-component></footer-component>
        `;
    }
}
customElements.define("signup-screen", SignupScreen);