import { styled } from "@linaria/react";
import { theme } from "../../styles/theme";
import Image from "../image";

//#region styles
const div = {};
div.imageContainer = styled.div`
  position: relative;
  width: 50%;
  height: 500px;
  span {
    border-radius: 20px;
    box-shadow: ${theme.boxShadows.image};
  }
  p {
    position: absolute;
    z-index: 2;
    color: white;
    ${theme.typography.medlrg}
    padding: ${theme.spacing.g4} ${theme.spacing.g5} ${theme.spacing.g4} ${theme.spacing.g5};
  }
  @media ${theme.breakPoints.xl} {
    height: 40vw;
  }
  @media ${theme.breakPoints.sm} {
    width: 100%;
    max-width: 600px;
    height: 65vw;
  }
`;
//#endregion

const ProjectImage = ({ data }) => {
  if (data?.beforeAfterToggle === true) {
    return (
      <>
        <div.imageContainer>
          <p>BEFORE</p>
          <Image src={data?.beforeImage || "/no-image.svg"} layout="fill" quality={80} width={600} objectFit="cover" objectPosition="center center" alt="A picture of some land before it is worked on" />
        </div.imageContainer>
        <div.imageContainer>
          <p>AFTER</p>
          <Image src={data?.afterImage || "/no-image.svg"} layout="fill" quality={80} width={600} objectFit="cover" objectPosition="center center" alt="Some land after excavation work is successfully complete!" />
        </div.imageContainer>
      </>
    );
  } else {
    return (
      <div.imageContainer>
        <Image src={data?.featuredImage || "/no-image.svg"} layout="fill" quality={80} width={600} objectFit="cover" objectPosition="center center" alt="Land after excavation work is complete" />
      </div.imageContainer>
    );
  }
};

export default ProjectImage;
