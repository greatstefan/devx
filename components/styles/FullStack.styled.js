import styled from "styled-components"
import theme from "../data/settings"


export const DFStackSection = styled.section`    
    background: ${({ theme }) => theme.colors.body};
    padding: ${({ theme }) => theme.sections.padding.mobile};
    display: none;

    @media (min-width: 769px) {
        display: block;
    }
`
export const FSContainer = styled.div`
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
`
export const FSCard = styled.div`
    background: ${({ theme }) => theme.colors.white};
    border-radius: 8px;
    padding: 80px 110px;
    margin: 40px 0;
    display: flex;
    align-items: center;
    filter: drop-shadow(0px 4px 4px #EDF3FF);
`
export const FSleft = styled.div`
    width: 50%;
`
export const FSright = styled.div`
    width: 50%;
`
export const BTitle = styled.h2`
    font-size: 34px;
    line-height: 48px;
    margin-bottom: 25px;
    color: ${({ theme }) => theme.colors.black};
`
export const DevContent = styled.div`
    margin-bottom: 35px;

    &:last-child {
        margin-bottom: 0;
    }
`
export const LTitle = styled.h3`
    font-size: 24px;
    line-height: 32px;
    color: ${({ theme }) => theme.colors.black};
    margin-bottom: 20px;
`
export const Desc = styled.div`
    margin-bottom: 20px;
    // color: ${({ theme }) => theme.colors.gray};

    ul {
        margin-left: 20px; 
        
       li {
        text-align: justify;
       } 
    }
`
export const Link = styled.a`
    text-decoration: none;
    letter-spacing: 1.25px;
    font-weight: 500;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.blue};

    &:hover {
        color: #0144C9;
    }
`
export const FSBottom = styled.div`
    margin-top: 30px;

    div {
        
        margin-bottom: 10px;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.black};
    }
    ul {
        max-width: 180px;
        width: 100%;
        justify-content: space-between;
        list-style-type: none;
        display: flex;
        align-items: center;
        
        li {
            display: flex;
            flex-direction: column;
            align-items: center;

            p {
                margin: 5px 0 0;
            }
        }
    }
`
export const MServices = styled.section`
    background: ${({ theme }) => theme.colors.body};
    padding: ${({ theme }) => theme.sections.padding.mobile};
    display: block;

    @media (min-width: 769px) {
        display: none;
    }
`
export const MContainer = styled.div`
    padding: 0 24px;
`
export const MSCard = styled.div`
    background: ${({ theme }) => theme.colors.white};
    border-radius: 8px;
    margin: 0 0 15px 0;
    padding: 40px 55px;
    text-align: center;

    &:last-child {margin: 0}

    svg {max-width: 100%; margin:0 auto 25px;}
    .collapse-content {
        margin-top: 30px;
    }
    .collapse-content.collapsed {
        display: none;
    }

    .collapsed-content.expanded {
        display: block;
    }
    h3 {
        font-size: 16px;
        text-align: left;
        margin-bottom: 5px;
        font-weight: 500;        
        color: ${({ theme }) => theme.colors.black};
    }
    ul li, p {
        text-align: left;
        font-size: 14px;
        line-height: 22px;
        margin-bottom: 8px;
    }
`
export const MSTitle = styled.h2`
    margin-bottom: 40px;
    font-weight: 500;       
    color: ${({ theme }) => theme.colors.black};
`
export const MSActions = styled.div`
    display: flex;
    flex-direction: column;

    a {
        line-height: 1;
        display: block;
        padding: 10px 0;
        border-radius: 4px;
        text-decoration: none;
        font-size: 14px;
        line-height: 24px;  


        &.viewstudies {
            margin-bottom: 10px;
            border: 1px solid ${({ theme }) => theme.colors.blue};
            color: ${({ theme }) => theme.colors.blue};
        }
        &.collapse-button {
            color: ${({ theme }) => theme.colors.white};
            background: ${({ theme }) => theme.colors.blue};
        }
    }
`