import React from "react";

const Contact = () => {
  return (
    <section id="Contact">
      <div class="container">
        <div class="contactform">
          <h1 class="contact-title">Say Hi!</h1>
          <h3>Have a question, a project? We'd love to discuss...</h3>
          <form id="form">
            <div class="form-control-div">
              <input type="text" placeholder="Name" id="name" />
              <small>Error</small>
            </div>
            <div class="form-control-div">
              <input type="email" placeholder="Email" id="email" />
              <small>Error</small>
            </div>
            <div class="form-control-div">
              <input type="text" placeholder="Subject" id="subject" />
              <small>Error</small>
            </div>
            <div class="form-control-div">
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                cols="30"
                rows="10"
              ></textarea>
              <small>Error</small>
            </div>
            <div class="send_msg">
              <button id="sendMsg" onclick="sendMail()">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
