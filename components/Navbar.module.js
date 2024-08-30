import { useState } from "react";
import { useRouter } from 'next/router';
import styled from "styled-components";
import { Squash as Hamburger } from 'hamburger-react'

import { Container } from "./styles/Container.styled";
import DevxLogo from '../public/images/devx-final.svg';

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);
    const router = useRouter();

    return (
        <Nav>
            <Container>
                <Navigation>
                    <a href="/">
                        <DevxLogo width='260' role="img" alt="DevX Digital" />
                    </a>
                    <Hamburger toggled={isOpen} toggle={setOpen} color="#1E1E1E" />
                    <Menu className="no-mobile" isOpen={isOpen}>
                        <MenuLink href="/our-services/" className={router.pathname === '/our-services/' ? 'active' : ''}>Our Services</MenuLink>
                        <MenuLink href="/how-we-do-it/" className={router.pathname === '/how-we-do-it/' ? 'active' : ''}>How we do it</MenuLink>
                        <MenuLink href="/case-studies/" className={router.pathname === '/case-studies/' ? 'active' : ''}>Case Studies</MenuLink>
                        <MenuLink href="/meet-us/" className={router.pathname === '/meet-us/' ? 'active' : ''}>Meet Us</MenuLink>
                        <MenuLink href="/partners/" className={router.pathname === '/partners/' ? 'active' : ''}>Partners</MenuLink>
                        <MenuLink href="/contact-us/" className="start">Start your project</MenuLink>
                    </Menu>
                </Navigation>
                <Menu className="no-desktop" isOpen={isOpen}>
                    <MenuLink href="/our-services/">Our Services</MenuLink>
                    <MenuLink href="/how-we-do-it/">How we do it</MenuLink> 
                    <MenuLink href="/case-studies/">Case Studies</MenuLink>
                    <MenuLink href="/meet-us/">Meet Us</MenuLink>
                    <MenuLink href="/partners/">Partners</MenuLink>
                    <MenuLink href="/contact-us/" className="start">Start your project</MenuLink>
                </Menu>
            </Container>
        </Nav>
    )
} 

export default Navbar;

const Nav = styled.div`
    width: 100%;
    z-index: 100;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 4px 4px #EDF3FF;
    background: ${({ theme }) => theme.colors.white};

    .no-desktop {display: none}
    .no-mobile {display: flex}

    @media (max-width: 992px) {
        .no-desktop {display: flex}
        .no-mobile {display: none}
    }
`
const Navigation = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 1.5rem 0;
    position: relative;
    z-index: 100;
    background-color: ${({ theme }) => theme.colors.white};

    @media (min-width: 993px) {
        .hamburger-react {
            display: none;
        }
    }

    a {
        svg {
            max-width: 180px;

            @media (min-width: 768px) {
                max-width: 260px;
            }
        }
    }
`
const Menu = styled.div`
    z-index: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    @media (max-width: 992px) {
        position: absolute;
        left: 0;
        background: white;
        padding-bottom: 30px;
        box-shadow: 0px 4px 4px #edf3ff;

        width: 100%;
        overflow: hidden;
        flex-direction: column;
        transition: transform 0.3s ease-in;
        transform: ${({ isOpen }) => (isOpen ? "translateY(0)" : "translateY(-200%)")};;
        
    }
`
const MenuLink = styled.a`
    text-decoration: none;
    cursor: pointer;
    text-align: center;
    padding: 0 10px;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: 0.25px;
    margin: 12px 0;
    color: ${({ theme }) => theme.colors.black};

    &.active {
        color: ${({ theme }) => theme.colors.blue};
    }

    @media (min-width: 993px) {
        margin: 0;
        font-size: 14px;
        line-height: 24px;
    }

    @media (min-width: 1200px) {
        padding: 0 20px;
    }

    &:hover {
        color: ${({ theme }) => theme.colors.blue};
    }

    &.start {
        padding: 10px 24px;
        border-radius: 4px;
        margin-bottom: 0;
        color: ${({ theme }) => theme.colors.white};
        background: ${({ theme }) => theme.colors.blue};

        &:hover {
            background: ${({ theme }) => theme.colors.black};
        }

        @media (min-width: 993px) {            
            margin-left: 40px;
            //display: none;
        }
    }
`