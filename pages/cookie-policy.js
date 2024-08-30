import { Container } from "../components/styles/Container.styled";
import styled from "styled-components";
import { NextSeo } from "next-seo";
import { useRouter } from 'next/router';

export const TAC = styled.div`
  padding: 60px 0;
  h1 {color:black;font-weight:500;}
  strong {display: block;color: black}
  ul {margin-left: 20px;margin-top: 5px;}
` 
export const Block = styled.div`
  margin: 20px 0 0;

  table {
    width: 100%;
    border-collapse: collapse;

    thead {
      background: #dfdfdf;
    }

    th, td {
      padding: 8px;
      text-align: left;
      border: 1px solid black;
    }
  }
`
 
export default function Contact() {
    const router = useRouter();
    const canonicalUrl = `https://devx.digital${router.asPath}/`;
    return (
      <>
        <NextSeo
          title="DevX Digital - Cookie Policy"
          description="Explore DevX Digital's Cookie Policy to understand how we use cookies to improve your browsing experience. Our policy outlines the use of first-party and third-party cookies for site navigation, support, analytics, and marketing efforts. Read on for detailed insights into our cookie practices and how they contribute to optimizing your interaction with our website."
          canonical={canonicalUrl}
          openGraph={{
            url: canonicalUrl,
            title: "DevX Digital - Cookie Policy",
            description: "Explore DevX Digital's Cookie Policy to understand how we use cookies to improve your browsing experience. Our policy outlines the use of first-party and third-party cookies for site navigation, support, analytics, and marketing efforts. Read on for detailed insights into our cookie practices and how they contribute to optimizing your interaction with our website."
          }}
        />

        <Container>
          <TAC>
            <h1>Cookie policy</h1>
            <br /><br />
            A cookie is a small text file that a website sends to your browser to store on your device, which helps to retain information about you, such as login information and language preferences. These cookies are set by us and referred to as first-party cookies. Devx Digital may also uses third-party cookies for marketing efforts.
            <br /><br />
            Specifically, we use cookies and other tracking technologies for the following purposes:
            <ul>
              <li>To assist you with navigating the internet;</li>
              <li>To provide online support when you need it;</li>
              <li>To analyze how you explore our products and services;</li>
              <li>To support our marketing efforts, including behavioral advertising.</li>
            </ul>
            <br />
            Below is a detailed list of the cookies we use on our website. Our website is regularly scanned with our cookie scanning tool to maintain the most accurate list possible. 
            <br /><br />
            We classify cookie modules into the following categories:
            <ul>
              <li>Statistical cookies</li>
              <li>Statistical cookies</li>
            </ul>
            <br />
            These cookies help website owners understand how visitors interact with their sites by collecting and reporting anonymous information.

            <Block>
              <table>
                <thead>
                  <tr>
                    <th>Cookie</th>
                    <th>Description</th>
                    <th>Duration</th>
                    <th>Type</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>_ga_3217M6MQY0</td>
                    <td>This cookie is installed by Google Analytics.</td>
                    <td>2 years</td>
                    <td>Analytics</td>
                  </tr>
                  <tr>
                    <td>_ga</td>
                    <td>The _ga cookie, installed by Google Analytics, calculates visitor, session and campaign data and also keeps track of site usage for the site's analytics report. The cookie stores information anonymously and assigns a randomly generated number to recognize unique visitors.</td>
                    <td>2 years</td>
                    <td>Analytics</td>
                  </tr>
                </tbody>
              </table>
            </Block>

          </TAC>
        </Container>
      </>
    )
  }
  