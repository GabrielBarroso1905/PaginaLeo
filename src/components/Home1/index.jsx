import P from 'prop-types';
import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';
import mockData from './mock'; // Importação do mock

export const Home1 = ({ 
  title = mockData.title, 
  text = mockData.text, 
  srcImg = mockData.srcImg, 
  background = false, 
  sectionId = '', 
  fundo 
}) => {
  return (
    <SectionBackground background={background} sectionId={sectionId} fundo={fundo}>
      <Styled.Container background={background}>
        <Styled.TextContainer>
          <Heading uppercase size="big" colorDark={!background} as="h2">
            {title}
          </Heading>
          <TextComponent>{text}</TextComponent>
          <Styled.DiscountText>
            De <span className="old-price">R$97,00<br /></span> por: <span className="new-price">R$9,90</span>
          </Styled.DiscountText>
          <Styled.Btn colorDark={background}>Aproveitar</Styled.Btn>
        </Styled.TextContainer>

        <Styled.ImageContainer>
          <Styled.Image src={srcImg} alt={title} />
        </Styled.ImageContainer>
      </Styled.Container>
    </SectionBackground>
  );
};

Home1.propTypes = {
  title: P.string,
  text: P.string,
  srcImg: P.string,
  background: P.bool,
  sectionId: P.string,
  fundo: P.string,
};
