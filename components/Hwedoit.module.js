import { Container, Flex } from './styles/Container.styled';
import { Wedoit, Left, Middle, Right, TimeLapse, HWMobileSection, Block, Top, Bottom } from './styles/Wedoit.styled';
import MiddleLine from '../public/images/our_services_timetable.svg';
import Engagement from '../public/images/wedoit/engagement_phase.svg';
import Planning from '../public/images/wedoit/Planning.svg';
import Development from '../public/images/wedoit/Dev_Test.svg';
import Analysis from '../public/images/wedoit/Analysis.svg';
import Deploy from '../public/images/wedoit/Deploy.svg';


import TLAnalysis from '../public/images/wedoit/analysis-devx.svg';
import TLDeployment from '../public/images/wedoit/deployment-devx.svg';
import TLDevelopment from '../public/images/wedoit/development-testing-devx.svg';
import TLEngagement from '../public/images/wedoit/engagement-phase-devx.svg';
import TLPlanning from '../public/images/wedoit/planning-devx.svg';
import Rocket from '../public/images/wedoit/rocket.svg';
import Humans from '../public/images/wedoit/humans.svg';
import Paper from '../public/images/wedoit/paper.svg';
import Circle from '../public/images/wedoit/circle.svg';
import Search from '../public/images/wedoit/search.svg';


const Hwedoit = () => {
    return (
    <Wedoit>
        <Container>
            <h2>How We Do It</h2>

            <Flex className="desktop">
                <Left> 
                    <TimeLapse className="flex-right">
                        <Engagement />
                        <span>1.</span>
                        <h4>Engagement phase</h4>
                        <p>It's essential to correctly create the time estimates. We’ll work with you to understand your needs and outcomes and to formalize your requirements, based on which we will determine high-level cost of development.</p>
                    </TimeLapse>
                    <TimeLapse className="flex-right">
                        <Analysis />
                        <span>3.</span>
                        <h4>Analysis</h4>
                        <p>During this phase we ensure to prioritize the features and specifications for the application that must be in use to succeed.</p>
                    </TimeLapse>
                    <TimeLapse className="flex-right">
                        <Deploy />
                        <span>5.</span>
                        <h4>Deployment</h4>
                        <p>This is the final phase of our timeline. During this phase, the final product is delivered to the client in a fully functional production setting.</p>
                    </TimeLapse>
                </Left>
                <Middle className="flex-center"><MiddleLine /></Middle>
                <Right>
                    <TimeLapse className="mtb-16">
                        <Planning />
                        <span>2.</span>
                        <h4>Planning</h4>
                        <p>At this phase, we’ll define the project's scope and architecture and obtain consensus from all stakeholders, reviewing the app design.</p>
                    </TimeLapse>
                    <TimeLapse>
                        <Development />
                        <span>4.</span>
                        <h4>Development & Testing</h4>
                        <p>The development & testing timing will vary depending on the methods used, the software&apos;s complexity, the delivered features, and their importance. We adjust our methods to suit of our customer&apos;s needs.</p> 
                    </TimeLapse>
                </Right>
            </Flex>

            <HWMobileSection className="mobile">
                <Block>
                    <Top className="TLEngagement">
                        <TLEngagement />
                        <div>
                            <Humans />
                            <span>1.</span>
                        </div>
                    </Top>
                    <Bottom className="align-right">
                        <h4>Engagement Phase</h4>
                        <p>It's essential to correctly create and deliver the time estimates. We’ll apply a rate to anticipated hours to determine the overall, high-level cost of development.</p>
                    </Bottom>
                </Block>

                <Block>
                    <Top className="TLPlanning">
                        <TLPlanning />
                        <div>
                            <Paper />
                            <span>2.</span>
                        </div>
                    </Top>
                    <Bottom className="align-left">
                        <h4>Planning</h4>
                        <p>At this phase, we’ll define the project's scope and obtain consensus from all stakeholders. These are the main steps of the planning phase. Capture the demand and formalize the requirements.</p>
                    </Bottom>
                </Block>

                <Block>
                    <Top className="TLDevelopment">
                        <TLDevelopment />
                        <div>
                            <Circle />
                            <span>3.</span>
                        </div>
                    </Top>
                    <Bottom className="align-right">
                        <h4>Development & Testing</h4>
                        <p>At this phase, we’ll define the project's scope and obtain consensus from all stakeholders. These are the main steps of the planning phase. Capture the demand and formalize the requirements.</p>
                    </Bottom>
                </Block>

                <Block>
                    <Top className="TLAnalysis">
                        <TLAnalysis />
                        <div>
                            <Search />
                            <span>4.</span>
                        </div>
                    </Top>
                    <Bottom className="align-left">
                        <h4>Analysis</h4>
                        <p>During this phase we ensure to prioritize the features and specifications for the software that must be in use to succeed.</p>
                    </Bottom>
                </Block>

                <Block>
                    <Top className="TLDeployment">
                        <TLDeployment />
                        <div>
                            <Rocket />
                            <span>5.</span>
                        </div>
                    </Top>
                    <Bottom className="align-right">
                        <h4>Deployment</h4>
                        <p>This is the final phase of our timeline. During this phase, the final product is delivered to the client in a fully functional production setting.</p>
                    </Bottom>
                </Block>
            </HWMobileSection>
        </Container>
    </Wedoit>
    )
}

export default Hwedoit