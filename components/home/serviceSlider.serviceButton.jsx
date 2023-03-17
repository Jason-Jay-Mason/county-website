import { styled } from "@linaria/react";
import { theme } from "../../styles/theme";

//#region styles
const div = {};
div.menuItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing.g4} ${theme.spacing.g5};
  border-radius: 10px;
  :hover {
    background-color: white;
  }
  img {
    height: 30px;
  }
`;

div.text = styled.div`
  padding: 0 ${theme.spacing.g2};
  h6 {
    font-size: 0.875rem;
    font-weight: 600;
    color: ${theme.colors.tempestBlue};
    text-transform: capitalize;
  }
`;
//#endregion

const ServiceButton = ({ serviceName, icon }) => {
  return (
    <>
      <div.menuItem>
        <img src={icon || ""} alt={`An icon for ${serviceName}`} />
        <div.text>
          <h6>{serviceName}</h6>
        </div.text>
      </div.menuItem>
    </>
  );
};

export default ServiceButton;
