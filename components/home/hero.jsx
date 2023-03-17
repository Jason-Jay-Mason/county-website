import { styled } from "linaria/react";
import { theme } from "../../styles/theme";
import { useState } from "react";
import ModelVideo from "../hero.modelVideo";
import PlayButton from "../hero.playButton";
import Link from "next/link";
import { isDesktop, isMobile } from "react-device-detect";
import Image from "../image";

//#region styles
const section = {};
section.hero = styled.section`
  background: linear-gradient(90deg, rgba(4, 18, 46, 0.6) 30%, rgba(4, 18, 46, 0) 95%);
  position: relative;
  overflow: hidden;
  span {
    z-index: -1;
  }
  @media ${theme.breakPoints.lg} {
    background: none;
    background-color: rgba(4, 18, 46, 0.67);
  }
`;
const div = {};
div.row = styled.div`
  z-index: 1;
  ${theme.elements.row}
  position: relative;
  padding: 13rem ${theme.spacing.g6};
  @media ${theme.breakPoints.lg} {
    padding: 7rem ${theme.spacing.g4};
  }
  @media ${theme.breakPoints.sm} {
    padding: 3rem ${theme.spacing.g4};
  }
  h6 {
    ${theme.typography.xxlrgLt}
    padding: 0 0 ${theme.spacing.g4} 0;
    color: white;
  }
  h2 {
    ${theme.typography.huge}
    color: white;
    padding: 0 0 ${theme.spacing.g5} 0;
  }
  h1 {
    font-weight: 400;
    font-size: 18px;
    line-height: 171.5%;
    color: white;
    max-width: 700px;
    padding: 0 0 ${theme.spacing.g6} 0;
    @media ${theme.breakPoints.lg} {
      margin: 0px auto;
      text-align: center;
      font-size: 1rem;
    }
  }
`;
div.buttons = styled.div`
  display: flex;
  flex-direction: row;
  @media ${theme.breakPoints.lg} {
    margin: 0 auto;
    justify-content: center;
    align-items: center;
  }
  @media ${theme.breakPoints.sm} {
    justify-content: center;
    flex-direction: column;
    max-width: 300px;
    margin: 0 auto;
    align-items: stretch;
    padding: 0 ${theme.spacing.g5};
    button {
      width: 100%;
    }
  }
`;
div.desktop = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: ${theme.colors.tempestBlue};
  z-index: -2;
  @media ${theme.breakPoints.md} {
    display: none;
  }
`;
const video = {};
video.background = styled.video`
  z-index: -1;
  position: absolute;
  object-fit: cover;
  height: 100%;
  width: 100%;
  animation: fadeIn 2s;
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
const button = {};
button.cta = styled.button`
  ${theme.elements.button}
  background:rgb(241, 241, 241);
  font-weight: 400;
  padding: 1.3rem 3rem 1.3rem 3rem;
  font-size: 18px;
  :hover {
    background: white;
  }
  @media ${theme.breakPoints.sm} {
    font-size: 16px;
    margin: 10px 0 0 0;
  }
`;
//#endregion

const Hero = ({ data, contactInfo }) => {
  const [videoVisible, setVideoVisible] = useState(false);

  return (
    <>
      <div onClick={() => setVideoVisible(false)}>
        <ModelVideo src={data?.videoButtonLink} videoVisible={videoVisible} />
      </div>
      <section.hero data-tinafield="hero">
        {isDesktop && (
          <video.background
            src="https://player.vimeo.com/progressive_redirect/playback/678558401/rendition/720p?loc=external&signature=dfd3c1ed77341021089dbf2277daf59aa1c01d2b3ff0c38cb09e8cb7d3a8c7fa"
            muted
            loop
            autoPlay
            playsInline
          />
        )}

        <div.desktop />

        <div.row>
          <h6>{data?.subHeadline}</h6>
          <h2>{data?.headline}</h2>
          <h1>{data?.hook}</h1>
          <div.buttons>
            {data.videoButtonToggle && (
              <div onClick={() => setVideoVisible(!videoVisible)}>
                <PlayButton>{data?.videoButtonText}</PlayButton>
              </div>
            )}
            {data.ctaButtonToggle && (
              <Link href={data?.ctaButtonLink} passHref>
                <a>
                  <button.cta>{data?.ctaButtonText}</button.cta>
                </a>
              </Link>
            )}
          </div.buttons>
        </div.row>
        {!isDesktop && (
          <Image
            src={data?.mobileBackgroundSrc}
            layout="fill"
            objectFit="cover"
            quality={80}
            width={1400}
            placeholder="no-image.svg"
            alt="An image showing the photo of dirt work before it is done"
          />
        )}
      </section.hero>
    </>
  );
};

export default Hero;
