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
  nameRegex = /^[A-Za-z\s]+$/; // Regex for name validation
  phoneRegex = /^\d{10,15}$/; // Regex for phone number validation (10 to 15 digits)

  handleLoginFormSubmit = (e) => {
    e.preventDefault();
    const entries = Object.fromEntries(new FormData(e.target));
    console.log(entries);

    let isValide = true;
    if (!this.nameRegex.test(entries.name)) {
      e.target.querySelector("#nameFeedback").innerHTML = `<span class="w3-text-red">Invalid name format</span>`;
      isValide = false;
    } else {
      e.target.querySelector("#nameFeedback").innerHTML = `<span class="w3-text-green">Name is valid</span>`;
    }
    if (!entries.address.trim()) {
      e.target.querySelector("#addressFeedback").innerHTML = `<span class="w3-text-red">Address is required</span>`;
      isValide = false;
    } else {
      e.target.querySelector("#addressFeedback").innerHTML = `<span class="w3-text-green">Address is valid</span>`;
    }

    if (!this.emailRegex.test(entries.email)) {
      e.target.querySelector("#emailFeedback").innerHTML = `<span class="w3-text-red">Invalid format</span>`;
      isValide = false;
    } else {
      e.target.querySelector("#emailFeedback").innerHTML = `<span class="w3-text-green">Le email est au bon format</span>`;


    }
    // Phone number validation
    if (!this.phoneRegex.test(entries.phone)) {
      e.target.querySelector("#phoneFeedback").innerHTML = `<span >Invalid phone number format</span>`;
      isValide = false;
    } else {
      e.target.querySelector("#phoneFeedback").innerHTML = `<span >Phone number is valid</span>`;
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
                    <input type="text" class="form-control" id="inputName" placeholder="Name" required="required" name="name" pattern="[A-Z][a-z]+">
                </div>
                <span id="nameFeedback"></span>
                <div class="form-group col-md-6">
                <label for="inputAddress">Address</label>
                <input type="text" class="form-control" id="inputAddress" placeholder="Name" required="required" name="address" pattern="[A-Z][a-z]+">
            </div>
            <span id="addressFeedback"></span>
                <div class="form-group col-md-6">
                    <label for="inputEmail">Email</label>
                    <input type="email" class="form-control" id="inputEmail" placeholder="Email" required="required" name="email" pattern="(.){2,}@(.){2,}\.[a-zA-Z]{2,4}">
                </div>
                <span id="emailFeedback"></span>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputPhone">Phone</label>
                    <input type="tel" class="form-control" id="inputPhone" placeholder="Phone Number"  required  name="phone">
                </div>
            </div>
            <span id="phoneFeedback"></span>
            <div class="form-group">
                <label for="inputMessage">Special Message</label>
                <textarea class="form-control" id="inputMessage" rows="4" placeholder="Any Message" name="Message" required></textarea>
            </div>
            <span id="messageFeedback"></span>
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