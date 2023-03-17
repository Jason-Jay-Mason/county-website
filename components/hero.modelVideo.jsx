import { styled } from "@linaria/react";
import { theme } from "../styles/theme";
import Link from "next/link";

const div = {};
div.modelVideo = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: #0000008f;
  z-index: 10;
  display: ${(props) => (props.isVisible ? "flex" : "none")};
  div {
    margin: auto;
  }
  iframe {
    width: 890px;
    height: 500px;
    display: ${(props) => (props.isVisible ? "block" : "none")};
    @media ${theme.breakPoints.lg} {
      width: 100vw;
      height: 500px;
    }
    @media ${theme.breakPoints.sm} {
      width: 100vw;
      height: 50vh;
    }
  }
`;
const ModelVideo = ({ videoVisible, src }) => {
  return (
    <>
      <div.modelVideo isVisible={videoVisible}>
        <div>
          <iframe modestbranding="1" disablekb="1" color="white" src={videoVisible ? src : null} title="County Line Construction" frameBorder="0" allowFullScreen="1" playsInline="1"></iframe>
        </div>
      </div.modelVideo>
    </>
  );
};

export default ModelVideo;
