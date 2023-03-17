import { styled } from "@linaria/react";
import { theme } from "../styles/theme";
import Link from "next/link";

//#region styles
const div = {};
div.menuItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: ${theme.spacing.g4} ${theme.spacing.g6};
  border-radius: 10px;
  :hover {
    background-color: ${theme.colors.iceGrey};
  }
  img {
    width: 50px;
  }
  @media ${theme.breakPoints.xl} {
    padding: ${theme.spacing.g4} ${theme.spacing.g4};
  }
`;

div.text = styled.div`
  padding: 0 ${theme.spacing.g3};
  h6 {
    font-size: 1rem;
    font-weight: 900;
    color: ${theme.colors.tempestBlue};
    text-transform: uppercase;
  }
  p {
    font-size: ${theme.fontSize.xsml};
    font-weight: 100;
    line-height: 1rem;
    color: ${theme.colors.tempestBlue};
  }
  @media ${theme.breakPoints.xl} {
    h6 {
      line-height: 150%;
    }
    h6,
    p {
      font-size: 0.8rem;
    }
  }
`;
//#endregion styles

const NavDropdownItem = ({ child }) => {
  return (
    <>
      <Link href={child?.href || "/"} passHref>
        <a>
          <div.menuItem>
            <img src={child?.icon || "/"} alt={`An icon representing ${child?.label}`} />
            <div.text>
              <h6>{child?.label}</h6>
              <p>{child?.blurb}</p>
            </div.text>
          </div.menuItem>
        </a>
      </Link>
    </>
  );
};

export default NavDropdownItem;
