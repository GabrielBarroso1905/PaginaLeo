import styled from 'styled-components';

export const Container = styled.div`

  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;
export const TextContainer = styled.div`
text-align: center;
`;

export const Content = styled.div`
  .benefit {
    display: flex;
    align-items: flex-start;
    background-color: #fff;
    margin-bottom: 20px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    img {
      width: 120px;
      height: 120px;
      margin-top: 20px;
      margin-right: 20px;
    }

    .benefit-title {
      color: #e60000;
      font-size: 20px;
      font-weight: bold;
    }

    p {
      font-size: 20px;
      line-height: 1.5;
      color: #333;
    }

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      text-align: center;

      img {
        margin: 0 0 10px;
      }

      p,
      .benefit-title {
        text-align: center;
      }
    }
  }

  .main-title {
    color: #0066cc;
    font-size: 32px;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      font-size: 24px;
    }
  }

  /* Adiciona o contêiner centralizado para o botão */
  .button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px; /* Espaço superior para separação */
  }
`;

export const Button = styled.button`
  background-color: #fdcb00ff;
  color: #000000FF;
  padding: 25px 40px;
  border: none;
  border-radius: 30px;
  font-weight: bold;
  font-size: 35px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff5e00ff;
    color: #ffffff;
    cursor: pointer;
  }

  @media (max-width: 480px) {
    padding: 10px 20px;
    font-size: 18px;
  }
`;
