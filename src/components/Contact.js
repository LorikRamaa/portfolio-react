import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_i7jtus5",
        "template_jtr0l9c",
        form.current,
        "8KYWoPSC3tA9pybO4"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent succesfuly");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="Contact">
      <div class="container">
        <div class="contactform">
          <h1 class="contact-title">Say Hi!</h1>
          <h3>Have a question, a project? We'd love to discuss...</h3>
          <form id="form" ref={form} onSubmit={sendEmail}>
            <div class="form-control-div">
              <input
                type="text"
                placeholder="Name"
                id="name"
                name="user_name"
              />
              <small>Error</small>
            </div>
            <div class="form-control-div">
              <input
                type="email"
                placeholder="Email"
                id="email"
                name="user_email"
              />
              <small>Error</small>
            </div>
            <div class="form-control-div">
              <input
                type="text"
                placeholder="Subject"
                id="subject"
                name="user_subject"
              />
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
