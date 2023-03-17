import { styled } from "@linaria/react";
import { theme } from "../../styles/theme";

//#region styles
const section = {};
section.ServiceAreas = styled.section``;

const div = {};

div.row = styled.div`
  ${theme.elements.row}
  padding: ${theme.spacing.g10} ${theme.spacing.g5} ${theme.spacing.g9} ${theme.spacing.g5};

  h2 {
    text-align: center;
    ${theme.typography.xlrgLt}
    padding-bottom: ${theme.spacing.g5};
    color: ${theme.colors.primaryBlue};
  }
  h3 {
    text-align: center;
    ${theme.typography.xxlrg}
    padding-bottom: ${theme.spacing.g7};
  }
  @media ${theme.breakPoints.lg} {
    padding: ${theme.spacing.g9} ${theme.spacing.g3} ${theme.spacing.g9} ${theme.spacing.g3};
  }
`;

div.services = styled.div`
  margin: 0 auto;
  justify-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  h4 {
    ${theme.typography.xlrgLt}
    padding-bottom: ${theme.spacing.g8}
  }
  @media ${theme.breakPoints.lg} {
    grid-template-columns: 1fr 1fr;
  }
  @media ${theme.breakPoints.sm} {
    grid-template-columns: 1fr;
    h4 {
      padding-bottom: ${theme.spacing.g6};
    }
  }
`;

//#endregion

const ServiceAreas = ({ data }) => {
  return (
    <section.ServiceAreas id="service-areas">
      <div.row>
        <h2>Serving the Pacific Northwest</h2>
        <h3>Our service areas</h3>
        <div.services>
          {data?.map((serviceArea, index) => {
            return <h4 key={serviceArea + serviceArea}>{serviceArea}</h4>;
          })}
        </div.services>
      </div.row>
    </section.ServiceAreas>
  );
};

export default ServiceAreas;
