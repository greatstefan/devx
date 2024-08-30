import styled from "styled-components";


export const ISection = styled.section`
    background: ${({ theme }) => theme.colors.white};
    padding: ${({ theme }) => theme.sections.padding.mobile};

    h2 { 
        ${({ theme }) => theme.heading.mobile.h2};
        color: ${({ theme }) => theme.colors.black};
        text-align: center;
    }
`
export const Col = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 45px;

    &:last-child {
        margin-bottom: 0;
    }

    @media (min-width: 769px) {        
        padding: 0 25px;
        width: 33.333%;
    }

    svg {
        margin-bottom: 30px
    }

    p {
        font-size: 24px;
        line-height: 38px;
        letter-spacing: 0.25px;
        margin-bottom: 20px;
        color: ${({ theme }) => theme.colors.black};

    }

    span {
        text-align: justify;
        display: block;
    }
`

