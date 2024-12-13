import styled from 'styled-components';

export const PageWrapper = styled.div`
  font-family: 'Poppins', sans-serif;
  color: #333;
  background-color: #f8f9fa;
`;

export const Header = styled.header`
  background: linear-gradient(135deg, #003566, #00b4d8);
  color: white;
  text-align: center;
  padding: 3rem 2rem;
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const Subtitle = styled.p`
  font-size: 1.5rem;
  margin: 1.5rem 0;
  line-height: 1.8;
`;

export const Content = styled.div`
  padding: 3rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const BenefitsSection = styled.section`
  margin-bottom: 3rem;
  padding: 2rem;
  border-radius: 12px;
  background: #fafafa;

`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  color: #2c3e50;
  font-weight: 600;
`;

export const BenefitsList = styled.div`
  ul {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 0;
    list-style: none;
    margin: 0 auto;
    max-width: 800px;
  }

  li {
    background: #ffffff;
    padding: 1.5rem;
    border-radius: 8px;
    border: 1px solid #e6e6e6;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    transition: transform 0.2s ease-in-out;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    }

    strong {
      display: block;
      font-size: 1.2rem;
      color: #34495e;
      margin-bottom: 0.5rem;
    }

    span {
      font-size: 1rem;
      color: #7f8c8d;
    }
  }
`;
export const BonusSection = styled.section`
  background: linear-gradient(135deg, #f3fbff, #e6f7ff);
  padding: 3rem 2rem;
  border-radius: 12px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  margin-bottom: 3rem;
`;

export const BonusTitle = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  color: #003566;
  text-align: center;
  margin-bottom: 2rem;
`;

export const BonusList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  li {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    background: #ffffff;
    padding: 1.5rem;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    transition: transform 0.2s ease-in-out;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
    }

    strong {
      font-size: 1.4rem;
      color: #34495e;
    }

    p {
      font-size: 1.5rem;
      color: #7f8c8d;
      margin: 0;
    }
  }
`;

export const BonusIcon = styled.span`
  font-size: 2rem;
  color: #00b4d8;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Footer = styled.footer`
  background: #003566;
  color: white;
  text-align: center;
  padding: 3rem 2rem;
`;

export const FinalCall = styled.p`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
`;

export const PurchaseButton = styled.button`
  background: #00b4d8;
  color: white;
  padding: 1rem 2.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s, transform 0.3s;
  &:hover {
    background: #00509e;
    transform: scale(1.1);
  }
`;
