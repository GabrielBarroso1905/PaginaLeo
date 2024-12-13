import styled from 'styled-components';

export const Container = styled.section`
  background-color: #f1f8fe;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`;

export const Heading = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #1f3c73;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0 auto;
  margin-bottom: 2rem;
  width: 80%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ListItem = styled.li`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &:before {
    content: "✔";
    color: #0f9b8e;
    margin-right: 10px;
    font-size: 1.5rem;
  }
`;

export const Price = styled.div`
  margin-bottom: 2rem;
`;

export const OriginalPrice = styled.p`
  font-size: 1.5rem;
  text-decoration: line-through;
  color: #999;
  font-weight: bold;
`;

export const DiscountedPrice = styled.p`
  font-size: 2.5rem;
  font-weight: 900;
  color: #ff5e00;
  margin-top: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  letter-spacing: 1px;
`;

export const OfferText = styled.p`
  font-size: 1.5rem;
  color: #1f3c73;
  font-weight: bold;
`;

export const UrgencyText = styled.p`
  font-size: 2rem;
  color: #ff5e00;
  font-weight: bold;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

export const Button = styled.button`
  background-color: #ff5e00;
  color: white;
  font-size: 1.5rem;
  padding: 1.5rem 3rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #d94d00;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(1);
  }
`;
