import styled from "styled-components";

export const Studies = styled.section`    
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
            margin-bottom: 15px;
        }
    }
    p {text-align: center;margin-bottom: 50px;}
    
    .slick-slide {
        &>div {
            padding: 0 5px;
        }
    }
`
export const Slide = styled.div`
    cursor: pointer;
    padding: 8px;    
    //max-width: 302px;
    border-radius: 8px;
    background: ${({ theme }) => theme.colors.white};

    @media (min-width: 769px) {
        background: ${({ theme }) => theme.colors.body};
        padding: 16px;
    }
`
export const SThumb = styled.img`
    margin-bottom: 15px;
    display: block;
`
export const SDesc = styled.div`
    h5 {
        font-size: 18px;
        font-weight: 500;
        display: block;
        color: ${({ theme }) => theme.colors.black};
    }
    
    i {
        font-style: normal;
        font-size: 14px;
        color: ${({ theme }) => theme.colors.black};
    }

    h5, i {
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
`
