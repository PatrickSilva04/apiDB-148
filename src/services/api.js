import axios from 'axios';

// API do DragonBall
const api = axios.create({
  baseURL: 'https://dragonball-api.com/api'
});

// Função para buscar todos os personagens com paginação
export const getCharacters = async (page = 1, limit = 10) => {
  try {
    // Consumindo a API correta com os parâmetros de paginação
    const response = await api.get(`/characters?page=${page}&limit=${limit}`);
    
    return {
      characters: response.data.items,
      totalPages: response.data.meta.totalPages,
      currentPage: response.data.meta.currentPage
    };
  } catch (error) {
    console.error('Erro ao buscar personagens da API:', error);
    throw error;
  }
};

// Função para buscar um personagem específico pelo ID
export const getCharacterById = async (id) => {
  try {
    const response = await api.get(`/characters/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao buscar personagem com ID ${id}:`, error);
    throw error;
  }
};
