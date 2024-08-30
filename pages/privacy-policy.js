import { Container } from "../components/styles/Container.styled";
import styled from "styled-components";
import { NextSeo } from "next-seo";
import { useState } from 'react';


export const TAC = styled.div`
  padding: 60px 0;
  h1 {color:black;font-weight:500;}
  strong {display: block;color: black}
  ul {margin-left: 20px;margin-top: 5px;}
` 

export default function Contact() {
    const [text, setText] = useState("privacy@devxdigital.com");

    return (
      <>
        <NextSeo
          title="Devx Digital - Privacy Policy"
          description="Devx Digital - Privacy Policy"
        />

        <Container>
          <TAC>
            <h1>Privacy Policy</h1>
            <br /><br />
            
            At Devx Digital, we understand the importance of your privacy and the protection of your personal information. This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you visit our website.
            <br /><br />
            <strong>Collection of Personal Information</strong>
            We may collect personal information that you voluntarily provide to us, such as your name, email address, phone number, and company name. We collect this information when you fill out a form on our website, sign up for our newsletter, or contact us through our website.
            <br /><br />
            <strong>Use of Personal Information</strong>
            We may use your personal information to communicate with you, respond to your inquiries, send you marketing emails, and improve our website and services. We may also use your information for legal and administrative purposes, such as complying with our legal obligations and resolving disputes.
            <br /><br />
            <strong>Disclosure of Personal Information</strong>
            We may share your personal information with third-party service providers who help us operate our website and provide our services. We may also disclose your information to comply with a legal obligation or to protect our rights and interests.
            <br /><br />
            <strong>Cookies and Tracking Technologies</strong>
            We use cookies and other tracking technologies to collect information about your use of our website, such as your IP address, browser type, and pages visited. This information helps us improve our website and provide a better user experience.
            <br /><br />
            <strong>Security of Personal Information</strong>
            We take reasonable steps to protect your personal information from unauthorized access, use, and disclosure. However, we cannot guarantee the security of your information.
            <br /><br />
            <strong>Your Rights</strong>
            You have the right to access, update, and delete your personal information. You may also object to our processing of your information or request that we restrict our use of your information. If you would like to exercise any of these rights, please contact us using the information provided below.
            <br /><br />
            <strong>Changes to this Privacy Policy</strong>
            We may update this Privacy Policy from time to time. Any changes will be posted on our website, and the updated policy will be effective as of the date it is posted.
            <br /><br />
            <strong>Contact Us</strong>
            If you have any questions or concerns about this Privacy Policy, please contact us at {text}.
            <br /><br />
            Last updated: 8 August 2022
          </TAC>
        </Container>
      </>
    )
  }
  