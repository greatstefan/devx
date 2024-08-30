import { StyledHeader, Nav, Logo, Menu, Link } from './styles/Header.styled';
import { Container } from './styles/Container.styled';
import Navbar from './Navbar.module';

function Header(canonicalUrl) {
  return (
    <StyledHeader canonicalUrl={canonicalUrl}>
      <Container> 
        <Navbar />
      </Container>
    </StyledHeader>
  )
} 
export default Header