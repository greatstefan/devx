import styled from "styled-components";

export const WhatMakesUsUnique = styled.section`
    background: ${({ theme }) => theme.colors.white};
    padding: ${({ theme }) => theme.sections.padding.mobile};

    @media (min-width: 992px) {
        padding: ${({ theme }) => theme.sections.padding.desktop};
    }

    h2 {
        ${({ theme }) => theme.heading.mobile.h2};
        color: ${({ theme }) => theme.colors.black};
        text-align: center;

        @media (min-width: 992px) {
            ${({ theme }) => theme.heading.desktop.h2};
            margin-bottom: 40px;
        }
    }
`
export const UniqueBox = styled.div`
    max-width: 100%;
    padding: 0 20px;
    text-align: justify;

    h4 {
        text-align: center;
        margin-top: 24px;        
        letter-spacing: 0.25px;
        color: ${({ theme }) => theme.colors.black};
        ${({ theme }) => theme.heading.mobile.h4};
    }
    
    i {
        font-style: normal;

        @media (max-width: 768px) {
            display: none;
        }
    }

    span {
        text-align: center;
        display: block;
        color: ${({ theme }) => theme.colors.blue};
        font-weight: 500;
        font-size: 20px;
        line-height: 32px;
        margin-bottom: 10px;

        @media (max-width: 768px) {
            font-size: 18px;
            margin-bottom: 0;
        }
    }

    @media (max-width: 768px) {
        margin-bottom: 30px;
        padding: 0;

        &:last-child {margin-bottom: 0} 
    }
`
export const UniqueImg = styled.img`
    margin: 0 auto;
`
export const UniqueThumb = styled.div`
    height: 160px;
    display: flex;
    justify-content: center;
`