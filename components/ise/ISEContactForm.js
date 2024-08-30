import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Modal, ContactForm, CloseButton } from './ISEContactForm.styled';


const ISEContactForm = ( { close }) => {
    const form = useRef();
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [message, setMessage] = React.useState("");

    const [errorName, setErrorName] = React.useState(false);
    const [errorEmail, setErrorEmail] = React.useState(false);
    const [errorPhone, setErrorPhone] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState(false);

    const [successMessage, setSuccessMessage] = React.useState(false); 

    const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };
  
    const sendEmail = (e) => {
      e.preventDefault();
      setErrorName(false);
      setErrorEmail(false);
      setErrorPhone(false);
      setErrorMessage(false);

      let valid = true;

      if (name == "") {
        valid = false;
        setErrorName(true);
      }
      if (email == "" && !validateEmail(email)) {
        valid = false;
        setErrorEmail(true);
      } 
      if (phone == "") {
        valid = false;
        setErrorPhone(true);
      } 
      if (message == "") {
        valid = false;
        setErrorMessage(true);
      } 


      if (valid) {
        emailjs.sendForm('service_hg4uv3s', 'template_5nmp7ya', form.current, 'vrnYPJC78CKngbtUL')
        .then((result) => {
            console.log(result.text);
            setSuccessMessage(true);
        }, (error) => {
            console.log(error.text);
        });
      }
      
    };

    return (
      <Modal>
        <CloseButton onClick={()=>close()}>&times;</CloseButton>
          {!successMessage && <ContactForm>
          <form ref={form} onSubmit={sendEmail}>
              <label className={errorName ? "error" : ""}><span>Name</span>
              <input value={name} onChange={(e)=>setName(e.target.value)} type="text" name="user_name" placeholder="Name" /></label>
              <label className={errorEmail ? "error" : ""}><span>Email Address</span>
              <input value={email} onChange={(e)=>setEmail(e.target.value)} type="text" name="user_email" placeholder="Email" /></label>
              <label className={errorPhone ? "error" : ""}><span>Phone</span>
              <input value={phone} onChange={(e)=>setPhone(e.target.value)} type="text" name="user_phone" placeholder="Phone number" /></label>
              <label className={errorMessage ? "error" : ""}><span>Describe your project</span>
              <textarea value={message} onChange={(e)=>setMessage(e.target.value)} name="message" rows="10" placeholder="Your message here" /></label>
              
              <label htmlFor="checkBox">
                <input type="checkbox" name="terms" id="checkBox" required />
                <i>I read and agree with the <a href="/terms-and-conditions" target="_blank">Terms and Conditions</a> of this website.</i>
              </label>
              <input type="submit" value="Submit your request" />
          </form>
          </ContactForm>}

          {successMessage && <ContactForm>Thanks for reaching out. We'll get back to you as soon as possible.</ContactForm>}
      </Modal>
    );
  };

  export default ISEContactForm