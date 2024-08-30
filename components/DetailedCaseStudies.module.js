import { useState } from "react";
import { Container } from "./styles/Container.styled";
import { DCS, DCSCard, DCSImage, DCSDetail } from "../components/styles/DetailedCaseStudies.styled";
import { CSData } from "./data/CaseStudiesData";
import ModalDefault from "./cs.modal.module";
import React from "react";

import { useEffect } from 'react';
import { useRouter } from 'next/router';

const DetailedCaseStudies = () => { 
    const [isTextExpanded, setIsTextExpanded] = useState(false);
    const [openedPopup, setOpenedPopup] = useState(0);
    const [popupData, setPopupData] = useState(0);
    const openPopup = (popupID, item) => {
        setOpenedPopup(popupID);
        setPopupData(item);
        document.body.classList.add("modal-open");
    }
    const closePopup = () => {
        setOpenedPopup(0);
        document.body.classList.remove("modal-open");
    };

    const toggleText = () => {
        setIsTextExpanded(!isTextExpanded);
    }

    const router = useRouter();
    useEffect(() => {
        const location = window.location.hash.split('=').pop();
    
        if (location.includes(location)) {
            const offset = -100;
            let elem = document.getElementById(location);
            if (elem) {
                let parentElem = elem.offsetParent;
                let rect = elem.getBoundingClientRect();
                let parentRect = parentElem.getBoundingClientRect();
                window.scrollTo({
                    top: rect.top + window.pageYOffset + offset,
                    behavior: 'smooth'
                });
            }
        } else {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }
    }, [router]);

    return ( 
        <>
        <DCS>
            <div className="dcs-top">
                <h2>Your Success, Our Passion: Discover DevX Digital Case Studies</h2>
                <p className={`page-description ${isTextExpanded ? "expanded" : ""}`}>
                    Immerse yourself in a collection of transformative stories demonstrating how our partnerships have driven success across industries. From facilitating unprecedented growth in fintech to enabling real estate moguls to tap into the power of digitalization, our case studies showcase DevX Digital's dedication towards your success.<br /><br />
                    <span className="extra-text">
                        Our digital solutions - powered by the latest technologies such as ReactJS, React Native, NodeJS, TypeScript, Ethers, Web3, AWS - are not just about developing user-friendly platforms. They are about helping businesses like yours address complex needs and excel in today's digital era.
                        <br /><br />
                        Dive into our success stories and envision what we could achieve together.
                    </span>
                    <span className={`read-more ${isTextExpanded ? "up" : ""}`} onClick={toggleText}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </span>
                </p>
            </div>
            <Container>
            
            {CSData.slice().reverse().map((item, index) => {
                return (           
                <DCSCard id={item.id} key={index}>
                    <DCSImage src={item.ProjectImage} alt={item.ProjectName} />
                    <DCSDetail className="DCSDetail">
                        <h3>{item.ProjectName}</h3>
                        <span>{item.ProjectTags}</span>
                        <div>Description</div>
                        <p>{item.ProjectDescription}</p>
                        <button onClick={() => openPopup(index + 1, item)}>See study</button>
                    </DCSDetail>
                </DCSCard>
                ) 
            })}
            <div>We're thrilled to share our stories of success and technological triumph at DevX Digital. Due to confidentiality, our most groundbreaking projects, often under Non-Disclosure Agreements (NDAs), remain off-stage. Eager to explore more about our capabilities? We'd be delighted to arrange a video call to provide a deeper dive into our methodologies and processes, while fully respecting our partners' privacy. Picture your business as the next success story, and let us turn that vision into reality. <br /><strong>Take the first step today. Contact us now!</strong></div> 
            </Container>
            {openedPopup != 0 && <ModalDefault handleClose={closePopup} data={popupData} />}
        </DCS>
        </>
    )
}

export default DetailedCaseStudies;
