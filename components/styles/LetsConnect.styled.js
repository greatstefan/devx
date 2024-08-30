import styled from "styled-components";

export const LetsConnect = styled.section`
    background: ${({ theme }) => theme.colors.white};
    padding: ${({ theme }) => theme.sections.padding.mobile};

    @media (min-width: 992px) {
        padding: ${({ theme }) => theme.sections.padding.desktop};
    }

    section.gray {
        padding-top: 40px;
        background-color: #FAFAFA;

        @media (min-width: 992px) {
            padding: ${({ theme }) => theme.sections.padding.desktop};
        }
    }
    section.full-height {
        padding: 6vw 0 10em;
    }

    h1, h2 {
        ${({ theme }) => theme.heading.mobile.h2};
        color: ${({ theme }) => theme.colors.black};
        text-align: center;
        font-size: 42px;
        font-weight: 900;

        @media (min-width: 992px) {
            ${({ theme }) => theme.heading.desktop.h2};
            //margin-bottom: 40px;
        }

        span {
            position: relative;
            display: inline-block;
            z-index: 1;
            color: #3976EE;

            &:after {
                content: '';
                display: block;
                width: 100%;
                height: 13px;
                position: absolute;
                bottom: 4px;
                left: 0;
                z-index: -1;
                background: #BAFFFB;
            }
        }
    }
    p {
        br {
            display: none
            
            @media (min-width: 992px) {
                display: block;
            }
        };
        //padding: 0 20px;
        &.tac {
            text-align: center !important;

            span {
                background-color: #bafffb;
                color: #3976ee;
                padding: 6px 12px;
                border-radius: 4px;
                line-height: 40px;
                font-weight: bold;
                font-size: 12px;
            }
        }
    }

    .error {
        border-color: red;
        span {color: red;}
    }

    .contact-us-page {
        h1, h2 {
            font-size: 28px;
            font-weight: 900;
            text-align: center;
            line-height: 1.3;
            margin-bottom 10px;
            color: ${({ theme }) => theme.colors.black};

            @media (min-width: 992px) {
                font-size: 42px;
            }
        }
        p {
            margin-bottom: 7px;
            text-align: left;

            &:nth-child(3) {margin-bottom: 45px;}
        }
    }
    .partners-container {
        padding: 40px 0;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }
    .partners-logo {
        padding: 10px;
        display: flex;
        align-items: center;
    }
    .partners-logo img {
        max-width: 160px;
        filter: grayscale(100%);
        transition: filter 0.3s ease;

        &:hover {
            filter: grayscale(0%);
        }
    }
`

export const Illustration = styled.img`
    align-self: flex-start;

    &.desktop {
        display: none;
        
        @media (min-width: 769px) {
            display: block;
        }
    }
`

export const MobileIllustration = styled.img`
    display: block;
    transform: rotate(-0.0350rad);
    max-width: 270px;
    margin: 0 auto 20px;
    
    &.mobile {        
        @media (min-width: 769px) {
            display: none;
        }
    }
`

export const ContactForm = styled.div`
    width: 100%;
    color: ${({ theme }) => theme.colors.darkblue};

    @media (min-width: 992px) {
        max-width: 420px;
    }

    label {
        display: block;
        margin-bottom: 30px;
        max-width: 100%;
        border-bottom: 2px solid ${({ theme }) => theme.colors.black};

        :nth-child(5) {
            border: none;
            display: flex;
            align-items: center;

            input {
                width: 16px;
                height: 16px;
                margin-right: 15px;
            }
        }

        span {
            display: block;
            color: ${({ theme }) => theme.colors.blue};
        }

        input, textarea {
            border: none;
            width: 100%;
            outline: none;
        }

        textarea {
            resize: none;
        }

        i {
            font-style: normal;
            font-size: 13px;
            line-height: 18px;
        
            a {
                color: inherit;
            }
        }
    }
    
    p {
        display: flex;
        font-size: 12px;

        input {
            margin-right: 10px;
        }
    }

    input {
        &[type='submit'] {
            padding: 13px 24px;
            background: ${({ theme }) => theme.colors.blue};
            border-radius: 4px;
            border: none;
            color: #fff;
            font-size: 14px;
            line-height: 24px;
            letter-spacing: 1.25px;
            cursor: pointer;
            margin-top: 25px;

            &:hover {
                background: ${({ theme }) => theme.colors.medblue};
            }
        }
    }
`