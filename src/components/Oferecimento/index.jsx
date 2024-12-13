import React from 'react';
import * as Styled from './styles';
import { Heading } from '../Heading';
import { SectionBackground } from '../SectionBackground';

const ProductOffer = () => {
  return (
    <SectionBackground background={true} sectionId="product-offer">
      <Styled.Container>
        <Heading as="h2" colorDark={true}>
          Aproveite a oferta imperdível!
        </Heading>

        <Styled.List>
          <Styled.ListItem>📚 KIT INTERPRETAR PARA EVOLUIR com 6 cadernos</Styled.ListItem>
          <Styled.ListItem>🎴 Bônus 1: CARDS INTERPRETANDO TEXTINHOS</Styled.ListItem>
          <Styled.ListItem>📖 Bônus 2: CADERNO INTERPRETANDO TEXTINHOS + CADERNO DE CALIGRAFIA</Styled.ListItem>
          <Styled.ListItem>📒 Bônus 3: CADERNO INTERPRETANDO TEXTINHOS 2</Styled.ListItem>
          <Styled.ListItem>📝 Bônus 4: FICHAS DE DITADO</Styled.ListItem>
          <Styled.ListItem>🎨 Bônus 5: DESENHOS PARA COLORIR</Styled.ListItem>
          <Styled.ListItem>🔠 Bônus 6: CAÇA PALAVRAS SILÁBICO</Styled.ListItem>
        </Styled.List>

        <Styled.Price>
          <Styled.OriginalPrice>De R$ 97,00 por apenas 6x</Styled.OriginalPrice>
          <Styled.DiscountedPrice>R$ 8,64</Styled.DiscountedPrice>
          <Styled.OfferText>Ou R$ 47,00 à vista</Styled.OfferText>
        </Styled.Price>

        <Styled.UrgencyText>
          <strong>🔥 Só hoje! 🔥</strong>
        </Styled.UrgencyText>

        <Styled.Button>
          ✨ Adquira agora e dê ao seu filho o apoio que ele precisa!
        </Styled.Button>
      </Styled.Container>
    </SectionBackground>
  );
};

export default ProductOffer;
