import HeaderComponent from "../components/HeaderComponent.js";
import FooterComponent from "../components/FooterComponent.js";
import BasketService from "../services/BasketService.js";

export default class BasketScreen extends HTMLElement{

    constructor(){
        super();
        this.innerHTML = this.render();
        this.querySelector("form").onsubmit = this.handleLoginFormSubmit;
    }
    emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  nameRegex = /^[A-Za-z\s]{3,}$/; // Regex for name validation
  phoneRegex = /^\d{10,15}$/; // Regex for phone number validation (10 to 15 digits)
 addressRegex = /^[A-Za-z0-9\s,.'-]+$/;

  handleLoginFormSubmit = (e) => {
    e.preventDefault();
    const entries = Object.fromEntries(new FormData(e.target));
    console.log(entries);

    let isValide = true;
    if (!this.nameRegex.test(entries.name)) {
      e.target.querySelector("#nameFeedback").innerHTML = `<span class="invalid">Invalid format <i class="fas fa-exclamation-circle"></i></span>`;
      isValide = false;
    } else {
      e.target.querySelector("#nameFeedback").innerHTML = `<span class="valid">Valid format <i class="fas fa-check-circle"></i></span>`;
    }
    if (!this.addressRegex.test(entries.address)) {
      e.target.querySelector("#addressFeedback").innerHTML = `<span class="invalid">Invalid format <i class="fas fa-exclamation-circle"></i></span>`;
      isValide = false;
    } else {
      e.target.querySelector("#addressFeedback").innerHTML = `<span class="valid">Valid format <i class="fas fa-check-circle"></i></span>`;
    }
    if (!this.emailRegex.test(entries.email)) {
      e.target.querySelector("#emailFeedback").innerHTML = `<span class="invalid">Invalid format <i class="fas fa-exclamation-circle"></i></span>`;
      isValide = false;
    } else {
      e.target.querySelector("#emailFeedback").innerHTML = `<span class="valid">Valid format <i class="fas fa-check-circle"></i></span>`;


    }
    
    if (!this.phoneRegex.test(entries.phone)) {
      e.target.querySelector("#phoneFeedback").innerHTML = `<span class="invalid">Invalid format <i class="fas fa-exclamation-circle"></i></span>`;
      isValide = false;
    } else {
      e.target.querySelector("#phoneFeedback").innerHTML = `<span class="valid">Valid format <i class="fas fa-check-circle"></i></span>`;
    }

    if (!entries.Message.trim()) {
      e.target.querySelector("#messageFeedback").innerHTML = `<span >Message is required</span>`;
      isValide = false;
    } else {
      e.target.querySelector("#messageFeedback").innerHTML = `<span >Message is valid</span>`;
    }
    if (isValide) {
      const basketService = new BasketService();
      basketService.create(entries);
    }
  }
    render(){
        return `
        <header-component></header-component>
        <!-- Place an order -->
<section class="contact-form py-5">
    <div class="container">
        <h3 class="text-center mb-4">Contact Us</h3>
        <form>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputName">Name</label>
                    <span id="nameFeedback"></span>
                    <input type="text" class="form-control" id="inputName" placeholder="Name" required="required" name="name" >
                </div>
                
                <div class="form-group col-md-6">
                <label for="inputAddress">Address</label>
                <span id="addressFeedback"></span>
                <input type="text" class="form-control" id="inputAddress" placeholder="Address" required="required" name="address" >
            </div>
            
                <div class="form-group col-md-6">
                    <label for="inputEmail">Email</label>
                    <span id="emailFeedback"></span>
                    <input type="email" class="form-control" id="inputEmail" placeholder="Email" required="required" name="email" pattern="(.){2,}@(.){2,}\.[a-zA-Z]{2,4}">
                </div>
               
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputPhone">Phone</label>
                    <span id="phoneFeedback"></span>
                    <input type="tel" class="form-control" id="inputPhone" placeholder="Phone Number"  required  name="phone">
                </div>
            </div>
            
            <div class="form-group">
                <label for="inputMessage">Special Message</label>
                <textarea class="form-control" id="inputMessage" rows="4" placeholder="Any Message" name="Message" ></textarea>
            </div>
            <button type="submit" class="btn btn-purple">Confirm Order</button>
        </form>
    </div>
</section>





    </main>

        <footer-component></footer-component>
        `;
    }
}
customElements.define("basket-screen", BasketScreen);