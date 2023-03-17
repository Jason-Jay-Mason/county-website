import { styled } from "@linaria/react";
import { theme } from "../styles/theme";
import Button from "./button";
import Link from "next/link";
import ArtisticBackgroundElement from "./artisticBgElement.excavator";
//#region styles
const section = {};
section.cta = styled.section`
  ${theme.elements.section}
`;

const div = {};
div.row = styled.div`
  ${theme.elements.row}
  text-align: center;
  padding: ${theme.spacing.g9} 0 ${theme.spacing.g10} 0;

  @media ${theme.breakPoints.lg} {
    padding: ${theme.spacing.g9} 0;
  }
  h5 {
    ${theme.typography.xxlrgLt}
    padding-bottom:${theme.spacing.g5};
  }
  h4 {
    ${theme.typography.huge}
    padding-bottom:${theme.spacing.g6};
  }
  @media ${theme.breakPoints.lg} {
    padding: ${theme.spacing.g8} 0 ${theme.spacing.g9} 0;
  }
  @media ${theme.breakPoints.sm} {
    padding: ${theme.spacing.g7} 0 ${theme.spacing.g9} 0;
  }
`;

//#endregion

const PrefooterCTA = ({ data }) => {
  return (
    <section.cta data-tinafield="preFooterCTA">
      <ArtisticBackgroundElement marginTop="0px" width="900px" />
      <div.row>
        <h5>{data?.subHeadline || "ready to get started?"}</h5>
        <h4>{data?.headline || "Tell us about your project"}</h4>
        <Link href={data?.ctaButtonLink || "/contact"} passHref>
          <a>
            <Button
              padding={`${theme.spacing.g5} ${theme.spacing.g7}`}
              fontSize="1rem"
            >
              {data?.ctaButtonText || "Request a Bid"}
            </Button>
          </a>
        </Link>
      </div.row>
    </section.cta>
  );
};

export default PrefooterCTA;
