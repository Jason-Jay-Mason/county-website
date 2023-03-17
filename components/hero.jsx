import { styled } from "@linaria/react";
import { theme } from "../styles/theme";
import Link from "next/link";
import { useState } from "react";

//#region component imports
import ModelVideo from "./hero.modelVideo";
import Button from "./button";
//#endregion
//#region styles
const section = {};
section.hero = styled.section`
  background-image: ${(props) => (props.backgroundImg ? `url('${props.backgroundImg}')` : null)};
  background-repeat: no-repeat;
  background-position-y: bottom;
  background-size: 800px auto;
`;

const div = {};
div.row = styled.div`
  ${theme.elements.row}
  padding: 13rem ${theme.spacing.g6};
  text-align: center;
  @media ${theme.breakPoints.lg} {
    padding: 7rem ${theme.spacing.g4};
  }
  @media ${theme.breakPoints.sm} {
    padding: 3rem ${theme.spacing.g4};
  }
  h1 {
    ${theme.typography.huge}
    color: ${theme.colors.tempestBlue};
    padding: 0 0 ${theme.spacing.g6} 0;
  }
  h2 {
    font-weight: 400;
    margin: 0 auto;
    font-size: 1rem;
    line-height: 171.5%;
    color: ${theme.colors.tempestBlue};
    max-width: 600px;
    padding: 0 0 ${theme.spacing.g6} 0;
    @media ${theme.breakPoints.lg} {
      margin: 0px auto;
      text-align: center;
      font-size: 1rem;
      color: ${theme.colors.tempestBlue};
    }
  }
`;
div.pageTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  left: -2%;
  padding: 0 0 ${theme.spacing.g6} 0;
  p {
    ${theme.typography.xlrgLt}
    color: ${theme.colors.tempestBlue};
  }
  img {
    max-width: 90px;
    padding-right: ${theme.spacing.g3};
  }
`;
div.buttons = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  align-items: center;
  justify-content: center;
  @media ${theme.breakPoints.md} {
    flex-direction: column;
    button {
      margin-bottom: ${theme.spacing.g4};
    }
  }
`;
//#endregion

const Hero = ({ data, background }) => {
  const [videoVisible, setVideoVisible] = useState(false);
  return (
    <>
      <div onClick={() => setVideoVisible(false)}>
        <ModelVideo src={data?.videoButtonLink} videoVisible={videoVisible} />
      </div>
      <section.hero backgroundImg="https://res.cloudinary.com/countylineexcavation/image/upload/v1644984746/artistic%20elements/bg-excavator_er7n0r.svg">
        <div.row>
          <div.pageTitle>
            <img src={data?.icon ? data?.icon : null} alt={`An icon representing the ${data?.pageTitle} page`} />
            <p>{data?.pageTitle}</p>
          </div.pageTitle>
          <h1>{data?.headline}</h1>
          <h2>{data?.hook}</h2>
          <div.buttons>
            {data?.ctaButtonToggle ? (
              <Link href={data?.ctaButtonLink ? data?.ctaButtonLink : ""} passHref>
                <a>
                  <Button backgroundColor={theme.colors.highlightYellow} boxShadow={theme.boxShadows.buttonYellow} padding={`1.3rem 3rem 1.3rem 3rem`} fontWeight="500" color={theme.colors.tempestBlue} fontSize="1rem">
                    {data?.ctaButtonText}
                  </Button>
                </a>
              </Link>
            ) : null}
            {data?.videoButtonToggle ? (
              <div onClick={() => setVideoVisible(!videoVisible)}>
                <Button backgroundColor={theme.colors.tempestBlue} boxShadow={theme.boxShadows.button} padding={`1.1rem 3rem 1.1rem 3rem`} fontSize="1rem" display="flex">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="26px" width="26px" xmlns="http://www.w3.org/2000/svg">
                    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm144.1 454.9L437.7 677.8a8.02 8.02 0 0 1-12.7-6.5V353.7a8 8 0 0 1 12.7-6.5L656.1 506a7.9 7.9 0 0 1 0 12.9z"></path>
                  </svg>
                  {data?.videoButtonText}
                </Button>
              </div>
            ) : null}
          </div.buttons>
        </div.row>
      </section.hero>
    </>
  );
};

export default Hero;
