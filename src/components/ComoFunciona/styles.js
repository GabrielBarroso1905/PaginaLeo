import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  padding: 3rem;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  justify-content: center;
  margin-top: 3rem;
`;

export const Card = styled.div`
  flex: 1;
  max-width: 350px;
  background-color: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    margin-bottom: 1.5rem;
  }

  h3 {
    font-size: 1.7rem;
    font-weight: bold;
    color: #222;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.6rem;
    line-height: 1.6;
    color: #555;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
  }
`;

export const Button = styled.button`
  margin-top: 3rem;
  background-color: #ff9800; /* Botão mais chamativo */
  color: #fff;
  border: none;
  padding: 2.2rem 4rem;
  font-size: 1.9rem;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #e68900;
    transform: scale(1.05);
  }
`;
