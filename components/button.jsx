import { styled } from "@linaria/react";
import { useState } from "react";
import { theme } from "../styles/theme";

//#region Styles

const StandardButton = styled.button`
  display: ${(props) => (props.display ? props.display : "inline-block")};
  align-items: center;
  justify-content: center;
  background: ${(props) => (props.backgroundColor ? props.backgroundColor : theme.colors.primaryBlue)};
  color: ${(props) => (props.color ? props.color : "white")};
  padding: ${(props) => (props.padding ? props.padding : `${theme.spacing.g4} ${theme.spacing.g6}`)};
  border-radius: 4px;
  border: ${(props) => (props.border ? props.border : "none")};
  box-shadow: ${(props) => (props.boxShadow ? props.boxShadow : theme.boxShadows.button)};
  font-size: ${(props) => (props.fontSize ? props.fontSize : theme.fontSize.xsml)};
  transition: all 0.2s ease;
  margin: ${(props) => `0 ${props.marginR} 0 ${props.maringL}`};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "300")};
  cursor: pointer;
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : "none")};
  width: ${(props) => (props.width ? props.width : "auto")};
  white-space: nowrap;
  :hover {
    background: ${(props) => {
      if (props.hvrBackgroundColor) {
        return props.hvrBackgroundColor;
      } else if (props.backgroundColor) {
        return props.backgroundColor + "eb";
      } else {
        return theme.colors.primaryBlue + "eb";
      }
    }};
  }
  @media ${theme.breakPoints.md} {
    width: 70vw;
    max-width: 350px;
  }
  svg {
    margin-right: ${theme.spacing.g2};
  }
`;

const Button = ({ fontSize, marginR, marginL, children, backgroundColor, color, border, boxShadow, hvrBackgroundColor, fontWeight, width, maxWidth, padding, display }) => {
  return (
    <>
      <StandardButton
        marginR={marginR ? marginR : 0}
        maringL={marginL ? marginL : 0}
        hvrBackgroundColor={hvrBackgroundColor}
        boxShadow={boxShadow}
        border={border}
        backgroundColor={backgroundColor}
        fontSize={fontSize}
        color={color}
        fontWeight={fontWeight}
        width={width}
        maxWidth={maxWidth}
        padding={padding}
        display={display}
      >
        {children ? children : "button"}
      </StandardButton>
    </>
  );
};

export default Button;
