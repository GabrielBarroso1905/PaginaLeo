import { Base } from '../Base';
import { Home1 } from '../../components/Home1';
import { mockBase } from '../Base/mock';
import { GridText } from '../../components/GridText';
import { GridContent } from '../../components/GridContent';
import { Service } from '../../components/Service';
import { FinalSalesPage } from '../../components/GridFinal';
import { HowItWorks } from '../../components/ComoFunciona'; // Import do componente
import ProductOffer from '../../components/Oferecimento'; // Importação do componente ProductOffer
import SatisfactionGuarantee from '../../components/Satisfacao'; // Importação do componente de Garantia de Satisfação

export const Home = () => {
  return (
    <>
      <Base {...mockBase}>
        <Home1 sectionId="target1" />
        <Service background={true} sectionId="target2" />
        <GridText sectionId="target3" />
        <GridContent background={true} sectionId="target4" />
        <HowItWorks /> {/* Componente "Como Funciona" */}
        <ProductOffer /> {/* Componente de Oferta do Produto */}
        <SatisfactionGuarantee /> {/* Componente de Satisfação Garantida */}
        
      </Base>
    </>
  );
};

export default Home;
