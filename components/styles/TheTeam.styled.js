import styled from "styled-components";

export const TheTeam = styled.section`
    background: ${({ theme }) => theme.colors.body};
    padding: ${({ theme }) => theme.sections.padding.mobile};

    @media (min-width: 992px) {
        padding: ${({ theme }) => theme.sections.padding.desktop};
    }

    h2 {
        ${({ theme }) => theme.heading.mobile.h2};
        color: ${({ theme }) => theme.colors.black};
        text-align: center;
        margin-bottom: 0;

        @media (min-width: 992px) {
            ${({ theme }) => theme.heading.desktop.h2};
            margin-bottom: 0;
        }
    }
    h2, p {
        text-align: center
    }

    .slick-slider {
        margin-top: 40px;
    }

    .slick-prev, .slick-next {
        font-size: 0;
        line-height: 0;
        position: absolute;
        top: 50%;
        padding: 0;
        transform: translate(0, -50%);
        cursor: pointer;
        border: none;
        outline: none;
        background: none;
        z-index: 1;
        width: auto;
        height: auto;
    }
    .slick-dots {
        bottom: -40px;
        li button:before {font-size: 10px;color: ${({ theme }) => theme.colors.blue}}
    }
`
export const Slide = styled.div`
    .innerSlider {
        background: white;
        padding: 16px;
        text-align: center;
        border-radius: 8px;
        margin: 0 12px;

        img {
            margin-bottom: 20px;
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
        }
    
        p {
            font-size: 24px;
            line-height: 32px;
            margin-bottom: 10px;
            color: ${({ theme }) => theme.colors.black};
        }
        span {
            display: block;   
            font-weight: 500;
            color: ${({ theme }) => theme.colors.blue};
        }
        i {
            font-style: normal;
            font-size: 12px;
            text-transform: uppercase;
        }
    }    
`
export const Image = styled.img`

`