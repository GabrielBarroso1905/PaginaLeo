import styled, { css } from 'styled-components';


export const Container = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xsmall};
    text-align: center;
  
  `}
`;
export const TextNowrap = styled.div`
  ${({ theme }) => css`
  white-space: nowrap; /* Impede quebra de linha */
  `}
`;

export const ServiceCards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Define 2 colunas de tamanhos iguais */
  gap: 20px; /* Espaçamento entre os cards */
  margin: 0 auto; /* Centraliza o container */
  justify-items: center; /* Centraliza os itens dentro das células */

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Layout de uma única coluna em telas menores */
  }
`;

export const ServiceCard = styled.div`
  ${({ theme, colorDark }) => css`
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 5px 5px;
    width: 500px;
    height: 400px;
    background-color: ${colorDark ? theme.colors.primaryColor : theme.colors.white};
    border-radius: 15px;
    border: none;
    margin: 12px 8px;
    transition: 0.3s all ease-in-out;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 15px rgba(0, 0, 0, 0.15);
    }
  `}

  > * {
    margin: 0px auto;
  }

  > h3 {
    margin-bottom: 16px; /* Espaçamento abaixo do título */
  }


`;

export const ServiceCardIcon = styled.div`
  ${({ theme,colorDark}) => css`
    display: flex;
    justify-content: center;
    width: 100px;
    height: 100px;
    margin: 12px auto;
    margin-bottom: 24px;
    border-radius: 50%;
    background-color: ${colorDark ?  theme.colors.white : theme.colors.primaryColor };
    transition: 0.1s all ease-in;
  `}
`;
export const IcoInsta = styled.div`
  ${({ theme, colorDark }) => css`
    color: ${colorDark ? theme.colors.primaryColor : theme.colors.white};
    margin: auto;
    font-size: 6rem;
    transition: color 0.3s ease;
  `}
`;
export const Text = styled.div`
  ${({ theme, colorDark }) => css`
    /* line-height: 21px; */
    color: ${colorDark ? theme.colors.white : theme.colors.primaryColor };
    width: 350px;
    /* height: 100px; */
    font-size: 20.6px;

    @media ${theme.media.lteMedium} {
      width: 100%; /* Usar 100% de largura em telas pequenas */
      height: auto; /* Ajustar altura automaticamente para o conteúdo */
    }
  `}
`;
export const Button = styled.button`
  ${({ theme, colorDark }) => css`
    margin-top: ${theme.spacings.small};
    padding: ${theme.spacings.xsmall} ${theme.spacings.medium};
    font-size: ${theme.font.sizes.medium};
    background-color: ${colorDark ? theme.colors.secondaryColor : theme.colors.primaryColor};
    color: ${theme.colors.white};
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: ${colorDark ? theme.colors.primaryColor : theme.colors.secondaryColor};
    }
  `}
`;

export const Btn = styled.button`
  ${({ theme, colorDark }) => css`
    background-color: #FDCB00FF; /* Fundo laranja */
    color: #FFFFFF; /* Texto branco */
    margin: 90px 0; /* Adiciona espaço acima do botão */
    padding: 40px 30px;
    border: none;
    border-radius: 30px;
    font-weight: bold;
    font-size: 25px;
    transition: background-color 0.3s ease;
    width: auto;
    max-width: 100%; /* Garante que o botão não ultrapasse a largura da tela */

    &:hover {
      background-color: #FF5E00FF; /* Tom mais escuro no hover */
      color: #FFFFFF; /* Mantém texto branco */
      cursor: pointer;
    }


    @media (max-width: 480px) {
      padding: 10px 5px;
      font-size: 18px;
      margin: 20px 0; /* Menor margem para dispositivos ainda menores */
    }
  `}
`;