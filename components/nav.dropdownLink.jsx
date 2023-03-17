import { styled } from "@linaria/react";
import { useState } from "react";
import { theme } from "../styles/theme";
import NavDropdownItem from "./nav.dropdown.item";

//#region styles
const div = {};
div.menuContainer = styled.div`
  z-index: 1100000;
  background-color: white;
  border-top: 2px solid ${theme.colors.iceGrey};
  position: absolute;
  top: ${(props) => (props.isAbsolute ? "87px" : "96px")};
  left: 0;
  width: 100vw;
  transition: all 0.2s ease;
  @media ${theme.breakPoints.lg} {
    display: none;
  }
`;
div.menuRow = styled.div`
  padding: ${theme.spacing.g5} ${theme.spacing.g4};
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  place-items: center stretch;
  column-gap: ${theme.spacing.g2};
  row-gap: ${theme.spacing.g2};
`;
div.dropDownLink = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 ${theme.spacing.g5};
  cursor: pointer;
  svg {
    stroke: ${theme.colors.navLinks};
    stroke-width: 1.5;
    fill: none;
    transition: all 0.2s ease;
    margin-top: 2px;
    margin-left: 2px;
    transform: ${(props) =>
      props.isVisible ? "rotate(-180deg) translatex(-4px) translatey(0)" : "none"};
  }
  span {
    font-size: 14px;
    color: ${theme.colors.navLinks};
  }
  :hover {
    span {
      color: #000000;
    }
    svg {
      stroke: black;
    }
  }
  @media ${theme.breakPoints.lg} {
    display: none;
  }
`;
//#endregion

const DropdownLink = ({ link, isAbsolute }) => {
  const [isVisible, setVisible] = useState(false);
  return (
    <>
      {/*Drop down menu link*/}
      <div onClick={() => setVisible(!isVisible)}>
        <div.dropDownLink isVisible={isVisible}>
          <span>{link?.label}</span>
          <svg
            viewBox="0 0 23 23"
            width="16"
            height="16"
            strokeLinecap="round"
            strokeLinejoin="round"
            shapeRendering="geometricPrecision"
          >
            <path d="M7 9l7 7 7-7"></path>
          </svg>
        </div.dropDownLink>

        {/*Drop down menu container*/}
        <span>
          <div.menuContainer
            isAbsolute={isAbsolute}
            style={isVisible ? { visibility: "visible" } : { opacity: 0, visibility: "hidden" }}
          >
            <div.menuRow>
              {/*Drop down menu items*/}
              {link.children &&
                link?.children?.map((child) => {
                  return <NavDropdownItem child={child} key={child.label} />;
                })}
            </div.menuRow>
          </div.menuContainer>
        </span>
      </div>
    </>
  );
};

export default DropdownLink;
