import React from "react";
import "../Navbar/Navbar.css";
import Logo from "../Logo";

function Contact() {
  return (
    <>
      <Logo />

      <div class="row">
        <div class="col-4">
          <h4>Contact Us</h4>
          <p>
            Looking for a cozy space to host your next celebration or corporate
            meeting? Need catering for a special event? Contact us for more
            info!
          </p>
        </div>
        <div class="row">
          <form class="col-8">
            <div class="row">
              <div class="input-field col m4">
                <input
                  placeholder="Placeholder"
                  id="first_name"
                  type="text"
                  class="validate"
                />
                <label for="first_name">First Name</label>
              </div>
              <div class="input-field col-4">
                <input id="last_name" type="text" class="validate" />
                <label for="last_name">Last Name</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col-4">
                <input id="email" type="email" class="validate" />
                <label for="email">Email</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col-4">
                <input id="subject" type="text" class="validate" />
                <label for="subject">Subject</label>
              </div>
            </div>
            <div class="row">
              <form class="col-10">
                <div class="row">
                  <div class="input-field col s12">
                    <textarea
                      id="message"
                      class="materialize-textarea"
                    ></textarea>
                    <label for="message">Message</label>
                  </div>
                </div>
              </form>
            </div>
            <button
              class="btn waves-effect waves-light"
              type="submit"
              name="action"
            >
              Submit
              <i class="material-icons right">send</i>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
