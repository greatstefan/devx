import styled from "styled-components"

export const DCS = styled.section`    
    padding: ${({ theme }) => theme.sections.padding.mobile};

    @media (min-width: 769px) {
        padding: ${({ theme }) => theme.sections.padding.desktop};
    }

    h2 {
        text-align: center;
        ${({ theme }) => theme.heading.mobile.h2};
        color: ${({ theme }) => theme.colors.black};

        @media (min-width: 992px) {
            ${({ theme }) => theme.heading.desktop.h2};
            margin-bottom: 0;
            text-align: left;
            font-size: 28px;
            font-weight: 600;
        }
    }

    .dcs-top {
        margin-bottom: 45px; 
        max-width: 1280px;
        width: 100%;
        margin: 0 auto;

        h2, p {
            
        padding: 0 20px;
        }
    }
    .page-description {
        margin-bottom: 45px;
        text-align: justify;
    }
    .page-description {
        position: relative;
        overflow: hidden;
    }
    
    .page-description::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 50%; /* adjust as per your design */
        background: linear-gradient(transparent, white);
        display: none;
    }
    
    .page-description .extra-text {
        display: block;
    }
    
    .page-description .read-more {
        position: absolute;
        bottom: 0.5em; /* adjust as per your design */
        left: 50%;
        margin-left: -12px;
        cursor: pointer;
        transform: rotate(0deg);
        transition: transform 0.3s ease;
        display: none;
        z-index: 1; /* make sure the button is above the gradient */
    }
    
    .page-description .read-more.up {
        transform: rotate(180deg);
        bottom: -30px;
    }
    
    .page-description .read-more svg {
        color: #3976ee;
    }
    
    @media screen and (max-width: 768px) { /* apply the effect only on small screens (<= 768px wide) */
        .page-description {
            max-height: 11em; /* adjust as per your design */
        }
        
        .page-description.expanded {
            max-height: none;
            overflow: visible;
        }
        
        .page-description::after {
            display: block;
        }
        
        .page-description.expanded::after {
            display: none;
        }
        
        .page-description .extra-text {
            display: none;
        }
        
        .page-description.expanded .extra-text {
            display: block;
        }
        
        .page-description .read-more {
            display: block;
        }
    }
    
` 
export const DCSCard = styled.div`
    border-radius: 8px;
    margin-bottom: 15px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    filter: drop-shadow(0px 4px 4px #EDF3FF);
    background: ${({ theme }) => theme.colors.white};

    @media (min-width: 769px) {  
        flex-direction: row;  
        margin-bottom: 40px;    
        align-items: center;
    }

    :nth-child(even) {
        @media (min-width: 769px) {
            flex-direction: row-reverse; 
        }
        
        .DCSDetail {
            @media (max-width: 1199px) {
                //padding-left: 15px;
            }
            @media (min-width: 1200px) {
                padding-left: 60px;
            }
        }
    }

    &:last-child {
        margin-bottom: 0;
    }
`
export const DCSImage = styled.img`
    //margin-bottom: 15px;
    border-radius: 8px;

    @media (min-width: 769px) {
        width: 40%;
    }
    @media (min-width: 1200px) {
        width: 48%;
    }
`
export const DCSDetail = styled.div`

    @media (min-width: 769px) {
        width: 58%;
    }
    @media (min-width: 1200px) {
        width: 48%;
    }

    h3 {
        font-size: 16px;
        line-height: 24px;
        margin-bottom: 5px;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.black};
        margin-top: 20px; 

        @media (min-width: 769px) {
            font-size: 24px;
            line-height: 32px;
        }
    }
    span {
        font-weight: 500;
        display: block;
        margin-bottom: 20px;
        font-size: 12px;
        line-height: 16px;
        color: ${({ theme }) => theme.colors.blue};

        @media (min-width: 769px) {
            font-size: 16px;
            line-height: 22px;
        }
    }
    div {
        font-weight: 500;
        margin-bottom: 5px;
        display: none;
        color: ${({ theme }) => theme.colors.black};

        @media (min-width: 992px) { 
            display: block;
        }
    }
    p {
        margin-bottom: 15px;
        display: none;        
        
        @media (min-width: 992px) { 
            display: block;
        }
    }
    a {
        display: none;
        font-size: 14px;
        line-height: 24px;
        letter-spacing: 1.25px;
        text-decoration: none;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.blue};

        @media (min-width: 769px) { 
            display: inline-block;

            &:hover {
                text-decoration: underline;
            }
        }
    }
    button {
        font-size: 14px;
        line-height: 28px;
        letter-spacing: 1.25px;
        padding: 9px 0;
        width: 100%;
        border: none;
        border-radius: 4px;
        text-align: center;        
        cursor: pointer;
        color: ${({ theme }) => theme.colors.white};
        background: ${({ theme }) => theme.colors.blue};

        &:hover {
            background: ${({ theme }) => theme.colors.medblue};
        }

        @media (min-width: 769px) { 
            max-width: 150px;
        }
    }
`