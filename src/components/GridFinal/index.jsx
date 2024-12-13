import React from 'react';
import * as Styled from './styles';

export const FinalSalesPage = () => {
  return (
    <Styled.PageWrapper>
      <Styled.Header>
        <Styled.Title>Aproveite Agora e Transforme o Aprendizado do Seu Filho!</Styled.Title>
        <Styled.Subtitle>
          Descubra como o nosso Método Lúdico de Interpretação pode revolucionar a forma como seu filho aprende e interage com o mundo ao seu redor.
          Ao adquirir nossos Cadernos de Interpretação de Textos, você receberá:
        </Styled.Subtitle>
      </Styled.Header>

      <Styled.Content>
      <Styled.BenefitsSection>
  <Styled.SectionTitle>🎁 O Que Você Receberá:</Styled.SectionTitle>
  <Styled.BenefitsList>
    <ul>
      <li>
        <strong>📚 Materiais Divididos por Níveis:</strong> Adaptados à idade e maturidade do seu filho, garantindo uma jornada de aprendizado personalizada e eficaz.
      </li>
      <li>
        <strong>🎲 Abordagem Lúdica e Envolvente:</strong> Jogos, histórias e atividades interativas tornam a aprendizagem um momento mágico e divertido.
      </li>
      <li>
        <strong>✅ Alinhamento com o BNCC:</strong> Conteúdos em conformidade com as diretrizes educacionais, assegurando qualidade e relevância.
      </li>
      <li>
        <strong>🧠 Aprimoramento Cognitivo:</strong> Desenvolva habilidades críticas de compreensão e interpretação, ampliando o potencial do seu filho.
      </li>
      <li>
        <strong>✨ Eliminação da Desmotivação:</strong> Atividades criadas com carinho e criatividade mantêm a motivação do seu filho sempre em alta.
      </li>
      <li>
        <strong>🏆 Aumento Imediato no Desempenho Escolar:</strong> Resultados visíveis com o reforço das áreas mais desafiadoras.
      </li>
      <li>
        <strong>⏱️ Praticidade para os Pais:</strong> Atividades fáceis de aplicar, organizadas e planejadas para encaixar na sua rotina.
      </li>
    </ul>
  </Styled.BenefitsList>
</Styled.BenefitsSection>

<Styled.BonusSection>
  <Styled.BonusTitle>Bônus Exclusivos:</Styled.BonusTitle>
  <Styled.BonusList>
    <li>
      <Styled.BonusIcon>🎥</Styled.BonusIcon>
      <div>
        <strong>Acesso a Webinars Interativos:</strong>
        <p>Sessões ao vivo com especialistas, proporcionando estratégias adicionais e suporte.</p>
      </div>
    </li>
    <li>
      <Styled.BonusIcon>🌐</Styled.BonusIcon>
      <div>
        <strong>Grupo de Apoio Online:</strong>
        <p>Junte-se a outros pais e educadores para compartilhar experiências e dicas valiosas.</p>
      </div>
    </li>
    <li>
      <Styled.BonusIcon>📋</Styled.BonusIcon>
      <div>
        <strong>Material Complementar de Apoio:</strong>
        <p>Receba guias e checklists adicionais para maximizar a eficácia das atividades.</p>
      </div>
    </li>
  </Styled.BonusList>
</Styled.BonusSection>

      </Styled.Content>

      <Styled.Footer id="purchase">
        <Styled.FinalCall>
          Não perca essa oportunidade de enriquecer o processo educacional do seu filho e proporcionar a ele as ferramentas necessárias para um futuro brilhante.
        </Styled.FinalCall>
        <Styled.PurchaseButton>Garanta Agora</Styled.PurchaseButton>
      </Styled.Footer>
    </Styled.PageWrapper>
  );
};
