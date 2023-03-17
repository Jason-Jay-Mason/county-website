import { styled } from "@linaria/react";
import { css } from "linaria";
import { theme } from "../../styles/theme";
import Link from "next/link";
import Image from "../image";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
//#region component imports
import Button from "../button";
//#endregion

//#region styles
const div = {};
div.topicDisplay = styled.div`
  z-index: 5;
  display: none;
`;
div.col = styled.div`
  position: relative;
  max-width: 50%;
  min-width: 50%;
  display: block;
  flex-direction: column;
  justify-content: center;
  z-index: 2;
  :nth-child(2) {
    margin-right: ${theme.spacing.g5};
    display: flex;
    justify-content: center;
    align-items: flex-start;
    @media ${theme.breakPoints.lg} {
      margin-right: 0;
    }
  }

  p {
    padding-bottom: ${theme.spacing.g2};
    padding-left: ${theme.spacing.g2};
  }
  h6 {
    font-size: 1rem;
    padding-top: ${theme.spacing.g4};
    font-weight: 800;
    text-transform: capitalize;
    color: ${theme.colors.tempestBlue};
    padding-left: ${theme.spacing.g2};
  }
  li:before {
    content: "";
    display: inline-block;
    position: absolute;
    left: -5px;
    margin-top: 5px;
    height: 40px;
    width: 40px;
    background-image: url("https://res.cloudinary.com/countylineexcavation/image/upload/v1643603653/Icons/lofi_logo_gccmls.svg");
    background-repeat: no-repeat;
  }
  button {
    margin-top: ${theme.spacing.g6};
  }

  @media ${theme.breakPoints.lg} {
    max-width: 100%;
    display: flex;
    a {
      margin: 0 auto;
      align-self: center;
    }
  }
`;
div.headline = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding-bottom: ${theme.spacing.g4};
  h3 {
    ${theme.typography.xlrg}
    padding: 0 0 0 ${theme.spacing.g4};
  }
  img {
    height: 50px;
  }
  @media ${theme.breakPoints.xl} {
    img {
      height: 40px;
    }
  }
  @media ${theme.breakPoints.lg} {
    padding-top: ${theme.spacing.g6};
    justify-content: center;
    h3 {
      text-align: left;
      padding: 0 0 0 ${theme.spacing.g2};
    }
  }
`;

div.cta = styled.div`
  display: none;
  width: 50%;
  button {
    align-self: center;
    max-width: 300px;
  }
  @media ${theme.breakPoints.lg} {
    padding-top: ${theme.spacing.g7};
    margin: 0 auto;
  }
  @media ${theme.breakPoints.md} {
    width: 100%;
  }
`;
div.featuredImg = styled.div`
  border-radius: 15px;
  filter: drop-shadow(${theme.boxShadows.image});
  position: relative;
  left: -27%;
  width: 118%;
  height: 650px;
  span {
    img {
      border-radius: 15px;
    }
  }
  @media ${theme.breakPoints.xxl} {
    left: -10%;
    width: 100%;
  }
  @media ${theme.breakPoints.lg} {
    max-width: 600px;
    position: static;
    align-self: center;
    padding-top: ${theme.spacing.g6};
    margin-bottom: ${theme.spacing.g6};
  }
  @media ${theme.breakPoints.md} {
    height: 300px;
  }
`;

const img = {};
img.bbb = styled.img`
  position: absolute;
  z-index: 4;
  top: -5%;
  left: -5%;
  width: 130px;
  @media ${theme.breakPoints.md} {
    width: 100px;
  }
  @media ${theme.breakPoints.sm} {
    width: 70px;
  }
`;

const displayed = css`
  animation: fadeIn 1.2s;
  display: flex;
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @media ${theme.breakPoints.lg} {
    display: flex;
    flex-direction: column;
  }
`;

//#endregion

const TopicDisplay = ({ topic, currentTopic, index }) => {
  return (
    <>
      <div.topicDisplay className={topic?.title === currentTopic ? displayed : ""}>
        <div.col>
          <div.featuredImg>
            {index === 0 && <img.bbb src="https://res.cloudinary.com/countylineexcavation/image/upload/v1645064187/Icons/bbb_g8g4ml.svg" alt="A Better Business Bureau logo" />}
            <Image src={topic?.featuredImage} layout="fill" quality={80} width={950} objectFit="cover" alt={`An image that represents ${topic?.title}`} />
          </div.featuredImg>
        </div.col>
        <div.col>
          <div.headline>
            {topic?.icon ? <img src={topic?.icon} alt={`An icon representing the topic: ${topic?.headline}`} /> : null}
            <h3>{topic?.headline}</h3>
          </div.headline>
          <ReactMarkdown>{topic?.body}</ReactMarkdown>
          <Link href={topic?.ctaButtonLink || "/"} passHref>
            <a>
              <Button padding={`${theme.spacing.g5} ${theme.spacing.g6}`} fontSize="1rem">
                {topic?.ctaButtonText}
              </Button>
            </a>
          </Link>
        </div.col>
      </div.topicDisplay>
    </>
  );
};

export default TopicDisplay;
