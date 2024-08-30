import styled from "styled-components";

export const Modal = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.9);
    display: flex;
    justify-content: center;
    align-items: center;
`
export const CloseButton = styled.button`
    width: 50px;
    height: 50px;
    position: absolute;
    right: 46px;
    top: 30px;
    cursor: pointer;
    font-size: 18px;
    background: #222;
    border: solid 0px #000;
    color: #fff;
`

export const ContactForm = styled.div`
    width: 100%;
    color: #e0e0e0;
    padding: 0 15px;
    margin-top: 80px;

    @media (min-width: 992px) {
        max-width: 620px;
    }

    .error {
        border-color: #f55e5e;
        span {color: #f55e5e;}
    }

    label {
        display: block;
        margin-bottom: 30px;
        max-width: 100%;
        //border-bottom: 2px solid ${({ theme }) => theme.colors.black};

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
            color: #e0e0e0;
        }

        input, textarea {
            border: none;
            width: 100%;
            outline: none;
            box-sizing: border-box;
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

    input,textarea {
        margin-top: 5px;
        padding: 13px 12px;
        background: #222;
        border-radius: 4px;
        border: none;
        color: #fff;
        font-size: 14px;
        line-height: 24px;
        letter-spacing: 1.25px;
        cursor: pointer;
    }

    input {
        &[type='submit'] {
            padding: 13px 24px;
            border-radius: 4px;
            border: none;
            color: #e0e0e0;
            font-size: 14px;
            line-height: 24px;
            letter-spacing: 1.25px;
            cursor: pointer;
            margin-top: 0px;
            background: ${({ theme }) => theme.colors.medblue};

            &:hover {
                color: #fff;
                background: #002b7f;
            }
        }
    }
`