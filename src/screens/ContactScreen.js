import HeaderComponent from "../components/HeaderComponent.js";
import FooterComponent from "../components/FooterComponent.js";
export default class ContactScreen extends HTMLElement{

    constructor(){
        super();
        this.innerHTML = this.render();
    }

    render(){
        return `
        <header-component></header-component>
        <section class="contact-info py-5">
        <div class="container">
            <div class="row text-center">
                <div class="col-12">
                    <h1>Our Address</h1>
                    <p>36 AVENUE DES GOBELINS 75013 PARIS</p>
                    <h1>Call us at</h1>
                    <p>+33 12546321</p>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-md-12 col-lg-8">
                    <iframe class="shadow-lg w-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2626.190108440196!2d2.349773176675859!3d48.835512371329074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67192c9c19635%3A0x2efb15f6bcb62efe!2sGobelins%20Tapis!5e0!3m2!1sen!2sfr!4v1716798763029!5m2!1sen!2sfr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    </section>
    
    <!-- contact form -->
    <section class="contact-form py-5">
        <div class="container">
            <h3 class="text-center mb-4">Contact Us</h3>
            <form>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputName">Name</label>
                        <input type="text" class="form-control" id="inputName" placeholder="Your Name" required="required" pattern="[A-Z][a-z]+">
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputEmail">Email</label>
                        <input type="email" class="form-control" id="inputEmail" placeholder="Your Email" required="required" pattern="(.){2,}@(.){2,}\.[a-zA-Z]{2,4}">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputPhone">Phone</label>
                        <input type="tel" class="form-control" id="inputPhone" placeholder="Your Phone Number" required>
                    </div>
                </div>
                <div class="form-group">
                    <label for="inputMessage">Message</label>
                    <textarea class="form-control" id="inputMessage" rows="4" placeholder="Your Message" ></textarea>
                </div>
                <button type="submit" class="btn btn-purple">Send Message</button>
            </form>required
        </div>
    </section>
        </main>  

        <footer-component></footer-component>
        `;
    }
}
customElements.define("contact-screen", ContactScreen);