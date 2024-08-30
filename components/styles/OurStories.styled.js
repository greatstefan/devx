import styled from "styled-components";

export const Stories = styled.section`
    background: ${({ theme }) => theme.colors.hero};
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
    
    .slick-slide {
        &>div {
            padding: 0 5px;
        }
    }
    .btn {
        @media (max-width: 768px) {
            margin-top: 20px;
        }
    }
`
export const StorieCard = styled.div`
    padding: 16px;
    width: 100%;
    margin: 0 10px;
    border-radius: 8px;
    background: ${({ theme }) => theme.colors.white};
    
    @media (max-width: 768px) {
        width: 100%;
        margin: 0;
    }
`
export const StorieImage = styled.img`
    margin-bottom: 10px;
`
export const StorieTag = styled.span`
    font-size: 14px;
    margin-bottom: 10px;
    display: block;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.blue};
`
export const StorieTitle = styled.span`
    font-size: 24px;
    line-height: 32px;

    @media (max-width: 768px) {
        font-size: 16px;
        line-height: 24px;
    }
`