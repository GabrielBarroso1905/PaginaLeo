import P from 'prop-types';
import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import 'font-awesome/css/font-awesome.min.css';
import argsServices from './mock'; // Importação dos dados do arquivo argsServices

export const Service = ({
  background,
  sectionId,
  title = argsServices.title,
  title1 = argsServices.title1,
  title2 = argsServices.title2,
  title3 = argsServices.title3,
  title4 = argsServices.title4,
  description = argsServices.description,
  description2 = argsServices.description2,
  description3 = argsServices.description3,
  description4 = argsServices.description4,
}) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container>
        <Styled.Container>
          <Styled.TextNowrap>

          <Heading colorDark={!background} size="huge" as="h2">
            {title}
          </Heading>
          </Styled.TextNowrap>
        </Styled.Container>

        <Styled.ServiceCards>
          <Styled.ServiceCard colorDark={!background}>
            <Styled.ServiceCardIcon colorDark={!background}>
              <Styled.IcoInsta colorDark={!background}>
                <i className="fa fa-lightbulb-o" />
              </Styled.IcoInsta>
            </Styled.ServiceCardIcon>
            <Heading size="small" colorDark={background} as="h3">
              {title1}
            </Heading>
            <Styled.Text colorDark={!background}>
              {description}
            </Styled.Text>
          </Styled.ServiceCard>

          <Styled.ServiceCard colorDark={!background}>
            <Styled.ServiceCardIcon colorDark={!background}>
              <Styled.IcoInsta colorDark={!background}>
                <i className="fa fa-book" />
              </Styled.IcoInsta>
            </Styled.ServiceCardIcon>
            <Heading size="small" colorDark={background} as="h3">
              {title2}
            </Heading>
            <Styled.Text colorDark={!background}>
              {description2}
            </Styled.Text>
          </Styled.ServiceCard>

          <Styled.ServiceCard colorDark={!background}>
            <Styled.ServiceCardIcon colorDark={!background}>
              <Styled.IcoInsta colorDark={!background}>
                <i className="fa fa-trophy" />
              </Styled.IcoInsta>
            </Styled.ServiceCardIcon>
            <Heading size="small" colorDark={background} as="h3">
              {title3}
            </Heading>
            <Styled.Text colorDark={!background}>
              {description3}
            </Styled.Text>
          </Styled.ServiceCard>

          <Styled.ServiceCard colorDark={!background}>
            <Styled.ServiceCardIcon colorDark={!background}>
              <Styled.IcoInsta colorDark={!background}>
                <i className="fa fa-thumbs-o-up" />
              </Styled.IcoInsta>
            </Styled.ServiceCardIcon>
            <Heading size="small" colorDark={background} as="h3">
              {title4}
            </Heading>
            <Styled.Text colorDark={!background}>
              {description4}
            </Styled.Text>
          </Styled.ServiceCard>
        </Styled.ServiceCards>
     <Styled.Btn colorDark={background}>Não Deixe para depois, aproveite agora mesmo tudo que temos a oferecer. </Styled.Btn>
      </Styled.Container>
    </SectionBackground>
  );
};

Service.propTypes = {
  background: P.bool.isRequired,
  sectionId: P.string,
  title: P.string,
  title1: P.string,
  title2: P.string,
  title3: P.string,
  title4: P.string,
  description: P.string,
  description2: P.string,
  description3: P.string,
  description4: P.string,
};
