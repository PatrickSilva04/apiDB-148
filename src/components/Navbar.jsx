import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${props => props.theme.spacing.md};
  background-color: ${props => props.theme.colors.dark};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Logo = styled.h1`
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fonts.heading};
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: ${props => props.theme.fonts.subheading};
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.md};
`;

const NavLink = styled(Link)`
  color: ${props => props.theme.colors.textSecondary};
  font-size: ${props => props.theme.fonts.regular};
  padding: ${props => props.theme.spacing.sm};
  transition: color 0.3s ease;
  
  &:hover, &.active {
    color: ${props => props.theme.colors.primary};
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: ${props => props.theme.fonts.small};
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo>DragonBall</Logo>
      <NavLinks>
        <NavLink to="/" className={window.location.pathname === '/' ? 'active' : ''}>
          Home
        </NavLink>
        <NavLink to="/characters" className={window.location.pathname === '/characters' ? 'active' : ''}>
          Personagens
        </NavLink>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
