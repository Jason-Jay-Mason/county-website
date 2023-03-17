import { styled } from "@linaria/react";
import { useState } from "react";
import { theme } from "../../styles/theme";

//#region component imports

import FilterButton from "../button.filter";
import TopicDisplay from "./planSlider.topicDisplay";
import ArtisticBackgroundElement from "../artisticBgElement.topogrophy";
import BoxBackground from "../subtleBoxBackground";
//#endregion

//#region styles
const section = {};
section.plan = styled.section`
  ${theme.elements.section};
  margin-bottom: -120px;
  @media ${theme.breakPoints.lg} {
    margin: ${theme.spacing.g6} 0;
    padding: ${theme.spacing.g2};
  }
`;

const div = {};

div.row = styled.div`
  max-width: ${theme.maxMin.contentMaxWidth};
  padding-top: ${theme.spacing.g7};
  margin-left: ${theme.spacing.g7};
  margin-right: ${theme.spacing.g7};
  padding-bottom: ${theme.spacing.g10};
  @media ${theme.breakPoints.xl} {
    margin-left: ${theme.spacing.g6};
    margin-right: ${theme.spacing.g6};
  }
  @media ${theme.breakPoints.lg} {
    margin: 0 ${theme.spacing.g6} 0 ${theme.spacing.g6};
    padding-top: ${theme.spacing.g7};
    padding-bottom: 0;
  }
  @media ${theme.breakPoints.sm} {
    margin: 0 ${theme.spacing.g4} 0 ${theme.spacing.g4};
    padding-top: ${theme.spacing.g5};
  }
  h5,
  h4 {
    text-align: center;
  }
  h4 {
    padding-bottom: ${theme.spacing.g4};
    ${theme.typography.xlrgLt}
    color: ${theme.colors.primaryBlue};
  }
  h5 {
    ${theme.typography.xxxlrg}
    padding-bottom: ${theme.spacing.g7};
    @media ${theme.breakPoints.sm} {
      padding-bottom: ${theme.spacing.g6};
    }
  }

  nav {
    z-index: 5;
    position: relative;
    margin: 0 auto;
    display: flex;
    column-gap: ${theme.spacing.g4};
    flex-direction: row;
    justify-content: space-around;
    max-width: 800px;
    width: 100%;
    padding-bottom: ${theme.spacing.g7};
    @media ${theme.breakPoints.lg} {
      width: 90%;
      justify-content: center;
      column-gap: ${theme.spacing.g2};
    }
    @media ${theme.breakPoints.sm} {
      flex-direction: column;
      padding: 0 0 ${theme.spacing.g6} 0;
    }
  }
`;

//#endregion

const Plan = ({ data }) => {
  const [currentTopic, setTopic] = useState(data?.categoryList[0]);
  return (
    <section.plan data-tinafield="planSlider">
      <BoxBackground backgroundColor={theme.colors.lightBlueGrey}>
        <div.row>
          <h4>Get Help With Your Dream Project</h4>
          <h5>Three Easy Steps To Get Started</h5>
          <nav>
            {data?.categoryList?.map((category, index) => {
              return (
                <div
                  key={category.title + "filterButton"}
                  onClick={() => {
                    setTopic(category);
                  }}
                >
                  <FilterButton index={index} selected={currentTopic.title === category.title} fontSize="1rem">
                    {index >= 0 ? index + 1 + `. ` : null} {category.title}
                  </FilterButton>
                </div>
              );
            })}
          </nav>
          <ArtisticBackgroundElement xxlLeft="-25%" left="-10%" marginTop="-200px" opacity="0.8" />
          {data?.categoryList?.map((category, index) => {
            return <TopicDisplay key={category.title + "display"} currentTopic={currentTopic.title} topic={category} index={index} />;
          })}
        </div.row>
      </BoxBackground>
    </section.plan>
  );
};

export default Plan;
