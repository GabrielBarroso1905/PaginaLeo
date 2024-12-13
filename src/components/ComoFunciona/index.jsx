import P from 'prop-types';
import { Heading } from '../Heading';
import { SectionBackground } from '../SectionBackground';
import * as Styled from './styles';

export const HowItWorks = ({
  background = false,
  sectionId = '',
}) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container>
        <Heading as="h2" colorDark={!background}>
          ✏️ COMO FUNCIONA?
        </Heading>
        <Styled.Content>
          <Styled.Card>
            <img src="comofunciona/1.png" alt="Método Interpretar PDF" />
            <h3>O MÉTODO INTERPRETAR PARA EVOLUIR CHEGA EM SEU E-MAIL EM FORMATO PDF</h3>
            <p>O conteúdo é 100% digital e chega em no máximo 5 minutinhos no seu e-mail!</p>
          </Styled.Card>
          <Styled.Card>
            <img src="comofunciona/2.png" alt="Impressão do Material" />
            <h3>VOCÊ IMPRIME DE ACORDO COM O NÍVEL DA SUA CRIANÇA</h3>
            <p>Você pode imprimir quantas vezes quiser ou precisar... O material é todo seu.</p>
          </Styled.Card>
          <Styled.Card>
            <img src="comofunciona/3.png" alt="Atividades com a Criança" />
            <h3>REALIZA AS ATIVIDADES COM A SUA CRIANÇA</h3>
            <p>De 15 a 30 minutos por dia! Realize as atividades na ordem que se encontra no material. A sua criança vai amar!</p>
          </Styled.Card>
        </Styled.Content>
        <Styled.Button>
          Clique aqui para dar ao seu filho o apoio que ele precisa para brilhar na escola!
        </Styled.Button>
      </Styled.Container>
    </SectionBackground>
  );
};

HowItWorks.propTypes = {
  background: P.bool,
  sectionId: P.string,
};
