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
    const [text, setText] = useState("contact@devxdigital.com");

    return (
      <>
        <NextSeo
          title="Devx Digital - Terms and Conditions"
          description="Devx Digital - Terms and Conditions"
        />

        <Container>
          <TAC>
            <h1>Terms and Conditions</h1>
            <br /><br />
            Version: 1<br />
            Last updated: 8 August 2022<br />
            Please read these Terms and Conditions carefully before using Our Service.
            <br /><br />
            <strong>General Background</strong>
            These Terms and Conditions govern the use of our Services (the Website) and the relationship that exists between You (the Customer/Client/User) and the Company (Our team/Website/DevX).
            Your use of the Service, as well as your access to the Service, is contingent upon your acceptance of these Terms and Conditions and your continued compliance with them. All visitors, users, and other individuals who use or access the Service are obligated to comply with these Terms and Conditions.
            If you use or access the Service in any way, you are agreeing to be legally bound by these Terms and Conditions. You are not permitted to use the Service in the case at any point you find yourself in disagreement with any aspect of these Terms and Conditions.
            <br /><br />

            <strong>Proper Use of Our Service</strong>
            Users shall use the Services only for lawful purposes and in particular, they shall not:<br />
            <ul>
              <li>make use of any obscene, threatening, menacing, offensive, defamatory materials or such materials that violate any law or regulation, are in breach of confidence, harmful to minors, in breach of intellectual property right, or otherwise unlawful when making use of the Services</li>
              <li>impersonate any person or entity, falsely state or otherwise misrepresent an affiliation with a person or entity;</li>
              <li>make use of the Services to cause other Users or third parties to receive unsolicited or unauthorized advertising, promotional materials, junk mail, spam, chain letters, pyramid schemes, or any other form of solicitation</li>
              <li>make use of the Services to knowingly or negligently transmit any electronic material that may be detrimental or/and cause any sort of damage or malfunction to the computer system of the Company or of any other User or a third party;</li>
              <li>collect or store Personal Data about other Users or third parties</li>
            </ul>
            <br />

            <strong>Intellectual Property</strong>
            All rights, including copyright in the content of the Website, are owned or controlled for these purposes by the Company. Users may only download the content for their personal non-commercial use.
            Users are not allowed to copy, broadcast, download, store (in any medium), transmit, show or play in part or whole, adapt or change in any way the content of the Website for any other purpose whatsoever without the written permission of the Company.
            <br /><br />

            <strong>Contract Termination</strong>
            We reserve the right to immediately cancel or suspend Your access, without providing a prior warning or being liable in any way, for any reason whatsoever, including, but not limited to, if You (the Client/Customer/User) violate these Terms and Conditions.
            Your access to the Service will be immediately revoked if your account is terminated.
            <br /><br />

            <strong>Limitation of Liability</strong>
            Under no circumstances shall the Company be held liable in damages of any kind whatsoever to any User.
            DevX cannot make guarantees of service on behalf of third-party organizations and will not be held liable for the failure in any service provided by third parties.
            <br /><br />

            <strong>Governing Law</strong>
            These Terms and Conditions of our Service, as well as Your use of the Service, will be governed by the laws of Romania.
            It's possible that your use of the Application will also be subject to other laws, whether they are local, state, national, or international.
            <br /><br />

            <strong>Dispute Resolutions</strong>
            The application, interpretation, and construction of these Terms of Use, as well as any disagreements, problems, or conflicts relating to the use of the Services, should all be addressed amicably.
            <br /><br />

            <strong>Force Majeure</strong>
            DevX will be excused from any obligation to the extent performance thereof is prevented by acts of God, fire, flood, riots, material shortages, strikes, governmental acts, disasters, earthquakes, inability to obtain labor or materials through its regular sources, or any other cause beyond Seller reasonable control.
            Changes to these Terms and Conditions
            Please take notice that the underlying Terms and Conditions may undergo changes on any occasion.
            <br /><br />

            <strong>Contact Us</strong>
            If you have any questions about these Terms and Conditions, You can contact us by using this email: {text}.
          </TAC>
        </Container>
      </>
    )
  }
  