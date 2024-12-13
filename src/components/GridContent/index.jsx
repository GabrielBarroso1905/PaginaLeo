import P from 'prop-types';
import { Heading } from '../Heading';
import { SectionBackground } from '../SectionBackground';
import { TextComponent } from '../TextComponent';
import * as Styled from './styles';

export const GridContent = ({
  background = false,
  sectionId = '',
}) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container>
        <Styled.TextContainer>
          <Heading colorDark={!background} as="h2" className="main-title">
            BENEFÍCIOS PARA A SUA CRIANÇA 🌟
          </Heading>
        </Styled.TextContainer>
        <Styled.Content>
          <div className="benefit">
            <img src="/beneficios/1.png" alt="Graduação" />
            <div>
              <h3 className="benefit-title">1. 🚀 QUEBRA DE BLOQUEIOS QUE ATRASAM EM TODAS AS DISCIPLINAS</h3>
              <p>Quando uma criança sente dificuldade na leitura, acaba sentindo dificuldade em todas as disciplinas! 📚</p>
            </div>
          </div>

          <div className="benefit">
            <img src="/beneficios/2.png" alt="Cérebro" />
            <div>
              <h3 className="benefit-title">2. 🧠 AUMENTO DA CAPACIDADE COGNITIVA</h3>
              <p>A leitura e interpretação interfere na compreensão do mundo! 🌍 Trabalhamos de forma a fortalecer a capacidade cognitiva e consequentemente a percepção do meio e elementos comunicativos.</p>
            </div>
          </div>

          <div className="benefit">
            <img src="/beneficios/3.png" alt="Foguete" />
            <div>
              <h3 className="benefit-title">3. 📖 NIVELAMENTO DE ACORDO COM O BNCC</h3>
              <p>Os nossos Cadernos de Interpretação de textos estão de acordo com as diretrizes do BNCC! ✅</p>
            </div>
          </div>

          <div className="benefit">
            <img src="/beneficios/4.png" alt="Aperto de Mão" />
            <div>
              <h3 className="benefit-title">4. ✨ FIM DA DESMOTIVAÇÃO NOS ESTUDOS</h3>
              <p>O seu filho vai se sentir motivado e feliz ao realizar as atividades dos nossos Cadernos! 🥳 Isso porque tudo foi desenvolvido com muito carinho! 💖</p>
            </div>
          </div>

          <div className="benefit">
            <img src="/beneficios/5.png" alt="Coruja" />
            <div>
              <h3 className="benefit-title">5. 🏆 AUMENTO DO DESEMPENHO ESCOLAR IMEDIATO</h3>
              <p>Realizando as atividades dos Cadernos de interpretação, a sua criança vai reforçar todos os pontos de falhas e fraquezas, acabando com as dificuldades escolares e aumentando consideravelmente o desempenho escolar IMEDIATO! 📈</p>
            </div>
          </div>

          <div className="benefit">
            <img src="/beneficios/6.png" alt="Curso Online" />
            <div>
              <h3 className="benefit-title">6. ✅ PRATICIDADE PARA A MAMÃE OU PAPAI</h3>
              <p>Pare de procurar atividades avulsas, sem cronograma, sem sequência. 🗂️ Com os CADERNOS DE INTERPRETAÇÃO você terá tudo em suas mãos, organizado e em sequência perfeita! Basta imprimir e realizar com a sua criança por 15 a 30 minutos diariamente. 🕒</p>
            </div>
          </div>

          <div className="button-container">
            <Styled.Button>✨ Clique aqui para dar o apoio que o seu filho precisa! 💡</Styled.Button>
          </div>
        </Styled.Content>
      </Styled.Container>
    </SectionBackground>
  );
};

GridContent.propTypes = {
  background: P.bool,
  sectionId: P.string,
};
