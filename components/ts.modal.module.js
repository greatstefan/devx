import React from "react";
import styled from "styled-components";
import { RiCloseLine } from "react-icons/ri";

const ModalDefault = ({handleClose, data}) => {
    return (
        <>
            <DefaultModal>
                <button onClick={handleClose}><RiCloseLine /></button>

                <ModalContainer>
                    <img src="./images/quote.svg" alt="Quote" />
                    <h5>Review given by <br /><i>{data.client}</i></h5>
                    <p><strong>Location:</strong> {data.location}</p>
                    <p><strong>Skills:</strong> {data.skills}</p>
                    <br />
                    <p>{data.description.fulldesc}</p>
                    <a href="#" onClick={handleClose}>Close this</a>
                </ModalContainer>
            </DefaultModal>
        </>
    );
}

export default ModalDefault;


export const DefaultModal = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    left:0;
    top:0;
    z-index: 10000;
    display: flex;
    align-items: center;
    padding: 28px;
    background: ${({ theme }) => theme.colors.white};

    button {
        position: absolute;
        top: 2%;
        right: 5%;
        background: none;
        outline: none;
        border: none;
        font-size: 60px;
        cursor: pointer;
        &:hover {
            color: ${({ theme }) => theme.colors.blue};
        }
    }
`
export const ModalContainer = styled.div`
    position: relative;
    text-align: center;
    margin: 0 auto; 

    @media (min-width: 768px) {
        max-width: 50%;
    }

    br {display: block;
        @media (min-width: 768px) {
            display: none;
        }
    }

    h5 {
        font-size: 24px;
        line-height: 32px;
        margin-bottom: 30px;
        font-weight: 900;
        color: ${({ theme }) => theme.colors.black};

        i {
            color: ${({ theme }) => theme.colors.blue};
            position: relative;
            font-style: normal;

            &:after {
                content: '';
                width: 100%;
                height: 8px;
                background: ${({ theme }) => theme.colors.cyan};
                position: absolute;
                left: 0;
                bottom: 3px;
                z-index: -1;
            }
        }
    }

    p {
        margin-bottom: 0;
        text-align: justify;
    }
    
    a  {
        display: block;
        text-decoration: none;
        margin-top: 30px;
        text-align: center;
        padding: 10px 0;
        border-radius: 4px;
        cursor: pointer;
        background: ${({ theme }) => theme.colors.black};
        color: ${({ theme }) => theme.colors.white};
        max-width: 150px;
        margin: 30px auto;

        &:hover {
            background: ${({ theme }) => theme.colors.blue};
        }
    }
`