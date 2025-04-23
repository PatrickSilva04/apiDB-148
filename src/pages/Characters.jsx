import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Container, Section, Flex, Card, Title, Text } from '../components/Layout';
import { getCharacters } from '../services/api';
import Button from '../components/Button';

const CharacterImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
`;

const CharacterCard = styled(Card)`
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const CharacterInfo = styled.div`
  padding: ${props => props.theme.spacing.md};
`;

const CharacterName = styled.h3`
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fonts.subheading};
  margin-bottom: ${props => props.theme.spacing.sm};
`;

const CharacterDetail = styled.p`
  color: ${props => props.theme.colors.textSecondary};
  font-size: ${props => props.theme.fonts.small};
  margin-bottom: ${props => props.theme.spacing.xs};
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: ${props => props.theme.spacing.sm};
  margin-top: ${props => props.theme.spacing.xl};
`;

const PageButton = styled.button`
  background-color: ${props => props.active ? props.theme.colors.primary : props.theme.colors.dark};
  color: ${props => props.theme.colors.text};
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 4px;
  padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
  cursor: pointer;
  
  &:hover {
    background-color: ${props => props.theme.colors.primary};
  }
`;

const ErrorMessage = styled.div`
  background-color: ${props => props.theme.colors.error};
  color: ${props => props.theme.colors.text};
  padding: ${props => props.theme.spacing.md};
  border-radius: 8px;
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  
  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        setLoading(true);
        const data = await getCharacters(currentPage);
        setCharacters(data.characters);
        setTotalPages(data.totalPages);
        setLoading(false);
      } catch (err) {
        console.error('Erro ao carregar personagens:', err);
        setError('Erro ao carregar personagens. Tente novamente mais tarde.');
        setLoading(false);
      }
    };
    
    fetchCharacters();
  }, [currentPage]);
  
  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };
  
  return (
    <Container>
      <Section>
        <Title>Personagens de Dragon Ball</Title>
        
        {loading && <Text>Carregando personagens...</Text>}
        
        {error && (
          <ErrorMessage>
            <Text>{error}</Text>
          </ErrorMessage>
        )}
        
        {!loading && !error && (
          <>
            <Flex wrap="wrap" gap="20px">
              {characters.map((character) => (
                <CharacterCard key={character.id}>
                  <CharacterImage src={character.image} alt={character.name} />
                  <CharacterInfo>
                    <CharacterName>{character.name}</CharacterName>
                    <CharacterDetail><strong>Raça:</strong> {character.race || 'Desconhecida'}</CharacterDetail>
                    <CharacterDetail><strong>Status:</strong> {character.affiliation || 'Desconhecido'}</CharacterDetail>
                    <CharacterDetail><strong>Gênero:</strong> {character.gender || 'Desconhecido'}</CharacterDetail>
                    <CharacterDetail><strong>Ki:</strong> {character.ki || 'Desconhecido'}</CharacterDetail>
                  </CharacterInfo>
                </CharacterCard>
              ))}
            </Flex>
            
            <Pagination>
              {currentPage > 1 && (
                <PageButton onClick={() => handlePageChange(currentPage - 1)}>
                  Anterior
                </PageButton>
              )}
              
              {[...Array(totalPages).keys()].map((page) => (
                <PageButton 
                  key={page + 1}
                  active={currentPage === page + 1}
                  onClick={() => handlePageChange(page + 1)}
                >
                  {page + 1}
                </PageButton>
              ))}
              
              {currentPage < totalPages && (
                <PageButton onClick={() => handlePageChange(currentPage + 1)}>
                  Próximo
                </PageButton>
              )}
            </Pagination>
          </>
        )}
      </Section>
    </Container>
  );
};

export default Characters;
