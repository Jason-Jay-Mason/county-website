import { styled } from "@linaria/react";
import { css } from "linaria";
import { theme } from "../../styles/theme";
import Image from "../image";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Link from "next/link";
//#region component imports
import ServiceButton from "./serviceSlider.serviceButton.jsx";
import Button from "../button";
//#endregion

//#region styles
const div = {};
div.topicDisplay = styled.div`
  z-index: 5;
  display: none;
  min-height: 400px;
`;
div.col = styled.div`
  max-width: 50%;
  min-width: 50%;
  display: flex;
  flex-direction: column;
  :nth-child(1) {
    margin-right: ${theme.spacing.g5};
    @media ${theme.breakPoints.lg} {
      margin-right: 0;
    }
  }
  h3 {
    ${theme.typography.xlrg}
    padding-bottom: ${theme.spacing.g6};
  }
  p {
    padding-bottom: ${theme.spacing.g5};
  }
  @media ${theme.breakPoints.lg} {
    max-width: 100%;
  }
`;
div.buttonSection = styled.div`
  z-index: 5;
  display: flex;
  flex-wrap: wrap;
  padding-top: ${theme.spacing.g5};
  padding-bottom: ${theme.spacing.g7};
  @media ${theme.breakPoints.lg} {
    justify-content: flex-start;
  }
`;
div.beforeAfterContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  right: -60px;
  flex-direction: column;
  margin-bottom: -160px;
  margin-top: -180px;
  height: 200%;
  width: 40vw;
  @media ${theme.breakPoints.xxl} {
    height: 190%;
    width: 46vw;
    right: -20px;
    margin-bottom: -105px;
    margin-top: -130px;
  }
  @media ${theme.breakPoints.lg} {
    position: flex;
    flex-direction: column;
    height: 120vw;
    max-height: 700px;
    width: 100%;
    margin: 0;
    right: 0;
  }
  @media ${theme.breakPoints.md} {
    width: 100%;
  }
`;
div.beforeAfter = styled.div`
  width: 90%;
  height: 100%;
  position: relative;
  background-size: cover;

  transition: all 0.5s ease;
  background-position: center;
  span {
    filter: grayscale(20%);
    border-radius: 15px;
    box-shadow: ${theme.boxShadows.image};
  }
  p {
    color: white;
    position: relative;
    top: 30px;
    left: 20px;
    text-transform: uppercase;
    font-weight: 800;
    margin: 0 20px;
  }
  :nth-child(1) {
    margin-bottom: ${theme.spacing.g4};
    @media ${theme.breakPoints.xxl} {
      margin-bottom: ${theme.spacing.g3};
    }
    filter: grayscale(70%);
  }
  :hover {
    filter: grayscale(5%);
  }
  @media ${theme.breakPoints.md} {
    width: 100%;
    span {
      top: 20px;
      left: 7px;
    }
  }
`;
div.cta = styled.div`
  display: none;
  width: 50%;
  position: relative;
  z-index: 10;
  a {
    cursor: pointer;
  }
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

const TopicDisplay = ({ topic, currentTopic }) => {
  return (
    <>
      <div.topicDisplay className={topic?.title === currentTopic ? displayed : ""}>
        <div.col>
          <h3>{topic?.headline}</h3>
          <ReactMarkdown>{topic?.body}</ReactMarkdown>
          <div.buttonSection>
            {topic?.services?.map((service, index) => {
              let link = "/" + service.title.sys.filename;
              return (
                <Link key={service + index} href={link || "/"} passHref>
                  <a>
                    <ServiceButton
                      key={index + "button"}
                      serviceName={service.title?.data?.serviceName}
                      icon={service.title?.data?.hero?.icon}
                    />
                  </a>
                </Link>
              );
            })}
          </div.buttonSection>
        </div.col>
        <div.col>
          <div.beforeAfterContainer>
            <div.beforeAfter>
              <p>before</p>
              <Image
                src={topic?.beforeImage}
                layout="fill"
                objectFit="cover"
                quality={80}
                width={800}
                placeholder="no-image.svg"
                alt="A picture of some land before it is worked on"
              />
            </div.beforeAfter>
            <div.beforeAfter>
              <p>after</p>
              <Image
                src={topic?.afterImage}
                layout="fill"
                objectFit="cover"
                quality={80}
                width={800}
                placeholder="no-image.svg"
                alt="Some land after excavation work is successfully complete!"
              />
            </div.beforeAfter>
          </div.beforeAfterContainer>
        </div.col>
      </div.topicDisplay>
      <div.cta className={topic.title === currentTopic ? displayed : ""}>
        <Link href={topic?.ctaButtonLink || "/"} passHref>
          <a>
            <Button padding={`${theme.spacing.g5} ${theme.spacing.g6}`} fontSize="1rem">
              {topic.ctaButtonText}
            </Button>
          </a>
        </Link>
      </div.cta>
    </>
  );
};

export default TopicDisplay;
