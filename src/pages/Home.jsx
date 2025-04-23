import { useState } from 'react';
import styled from 'styled-components';
import { Container, Section, Flex, Title, Text } from '../components/Layout';
import Button from '../components/Button';

const HeroSection = styled(Section)`
  min-height: 80vh;
  display: flex;
  align-items: center;
`;

const ImageContainer = styled.div`
  flex: 1;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    margin-bottom: ${props => props.theme.spacing.lg};
  }
`;

const HeroImage = styled.img`
  max-width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;

const ContentContainer = styled.div`
  flex: 1;
  padding: ${props => props.theme.spacing.lg};
`;

const Slogan = styled.h2`
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fonts.heading};
  margin-bottom: ${props => props.theme.spacing.md};
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: ${props => props.theme.fonts.subheading};
  }
`;

const Description = styled.div`
  margin-top: ${props => props.theme.spacing.lg};
  padding: ${props => props.theme.spacing.md};
  background-color: ${props => props.theme.colors.dark};
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
`;

const VideoContainer = styled.div`
  margin-top: ${props => props.theme.spacing.xl};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Video = styled.iframe`
  width: 100%;
  height: 400px;
  border-radius: 8px;
  margin-top: ${props => props.theme.spacing.md};
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    height: 250px;
  }
`;

const ButtonContainer = styled.div`
  margin-top: ${props => props.theme.spacing.lg};
`;

const Home = () => {
  const [showDescription, setShowDescription] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  
  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };
  
  const toggleVideo = () => {
    setShowVideo(!showVideo);
  };
  
  return (
    <Container>
      <HeroSection>
        <Flex mobileDirection="column">
          <ImageContainer>
            <HeroImage 
              src="/images/goku.webp" 
              alt="Dragon Ball Heroes" 
            />
          </ImageContainer>
          
          <ContentContainer>
            <Slogan>Descubra o universo de Dragon Ball</Slogan>
            <Text>
              Bem-vindo ao mundo de Dragon Ball, onde guerreiros poderosos lutam para proteger a Terra e o universo.
              Explore os personagens icônicos desta série lendária.
            </Text>
            
            <ButtonContainer>
              <Button primary onClick={toggleDescription}>
                {showDescription ? 'Ocultar Descrição' : 'Mostrar Descrição'}
              </Button>
            </ButtonContainer>
            
            {showDescription && (
              <Description>
                <Text>
                  Dragon Ball é uma franquia de mídia japonesa criada por Akira Toriyama. A série segue as aventuras de Son Goku desde sua infância até a idade adulta enquanto ele treina artes marciais e explora o mundo em busca das sete esferas do dragão, que são usadas para invocar um dragão que realiza desejos.
                </Text>
                <Text>
                  Ao longo de sua jornada, Goku faz muitos amigos e enfrenta inúmeros vilões, muitos dos quais também buscam as esferas do dragão. A série é conhecida por suas sequências de luta bem coreografadas, que empregam técnicas de artes marciais e energia sobrenatural.
                </Text>
              </Description>
            )}
          </ContentContainer>
        </Flex>
      </HeroSection>
      
      <VideoContainer>
        <Button onClick={toggleVideo}>
          {showVideo ? 'Ocultar Vídeo' : 'Assistir Vídeo'}
        </Button>
        
        {showVideo && (
          <Video 
            src="https://www.youtube.com/embed/k1hp5Feb1VM" 
            title="Dragon Ball Trailer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </VideoContainer>
    </Container>
  );
};

export default Home;
