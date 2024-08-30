import { Container } from "../components/styles/Container.styled";
import styled from "styled-components";
import { NextSeo } from "next-seo";
import { useState } from 'react';

export const TAC = styled.div`
  padding: 60px 0;
  h1 {color:black;font-weight:500;}
  strong {display: block;color: black}
  ul {margin-left: 20px;margin-top: 5px;}

  display: flex;
  min-height: 50vh;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 60px;
    line-height: 1;
    text-align: center;
    margin-bottom: 3vh;
    font-weight: 600;
  }
` 

export default function Contact() {

    return (
      <>
        <NextSeo title="404 - Page Not Found" description="The page you are looking for could not be found." />

        <Container>
          <TAC>
            <div>
                <h1>404</h1>
                <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. <br>
                </br>Try searching for the content you're interested in, or explore some of the links below:</p>
                <a href="/">Home</a> or <a href="/contact-us">Contact us</a>
            </div>
          </TAC>
        </Container>
      </>
    )
  }