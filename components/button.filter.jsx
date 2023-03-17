import { styled } from "@linaria/react";
import { theme } from "../styles/theme";

//#region styles
const button = {};
button.FilterButton = styled.button`
  ${theme.elements.button}
  background-color: ${({ selected }) => (selected ? theme.colors.primaryBlue : "transparent")};
  color: ${({ selected }) => (selected ? "white" : theme.colors.tempestBlue)};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "0.875rem")};
  text-transform: capitalize;
  padding: ${theme.spacing.g4} 1vw;
  width: 100%;
  font-weight: 600;
  box-shadow: ${({ selected }) => (selected ? theme.boxShadows.button : "none")};
  .icons {
    margin-right: 5px;
  }
  :hover {
    background-color: ${({ selected }) => (selected ? theme.colors.primaryBlue : theme.colors.iceGrey)};
  }
`;
//#endregion

const FilterButton = ({ children, selected, icon, index, fontSize }) => {
  return (
    <button.FilterButton selected={selected} fontSize={fontSize}>
      {children}
    </button.FilterButton>
  );
};

export default FilterButton;
