import styled, { css } from 'styled-components';
import { Title } from '../Heading/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 2fr 1fr;
    /* align-items: center; */
    gap: ${theme.spacings.xsmall};
    /* max-width: 900px; */
    @media ${theme.media.lteMedium} {
      grid-template-columns: 1fr;
      text-align: center;
      
    }

    ${Title} {
      margin-bottom: ${theme.spacings.xlarge};
      
    }
  `}
`;



export const TextContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center; 
    /* justify-content: center; */
    margin-bottom: ${theme.spacings.large};
    height: 100%; 

    @media ${theme.media.lteMedium} {
      margin-bottom: ${theme.spacings.large};

    }
  `}
`;


export const ImageContainer = styled.div`
  ${({ theme }) => css``}
    width: 100%;
     align-items: center;
`;

export const Image = styled.img`
  ${({ theme }) => css`
    width: 100%;
    border-radius: 100px;
   
  `}
`;
export const Fundo = styled.img`
  ${({ theme }) => css`
  position: absolute;
  top: 0;
  left: 0;
  width: 90%; /* Defina o tamanho desejado para o fundo */
  height: 90%; /* Defina o tamanho desejado para o fundo */
  z-index: -1; /* Coloca o fundo atrás do restante do conteúdo */
  `}
`;


export const DiscountText = styled.p`
  ${({ theme }) => css`
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: ${theme.spacings.small}; /* Espaçamento entre o texto e o botão */
    text-align: center;

    /* Estilo para o valor original riscado */
    .old-price {
      text-decoration: line-through;
      /* font-size: 18px; */
      color: ${theme.colors.gray};
    }

    /* Estilo para o valor atual, não riscado */
    .new-price {
      
      font-size: 30px;
      font-weight: bold;
      position: relative;
      /* top: -5px; */
      
    }
  `}
`;

export const Btn = styled.button`
  ${({ theme, colorDark }) => css`
    background-color: ${colorDark ? theme.colors.white : theme.colors.primaryColor};
    color: ${colorDark ? theme.colors.primaryColor : theme.colors.white};
    margin:  10px 0 0; /* Adiciona espaço acima do botão */
    padding: 28px 88px;
    border: none;
    border-radius: 50px;
    font-weight: bold;
    font-size: 20px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: ${theme.colors.secondaryColor};
      color: ${theme.colors.white};
      cursor: pointer;
    }
  `}
`;
