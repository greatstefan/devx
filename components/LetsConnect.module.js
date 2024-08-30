import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Container, Flex } from './styles/Container.styled';
import { LetsConnect, Illustration, ContactForm, MobileIllustration } from './styles/LetsConnect.styled';


const ContactUs = (props) => {  
    const { titleTag: TitleTag } = props;
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
        <LetsConnect>
            <Container>
                <div className='contact-us-page'>
                  <TitleTag>Connect with <span>DevX Digital</span></TitleTag>
                  <p>Are you on the quest for a world-class development team to bring your idea to life? Is there a project that you're eager to turn into reality? You're in the right place. At DevX Digital, we breathe life into concepts and turn them into digital masterpieces.</p>
                  <p>We'd love to hear about your project, understand your goals, and explore how we can collaborate. Utilize the contact form below to reach out to us, whether it's a simple question, an ambitious project description, or anything in between. We assure you that we value your time and will respond as promptly as possible.</p>
                </div>

                <MobileIllustration className="mobile" src="./images/lets_connect.svg" alt="Connect with DevX Digital" />

                <Flex className="space-between">
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

                    <Illustration className="desktop" src="./images/lets_connect.svg" alt="Connect with DevX Digital" />
                </Flex>
            </Container>
        </LetsConnect>
    );
  };

  export default ContactUs