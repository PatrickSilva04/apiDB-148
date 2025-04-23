import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: ${props => props.theme.spacing.md};
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: ${props => props.theme.spacing.sm};
  }
`;

const Section = styled.section`
  margin: ${props => props.theme.spacing.xl} 0;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justify || 'flex-start'};
  align-items: ${props => props.align || 'stretch'};
  gap: ${props => props.gap || props.theme.spacing.md};
  flex-wrap: ${props => props.wrap || 'nowrap'};
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    flex-direction: ${props => props.mobileDirection || 'column'};
  }
`;

const Card = styled.div`
  background-color: ${props => props.theme.colors.dark};
  border-radius: 8px;
  padding: ${props => props.theme.spacing.md};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fonts.heading};
  margin-bottom: ${props => props.theme.spacing.md};
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: ${props => props.theme.fonts.subheading};
  }
`;

const Text = styled.p`
  color: ${props => props.theme.colors.textSecondary};
  font-size: ${props => props.theme.fonts.regular};
  line-height: 1.5;
  margin-bottom: ${props => props.theme.spacing.md};
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: ${props => props.theme.fonts.small};
  }
`;

export { Container, Section, Flex, Card, Title, Text };
