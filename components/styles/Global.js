import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;        
        outline: none;
    }
    body>div {
        max-width: 100%;
        overflow-x: hidden;
    }

    html,
    body {
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.15px;
        color: #6D7280;
        background: ${({ theme }) => theme.colors.body}
    }
    body.modal-open {
        overflow: hidden;
    }
    p {
        color: ${({ theme }) => theme.colors.gray}
    }
    img, svg {
        max-width: 100%;
        display: block;
    }
    h1, h2, h3, h4, h5, h6 {
        font-weight: normal;
    }
    .between {
        justify-content: space-between;
    }
    .btn {
        font-size: 14px;
        padding: 13px 24px;
        border-radius: 4px;
        text-decoration: none;
        display: inline-block;
        color: ${({ theme }) => theme.colors.white};
        background: ${({ theme }) => theme.colors.blue};

        &:hover {
            opacity: 0.9
        }
    }
    .mt-1 {
        margin-top: 10px;
    }
    .mt-2 {
        margin-top: 20px;
    }
    .mt-3 {
        margin-top: 30px;
    }
    .mt-4 {
        margin-top: 40px;
    }
    .mt-5 {
        margin-top: 50px;
    }
    .ta-c {text-align:center}
    .flex-center {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .row-reverse {
        flex-direction: row-reverse;
    }
    .totop {
        position: fixed;
        right: 0;
        bottom: 5%;

        background: white;
        border-top-left-radius: 50%;
        border-bottom-left-radius: 50%;
        width: 48px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;

        span {
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0px 4px 4px #EDF3FF;

            background: ${({ theme }) => theme.colors.blue};
            width: 36px;
            height: 36px;
            border-radius: 50%;

            svg {
                font-size: 20px;
                color: ${({ theme }) => theme.colors.white};
            }
        }
    }
    .slick-slider .slick-list {overflow: visible;}
    ::-webkit-scrollbar {
        width: 0.2em;
        background-color: transparent;
    }

`

export default GlobalStyles