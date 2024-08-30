import { DFStackSection, FSContainer, FSCard, FSleft, FSright, BTitle, DevContent, LTitle, Desc, Link, FSBottom, MSActions, MSCard, MSTitle, MServices, MContainer } from "./styles/FullStack.styled";
import { CiMobile3, CiLaptop, CiDesktop } from "react-icons/ci";
import React, { useState } from "react";
import { useEffect } from 'react';
import { useRouter } from 'next/router';


import FSImg from '../public/images/ourservices/full_stack.svg';
import MDImg from '../public/images/ourservices/mobile_dev.svg';
import WBImg from '../public/images/ourservices/web3.svg';
import QAImg from '../public/images/ourservices/qa.svg';

const FullStack = ({ collapsed, children }) => { 
    
    const router = useRouter();
    const locations = ["full-stack", "full-stack-dev", "mobile-development", "mobile-dev", "web3-development", "web3-dev", "qa-app-testing", "qa-app"];
    
    useEffect(() => {
        const location = window.location.hash.split('=').pop();
    
        if (locations.includes(location)) {
            const offset = -100;
            let elem = document.getElementById(location);
            if (elem) {
                let parentElem = elem.offsetParent;
                let rect = elem.getBoundingClientRect();
                let parentRect = parentElem.getBoundingClientRect();
                window.scrollTo({
                    top: rect.top - parentRect.top + window.pageYOffset + offset,
                    behavior: 'smooth'
                });
            }
        } else {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }
    }, [router]);
    

    const [isCollapsed, setIsCollapsed] = React.useState(0);

    const showDetails = (nr) => {
        if (isCollapsed == nr) {
            setIsCollapsed(0);
        } else {
            setIsCollapsed(nr);
        }
    }
    return (
        <>
        <DFStackSection>
            <FSContainer>
                <FSCard id={'full-stack'}>
                    <FSleft>
                        {/* <BTitle>Full Stack Development </BTitle> */}
                        <DevContent>
                            <LTitle>Front-End Development</LTitle>
                            <Desc>
                                <ul>
                                    <li><strong>UI/UX app development</strong> - Development of user interfaces and user experiences for data-driven, highly scalable online applications.</li>
                                    <li><strong>Front-end design and architecture</strong> - We’re leveraging a collection of tools and methods aimed at improving the quality of front-end code, to create efficient and long-lasting apps.</li>
                                    <li><strong>PWA development</strong> - Progressive web app development for the perfect combination between native mobile apps and websites.</li>
                                </ul>
                            </Desc>
                            {/* <Link href="/case-studies">View case study</Link> */}
                        </DevContent>
                        <DevContent>
                            <LTitle>Back-End Development</LTitle>                            
                            <Desc>
                                <ul>
                                    <li><strong>Web/Mobile app development</strong> - As experts in B2B mobile and web back-end applications, we professionally develop native iOS and Android applications as well as hybrid and cross-platform ones.</li>
                                    <li><strong>Cloud Back-end Solutions</strong> - We've developed enough cloud-based back-end systems that can handle high loads, process large amounts of data, and scale up and down without experiencing any latency concerns.</li>
                                </ul>
                            </Desc>
                            {/* <Link href="/case-studies">View case study</Link> */}
                        </DevContent>
                    </FSleft>
                    <FSright className="flex-center">
                        <FSImg width="483" height="348" role="img" alt="Full Stack Development" />
                    </FSright>
                </FSCard>
                <FSCard className="row-reverse" id={'mobile-development'}>
                    <FSleft>
                        <DevContent>
                            <LTitle>Mobile Development</LTitle>
                            <Desc>We provide scalable applications and full-cycle development services for both iOS and Android, in addition to cross-platform apps that make use of the native capabilities of the supported platforms.</Desc>
                            {/* <Link href="/case-studies">View case study</Link> */}
                        </DevContent>
                    </FSleft>
                    <FSright className="flex-center">
                        <MDImg width="375" height="232" role="img" alt="Mobile Development" />
                    </FSright>
                </FSCard>                
                <FSCard id={'web3-development'}>
                    <FSleft>
                        <DevContent>
                            <LTitle>Blockchain Development</LTitle>
                            <Desc>Need powerful solutions that will increase security and speed up the exchange of information in a way that is cost-effective and more transparent? We can help you with high-tech web3 development.</Desc>
                            {/* <Link href="/case-studies">View case study</Link> */}
                        </DevContent>
                    </FSleft>
                    <FSright className="flex-center">
                        <WBImg width="381" height="211" role="img" alt="Blockchain Development" />
                    </FSright>
                </FSCard>
                <FSCard className="row-reverse" id={'qa-app-testing'}>
                    <FSleft>
                        <DevContent>
                            <LTitle>QA and App Testing</LTitle>
                            <Desc>We've got you taken care of! If you use our testing solutions, your apps will always have the greatest possible degree of quality.</Desc>
                            <Desc>Starting from the very first day, this is a never-ending process. Our team puts in a lot of effort to ensure that every application that we collaborate on is of high quality. All stages of a project's life cycle may benefit from our testing services, from requirements gathering to bug fixing.</Desc>
                            
                            <FSBottom>
                                <div>What testing environments do we cover?</div>
                                <ul>
                                    <li>
                                        <CiMobile3 />
                                        <p>Mobile</p>
                                    </li>
                                    <li>
                                        <CiLaptop />
                                        <p>Web</p>
                                    </li>
                                    <li>
                                        <CiDesktop />
                                        <p>Desktop</p>
                                    </li>
                                </ul>
                            </FSBottom>
                        </DevContent>
                    </FSleft>
                    <FSright className="flex-center">
                        <QAImg width="381" height="211" role="img" alt="QA APP Testing" />
                    </FSright>
                </FSCard>
            </FSContainer>   
        </DFStackSection>

        <MServices>
            <MContainer>
                <MSCard id={'full-stack-dev'}>
                    <MSTitle>Full Stack</MSTitle>
                    <FSImg role="img" alt="Full Stack Development" />
                    <MSActions>
                        {/* <a href="/case-studies" className="viewstudies">View case studies</a> */}
                        <a href="#"
                            className="collapse-button"
                            onClick={(e) => {e.preventDefault(), showDetails(1)}}
                        >
                            {isCollapsed == 1 ? 'Hide' : 'View'} details
                        </a>
                    </MSActions>
                    <div className={`collapse-content ${isCollapsed == 1 ? 'expanded' : 'collapsed'}`} aria-expanded={isCollapsed}>
                        <h3>Front-End Development</h3> 
                        <ul>
                            <li><strong>UI/UX app development</strong> - Development of user interfaces and user experiences for data-driven, highly scalable online applications.</li>
                            <li><strong>Front-end design and architecture</strong> - We’re leveraging a collection of tools and methods aimed at improving the quality of front-end code, to create efficient and long-lasting apps.</li>
                            <li><strong>PWA development</strong> - Progressive web app development for the perfect combination between native mobile apps and websites.</li>
                        </ul>
                        <br />
                        <h3>Back-End Development</h3>
                        <ul>
                            <li><strong>Web/Mobile app development</strong> - As experts in B2B mobile and web back-end applications, we professionally develop native iOS and Android applications as well as hybrid and cross-platform ones.</li>
                            <li><strong>Cloud Back-end Solutions</strong> - We've developed enough cloud-based back-end systems that can handle high loads, process large amounts of data, and scale up and down without experiencing any latency concerns.</li>
                        </ul>
                    </div>
                </MSCard>
                
                <MSCard id={'mobile-dev'}>
                    <MSTitle>Mobile Development</MSTitle>
                    <MDImg role="img" alt="Mobile Development" />
                    <MSActions>
                        {/* <a href="/case-studies" className="viewstudies">View case studies</a> */}
                        <a href=""
                            className="collapse-button"
                            onClick={(e) => {e.preventDefault(), showDetails(2)}}
                        >
                            {isCollapsed == 2 ? 'Hide' : 'View'} details
                        </a>
                    </MSActions>
                    <div className={`collapse-content ${isCollapsed == 2 ? 'expanded' : 'collapsed'}`} aria-expanded={isCollapsed}>
                        <h3>Mobile Development</h3> 
                        <p>We provide scalable applications and full-cycle development services for both iOS and Android, in addition to cross-platform apps that make use of the native capabilities of the supported platforms.</p>
                    </div>
                </MSCard>
                
                <MSCard id={'web3-dev'}>
                    <MSTitle>Blockchain Development</MSTitle>
                    <WBImg role="img" alt="Blockchain Development" />
                    <MSActions>
                        {/* <a href="/case-studies" className="viewstudies">View case studies</a> */}
                        <a href=""
                            className="collapse-button"
                            onClick={(e) => {e.preventDefault(), showDetails(3)}}
                        >
                            {isCollapsed == 3 ? 'Hide' : 'View'} details
                        </a>
                    </MSActions>
                    <div className={`collapse-content ${isCollapsed == 3 ? 'expanded' : 'collapsed'}`} aria-expanded={isCollapsed}>
                        <h3>Blockchain Development</h3> 
                        <p>Need powerful solutions that will increase security and speed up the exchange of information in a way that is cost-effective and more transparent? We can help you with high-tech web3 development.</p>
                    </div>
                </MSCard>
                
                <MSCard id={'qa-app'}>
                    <MSTitle>QA and App Testing</MSTitle>
                    <QAImg role="img" alt="QA APP Testing" />
                    <MSActions>
                        {/* <a href="/case-studies" className="viewstudies">View case studies</a> */}
                        <a href=""
                            className="collapse-button"
                            onClick={(e) => {e.preventDefault(), showDetails(4)}}
                        >
                            {isCollapsed == 4 ? 'Hide' : 'View'} details
                        </a>
                    </MSActions>
                    <div className={`collapse-content ${isCollapsed == 4 ? 'expanded' : 'collapsed'}`} aria-expanded={isCollapsed}>
                        <h3>QA and App Testing</h3> 
                        <p>We've got you taken care of! If you use our testing solutions, your apps will always have the greatest possible degree of quality.</p>

                        <p>Starting from the very first day, this is a never-ending process. Our team puts in a lot of effort to ensure that every application that we collaborate on is of high quality. All stages of a project's life cycle may benefit from our testing services, from requirements gathering to bug fixing.</p>
                    </div>
                </MSCard>
            </MContainer>
        </MServices>
        </>
    )

}

export default FullStack