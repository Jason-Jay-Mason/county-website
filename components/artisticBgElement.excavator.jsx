import { styled } from "@linaria/react";
import { theme } from "../styles/theme";

//#region styles
const div = {};
div.bgElement = styled.div`
  display: inline-block;
  position: relative;
  z-index: -1;
  right: ${(props) => (props.right ? props.right : "0")};
  min-height: 120%;
  opacity: ${(props) => (props.opacity ? props.opacity : "1")};
  img {
    position: absolute;
    margin-top: ${(props) => (props.marginTop ? props.marginTop : "0px")};
    left: ${(props) => (props.left ? props.left : "0")};
    width: ${(props) => (props.width ? props.width : "auto")};
    @media ${theme.breakPoints.xxl} {
      left: ${(props) => (props.xxlLeft ? props.xxlLeft : "0")};
    }
  }

  @media ${theme.breakPoints.lg} {
    display: none;
  }
`;
//#endregion

const ArtisticBackgroundElement = ({ left, xxlLeft, marginTop, opacity, width, right }) => {
  return (
    <div.bgElement left={left} xxlLeft={xxlLeft} marginTop={marginTop} opacity={opacity} width={width} right={right}>
      <img src="https://res.cloudinary.com/countylineexcavation/image/upload/v1644984746/artistic%20elements/bg-excavator_er7n0r.svg" alt="A background image of an excavator." />
    </div.bgElement>
  );
};

export default ArtisticBackgroundElement;
