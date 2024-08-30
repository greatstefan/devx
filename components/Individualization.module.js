import { Container, Flex } from "./styles/Container.styled"
import { ISection, Col } from "./styles/Individualization.styled"
import StartDate from '../public/images/wedoit/start_end.svg';
import Milestone from '../public/images/wedoit/milestones.svg';
import ProjectLifecycle from '../public/images/wedoit/project_lifecycle.svg';

const Individualization = () => {
    return (
        <ISection>
            <h2>Individualization <br />For Every Project</h2>

            <Container>
                <Flex>
                    <Col>
                        <StartDate />
                        <p>Start/end dates</p>
                        <span>The project&apos;s beginning and ending dates are being mutually agreed upon, depending on different factors including the complexity of the work and the availability of personnel and other resources.</span>
                    </Col>
                    <Col>
                        <Milestone />
                        <p>Milestones and deadlines</p>
                        <span>Will be agreed upon based on the project&apos;s specifications. Can we add some text here to follow the same dimesnion as we have on the left/right?</span>
                    </Col>
                    <Col>
                        <ProjectLifecycle />
                        <p>Project lifecycle phases</p>
                        <span>The phases of a project&apos;s life cycle will remain mostly unchanged. Their duration will just depend on each project.</span>
                    </Col>
                </Flex>
            </Container>
        </ISection>
    )
}

export default Individualization