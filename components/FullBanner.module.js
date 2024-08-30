import { Container } from "./styles/Container.styled";
import { FBSection } from "./styles/Fullbanner.styled";

import Heroimage from "../public/images/meet-us/devx-digital-meet-us.svg";
import MHeroimage from "../public/images/meet-us/we-are-devx-mobile.svg";

const FullBanner = ({title, image}) => {
    return (
        <FBSection>
            <Container className="MContainer">
                <h1>{title}</h1>
                <div className="desktop">{image == "meetus" && <Heroimage role="img" alt="Discover the Talent Behind Our Success" />}</div>
                <div className="mobile">{image == "meetus" && <MHeroimage role="img" alt="Discover the Talent Behind Our Success" />}</div>
            </Container>
        </FBSection>
    )
}

export default FullBanner