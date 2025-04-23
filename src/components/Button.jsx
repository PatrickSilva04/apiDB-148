import styled from 'styled-components';

const Button = styled.button`
  background-color: ${props => props.primary ? props.theme.colors.primary : props.theme.colors.secondary};
  color: ${props => props.theme.colors.text};
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  border-radius: 4px;
  font-size: ${props => props.theme.fonts.regular};
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: ${props => props.theme.fonts.small};
    padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
  }
`;

export default Button;
