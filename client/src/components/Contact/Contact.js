import React from 'react';

function Contact() {
    return (
        <>
            <h1>HOBNOB</h1>
            <p>eat. drink. socialize</p>

            <div class="row">
                <div class="col m4">
                    <h4>Contact Us</h4>
                    <p>
                        Looking for a cozy space to host your next celebration or corporate meeting? Need catering for a special event? Contact us for more info!
                    </p>
                </div>
                <div class="row">
                    <form class="col m8">
                        <div class="row">
                            <div class="input-field col m4">
                                <input placeholder="Placeholder" id="first_name" type="text" class="validate" />
                                <label for="first_name">First Name</label>
                            </div>
                            <div class="input-field col m4">
                                <input id="last_name" type="text" class="validate" />
                                <label for="last_name">Last Name</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col m4">
                                <input disabled value="I am not editable" id="disabled" type="text" class="validate" />
                                <label for="disabled">Disabled</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col m4">
                                <input id="password" type="password" class="validate" />
                                <label for="password">Password</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col m4">
                                <input id="email" type="email" class="validate" />
                                <label for="email">Email</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col m4">
                                This is an inline input field:
                                <div class="input-field inline">
                                    <input id="email_inline" type="email" class="validate" />
                                    <label for="email_inline">Email</label>
                                    <span class="helper-text" data-error="wrong" data-success="right">Helper text</span>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <footer className="image-div">
                <p>Powered by JATAG</p>
                <img src="https://www.kindpng.com/picc/m/20-209935_facebook-icon-clipart-social-media-icons-grey-facebook.png" alt="fb" />
                <img src="https://www.beerinstitute.org/wp-content/uploads/2017/07/instagram-icon-grey.3cf404e5.png" alt="insta" />
            </footer>
        </>
    )
}

export default Contact;