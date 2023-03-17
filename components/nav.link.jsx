import { styled } from "@linaria/react";
import { theme } from "../styles/theme";
import Link from "next/link";

//#region styles
const a = {};
a.navLink = styled.a`
  font-size: 14px;
  padding: 0 ${theme.spacing.g5};
  color: ${theme.colors.navLinks};
  cursor: pointer;
  :hover {
    color: #000000;
  }
  @media ${theme.breakPoints.lg} {
    display: none;
  }
`;
//#endregion

const NavLink = ({ link }) => {
  return (
    <div>
      <Link href={link.href} passHref>
        <a.navLink>{link.label}</a.navLink>
      </Link>
    </div>
  );
};

export default NavLink;
