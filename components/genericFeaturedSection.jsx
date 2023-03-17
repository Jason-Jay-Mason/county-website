import { styled } from "@linaria/react";
import { theme } from "../styles/theme";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
//#region component imports
import BoxBackground from "./subtleBoxBackground";
import Button from "./button";
import ArtisticBackgroundElement from "./artisticBgElement.topogrophy";
import Link from "next/link";
import Image from "./image";
//#endregion

//#region styles
const section = {};
section.featured = styled.div`
  ${theme.elements.section}
  padding: ${theme.spacing.g9} ${theme.spacing.g4};
  @media ${theme.breakPoints.lg} {
    padding: 0 ${theme.spacing.g4} ${theme.spacing.g3} ${theme.spacing.g4};
  }
  @media ${theme.breakPoints.md} {
    padding: 0 0 ${theme.spacing.g3} 0;
  }
`;
const div = {};
div.row = styled.div`
  ${theme.elements.row}
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media ${theme.breakPoints.lg} {
    flex-direction: column;
    margin: 0;
  }
  @media ${theme.breakPoints.sm} {
  }
`;
div.text = styled.div`
  z-index: 1;
  padding: ${theme.spacing.g7} ${theme.spacing.g6};
  p {
    padding-bottom: ${theme.spacing.g4};
  }
  h3 {
    color: ${theme.colors.primaryBlue};
    ${theme.typography.xlrgLt}
    padding: 0 0  ${theme.spacing.g4} 0;
  }
  h4 {
    ${theme.typography.xxlrg}
    padding: 0 0 ${theme.spacing.g6} 0;
  }
  button {
    margin: ${theme.spacing.g6} 0 0 0;
  }
  @media ${theme.breakPoints.xxl} {
    padding-left: ${theme.spacing.g6};
  }
  @media ${theme.breakPoints.lg} {
    padding: ${theme.spacing.g7} ${theme.spacing.g5};

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    button {
      margin: 0 auto;
      margin: ${theme.spacing.g7} auto 0 auto;
    }
  }
`;

div.img = styled.div`
  z-index: 1;
  position: relative;
  left: -7%;
  margin: -${theme.spacing.g9} 0;
  height: 835px;
  min-width: 660px;
  span {
    box-shadow: ${theme.boxShadows.image};
    border-radius: 15px;
  }
  @media ${theme.breakPoints.xxl} {
    height: 735px;
    min-width: 560px;
    left: 0;
  }
  @media ${theme.breakPoints.xl} {
    height: 50vw;
    min-width: 500px;
    min-height: 650px;
    left: 0;
    right: 0;
    margin: 0;
  }
  @media ${theme.breakPoints.lg} {
    margin: 0;
    height: 20vw;
    min-width: 100%;
    width: 100%;
    min-height: 450px;
    right: 0;
    left: 0;
    margin: 0;
    span {
      border-radius: 0 0 15px 15px;
    }
  }
  @media ${theme.breakPoints.md} {
    height: auto;
    min-width: 100%;
    min-height: 350px;
    right: 0;
    margin: 0;
  }
`;

const img = {};
img.main = styled.img``;
//#endregion

const GenericFeaturedSection = ({ data }) => {
  return (
    <section.featured>
      <BoxBackground padding="0">
        <div.row>
          <div.img>
            <Image
              src={data?.image}
              layout="fill"
              objectFit="cover"
              quality={100}
              width={850}
              placeholder="no-image.svg"
              alt={`Showing ${data?.subHeadline} and ${data?.headline}`}
            />
          </div.img>
          <ArtisticBackgroundElement xxlLeft="-40%" left="7%" marginTop="20px" width="1300px" />
          <div.text>
            <h3>{data?.subHeadline}</h3>
            <h4>{data?.headline}</h4>
            <ReactMarkdown>{data?.body}</ReactMarkdown>

            <Link href={data.ctaButtonLink} passHref>
              <a>
                <Button
                  padding={`${theme.spacing.g5} ${theme.spacing.g6}`}
                  fontSize="1rem"
                  backgroundColor={theme.colors.tempestBlue}
                >
                  {data?.ctaButtonText}
                </Button>
              </a>
            </Link>
          </div.text>
        </div.row>
      </BoxBackground>
    </section.featured>
  );
};

export default GenericFeaturedSection;
