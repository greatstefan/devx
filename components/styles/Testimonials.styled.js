import styled from "styled-components";

export const Testimonials = styled.section`
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
           // margin-bottom: 60px;
        }
    }
    p {        
        margin-bottom: 40px;
        text-align: center;
        
        @media (min-width: 992px) {
            margin-bottom: 60px;
        }
    }
    
    .testimonialSlider {
        //.slick-list {overflow: visible;}
    }

    .slick-slide {
        &>div {
            padding: 0 5px;
        }
    }
    img {
        max-width: 38px;
    }
`

export const Slide = styled.div`
    border: 1px solid #DDDDDD;
    padding: 32px 24px;
    text-align: center;
    position: relative;
    //max-width: 302px;
    z-index: 0;
    border-radius: 8px 8px 0px 0px;

    @media (max-width: 992px) {
        padding: 32px 12px 12px;
    }

    a {
        display: inline-block;
    }
`

export const SQuote = styled.img`
    position: absolute;
    left: -1px;
    top: -20px;
    z-index: 100;
    display: block;
`

export const SDetails = styled.div`
    margin-bottom: 16px;

    div {
        font-weight: 500;
        margin-bottom: 5px;
        color: ${({ theme }) => theme.colors.black};
    }
    span {
        font-size: 12px;
        line-height: 16px;
        display: block;
        color: ${({ theme }) => theme.colors.black};
    }
    i {
        color: ${({ theme }) => theme.colors.blue};
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 16px;
        letter-spacing: 0.4px;
        margin-top: 5px;
        display: block;
    }
`

export const SDescription = styled.div`
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.25px;
    text-align: center;
    padding: 0 10px;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.black};

    @media (max-width: 992px) {
        padding: 0;
    }
`

export const SliderNavigation = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 40px;
    width: 85px;
    margin: 40px auto 0;
    cursor: pointer;

    @media (max-width: 992px) {
        margin: 24px auto 0;
    }
`