import { styled } from "@linaria/react";
import { theme } from "../styles/theme";
import Link from "next/link";
import { css } from "linaria";

//#region styles
const button = {};
button.cta = styled.button`
  display: block;
  color: white;
  border-radius: 4px;
  transition: all 0.2s ease;
  margin: 0 ${theme.spacing.g5} 0 0;
  box-shadow: ${theme.boxShadows.button};
  cursor: pointer;
  background: ${theme.colors.primaryBlue};
  font-weight: 300;
  padding: ${theme.spacing.g4} ${theme.spacing.g6} ${theme.spacing.g4} ${theme.spacing.g6};
  font-size: 1rem;
  :hover {
    background: ${theme.colors.primaryBlue + "E6"};
  }

  @media ${theme.breakPoints.sm} {
    font-size: 0.825rem;
    padding: ${theme.spacing.g4} ${theme.spacing.g4} ${theme.spacing.g4} ${theme.spacing.g4};
    margin: 0 7px 0 7px;
  }
`;
const mobile = css`
  display: none;
  @media ${theme.breakPoints.md} {
    display: inline-block;
  }
`;
const desktop = css`
  @media ${theme.breakPoints.md} {
    display: none;
  }
`;
//#endregion

const CtaButton = ({ link, phone, children }) => {
  return (
    <>
      <Link href={`tel:${phone}`} passHref>
        <a>
          <button.cta className={mobile}>{children}</button.cta>
        </a>
      </Link>
      <Link href={link} passHref>
        <a>
          <button.cta className={desktop}>{children}</button.cta>
        </a>
      </Link>
    </>
  );
};

export default CtaButton;
