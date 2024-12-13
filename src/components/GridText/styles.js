import styled, { css } from 'styled-components';
import { Title as HeadingContainer } from '../Heading/styles';
import { Container as TextComponent } from '../TextComponent/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    /* height: 100vh; Faz o contêiner ocupar a altura total da tela */
    width: 100%;
    
    ${TextComponent} {
      margin-bottom: ${theme.spacings.xhuge};
    }
  `}
`;

export const Grid = styled.div`
  ${({ theme }) => css`
    counter-reset: grid-counter;
    display: grid;
    grid-template-columns: repeat(auto-fill);
    gap: ${theme.spacings.large};
    width: 100%;
    justify-items: center; /* Alinha os elementos do grid no centro */
    align-items: center; /* Alinha verticalmente os itens */
    overflow: hidden;

    @media ${theme.media.lteMedium} {
      grid-template-columns: 1fr;
    }
  `}
`;

export const GridElement = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center; /* Centraliza os itens dentro do card */
    justify-content: center; /* Centraliza o conteúdo verticalmente */
    text-align: center;
    background-color: ${theme.colors.white};
    padding: 20px;
    border-radius: 10px;
    box-shadow:  4px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, box-shadow 0.3s;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 15px rgba(0, 0, 0, 0.15);
    }

    ${HeadingContainer} {
      position: relative;
      left: 0;
    }

    ${HeadingContainer}::before {
      counter-increment: grid-counter;
      content: counter(grid-counter);
      position: absolute;
      font-size: 7rem;
      top: -3rem;
      left: -5rem;
      transform: rotate(5deg);
    }
  `}
`;
