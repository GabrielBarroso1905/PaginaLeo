import React from 'react';
import * as Styled from './styles'; // Seus estilos já definidos

const SatisfactionGuarantee = () => {
  return (
    <Styled.Container>
      <Styled.Heading>Satisfação Garantida</Styled.Heading>
      
      {/* Imagem do selo de satisfação */}
      <Styled.Image src="beneficios/7.png" alt="Selo de Satisfação Garantida" />

      <Styled.Text>
        Sabemos da qualidade do nosso KIT INTERPRETAR PARA EVOLUIR, e por este motivo liberamos a garantia de 7 dias!
        Se neste período você utilizar o nosso material e não gostar, basta entrar em contato para pedir o reembolso de 100% do valor investido!
      </Styled.Text>

      <Styled.Button>
        Testar por 7 dias!
      </Styled.Button>
    </Styled.Container>
  );
};

export default SatisfactionGuarantee;
