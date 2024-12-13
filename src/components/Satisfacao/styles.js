import styled from 'styled-components';

export const Container = styled.section`
  text-align: center;
  padding: 3rem; /* Aumentado para um espaçamento mais generoso */
  background-color: #f9f9f9;
  border-radius: 10px; /* Bordas mais arredondadas para um visual mais suave */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra para destacar o container */
`;

export const Heading = styled.h3`
  font-size: 2.5rem; /* Aumento do tamanho do título */
  font-weight: 700;
  color: #1f3c73;
  margin-bottom: 2rem; /* Maior espaçamento entre o título e a imagem */
  text-transform: uppercase; /* Transformação em maiúsculas para destacar */
`;

export const Image = styled.img`
  max-width: 180px; /* Aumentado o tamanho da imagem para mais visibilidade */
  margin-bottom: 2rem;
`;

export const Text = styled.p`
  font-size: 1.4rem; /* Aumento do tamanho da fonte para maior legibilidade */
  color: #333;
  line-height: 1.6; /* Aumento do espaçamento entre as linhas para facilitar a leitura */
  margin-bottom: 2rem; /* Aumento do espaçamento entre o texto e o botão */
  max-width: 600px; /* Limite de largura para garantir que o texto não fique muito largo */
  margin-left: auto; /* Centralização do texto */
  margin-right: auto;
`;

export const Button = styled.button`
  background-color: #ff5e00;
  color: white;
  font-size: 1.4rem; /* Aumento da fonte do botão */
  padding: 1.2rem 2.5rem; /* Aumento no padding para um botão mais destacado */
  border: none;
  border-radius: 8px; /* Bordas mais arredondadas */
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  
  &:hover {
    background-color: #d94d00;
    transform: scale(1.05); /* Aumento de escala no hover para chamar atenção */
  }
`;

