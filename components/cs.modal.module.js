import React from "react";
import styled from "styled-components";
import { RiCloseLine } from "react-icons/ri";
import CaseStudyCarousel from "./CSGallery.module";

const ModalDefault = ({handleClose, data}) => {
    return (
        <>
            <DefaultModal>
                <Zontainer>
                    <button className="xclose" onClick={handleClose}><RiCloseLine /></button>

                    <ModalContainer>
                        <div className="grid-container">
                            <div className="grid-item item-1">
                                <h5>{data.ProjectName}</h5>
                                <span>{data.ProjectTags}</span>
                                <div>Client Situation</div>
                                <p dangerouslySetInnerHTML={{ __html: data.ProjectSituation }} />
                                <div>Our Solution</div>
                                <p>{data.ProjectSolution}</p>
                                <div>Results</div>
                                <p>{data.ProjectResults}</p>
                                                            
                                <div className="bottom-controls">
                                    <p>Need a similar solution?</p>
                                    <span>
                                        <a href="/contact-us">Let's talk</a>
                                        <button onClick={handleClose}>Close this</button>
                                    </span>
                                </div>
                            </div>
                            <div className="grid-item item-2">
                                <CaseStudyCarousel images={data.ProjectGallery} />
                            </div>
                        </div>
                    </ModalContainer>

                    <div className="csfooter">
                        <strong>The Dev Continues</strong>
                        <p>The issues of the future might not be solved with today's answers. DevX.digital doesn't approach customer relationships with a "project-base” mentality. <br />
                        In our opinion, there is always room for improvement and more hills to conquer on the path to digital acceleration. And we’ll be here to aid you!</p>
                    </div>
                </Zontainer>
            </DefaultModal>
        </>
    );
}

export default ModalDefault;

export const DefaultModal = styled.div`
    position: fixed;
    left:0;
    top:0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.white}; 
    z-index: 10000;

    button.xclose {
        position: absolute;
        top: 2%;
        right: 2%;
        outline: none;
        border: none;
        font-size: 50px;
        cursor: pointer;
        z-index: 100;
        background: #fff;

        svg {            
            fill: ${({ theme }) => theme.colors.blue};
        }

        &:hover svg {
            fill: ${({ theme }) => theme.colors.medblue};
        }
    }
`
export const Zontainer = styled.div`
    width: 100%;
    //padding-top: 90px;

    @media (min-width: 1200px) {
        height: 100%;
        display: flex;
    }
    @media (min-width: 1200px) {
        padding: 0 20px;
        max-width: 1400px;
        margin: 0 auto;
    }

    .csfooter {
        width: 100%;
        background: #fff;
        border-top: 5px solid ${({ theme }) => theme.colors.blue};
        text-align: justify;
        font-size: 12px;
        line-height: 14px;
        padding: 10px 20px;
        box-shadow: 0px -4px 8px 0px rgb(0 0 0 / 20%);
        position: absolute;
        bottom: 0;
        left: 0;

        br {display: none}

        @media (min-width: 960px) {
            font-size: 14px;
            line-height: 18px;
            padding: 20px 100px;
            br {display: block}
        }
       
        strong {
            margin-bottom: 5px;
            display: block;
        }

        @media (min-width: 768px) {
            text-align: center;
        }
    }
`
export const ModalContainer = styled.div`
    position: relative;
    margin: auto; 
    padding: 0;
    width: 90%;
    overflow-y: scroll;
    max-height: 86vh;
    text-align: justify;
    padding-top: 40px;
    padding-bottom: 50px;

    @media (min-width: 1200px) {
        width: 100%;
        //max-height: 100%;
        //overflow: visible;
        padding-top: 0;
    }

    .grid-container {
        display: flex;
        flex-direction: column;
        
        @media (min-width: 992px) {
            
            display: grid; 
            grid-template-columns: 1.7fr 1.3fr; 
            grid-template-rows: 1fr; 
            gap: 30px 30px; 
            grid-template-areas: "item-1 item-2";

            @media (max-width: 600px) {            
                grid-template-columns: 1fr;

                .item-1 {order:2}
                .item-2 {order:1}
            }

            .grid-item {

                &.item-1 {grid-area: 1 / 1 / 2 / 2;}
                &.item-2 {grid-area: 1 / 2 / 2 / 3;max-width: 650px;}
            }
        }
    }

    h5 {
        font-size: 24px;
        line-height: 32px;
        margin-bottom: 10px;
        color: ${({ theme }) => theme.colors.black};
    }
    div {
        color: ${({ theme }) => theme.colors.black};
        //margin-bottom: 5px;
        font-weight: 500;
    }
    .bottom-controls {
        margin-top: 35px;

        p {
            color: #111;
            font-size: 15px;
            margin-bottom: 10px;
        }

        span {
            display: flex;
            flex-direction: row;
        }

        a,button {
            font-size: 14px;
            //line-height: 1;
            font-weight: 400;
            margin-top: 0;

            @media (min-width: 960px) {
                margin-right: 10px;
            }
        }
        button {
            background: darkgray;

            &:hover {
                background: gray;
            }
        }
    }
    span {
        color: ${({ theme }) => theme.colors.blue};
        font-weight: 500;
        letter-spacing: 0.25px;
        margin-bottom: 20px;
        display: block;
    }
    p {
        text-align: justify;
        margin-bottom: 15px;
        font-size: 14px;
        line-height: 18px;        
        font-weight: 400;
        
        a {color: #6D7280;
            &:hover {color:#3976EE}}
    }
    span {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        @media (min-width: 960px) {
            justify-content: flex-start;
        }

        a, button  {
            display: block;
            text-decoration: none;
            margin-top: 30px;
            text-align: center;
            padding: 10px 0;
            border-radius: 4px;
            cursor: pointer;
            max-width: 160px;
            width: 100%;
            outline: none;
            border: none;
            letter-spacing: 1.25px;
            background: ${({ theme }) => theme.colors.blue};
            color: ${({ theme }) => theme.colors.white};
    
            &:hover {
                background: ${({ theme }) => theme.colors.medblue};
            }
        }

        button {max-width: 100px}
    }
`