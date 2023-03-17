import { styled } from "@linaria/react";
import { theme } from "../styles/theme";
import Image from "next/image";
//#region styles
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
  justify-content: center;
  p {
    color: white;
    cursor: pointer;
  }
`;

div.photoContainer = styled.div`
  align-self: center;

  position: absolute;
  width: 100%;
  height: 100%;
  max-width: 1000px;
  max-height: 90vh;
  object-fit: cover;
`;
div.close = styled.div`
  padding: ${theme.spacing.g5} ${theme.spacing.g4} ${theme.spacing.g4} ${theme.spacing.g4};
  margin-right: auto;
  display: flex;
  align-items: center;
  flex-direction: row;

  height: 20px;
  p {
    padding-left: 10px;
  }
`;
//#endregion

const Model = ({ visible, image, alt }) => {
  return (
    <>
      <div.modelVideo isVisible={visible}>
        <div.close>
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" color="white" height="30px" width="30px" xmlns="http://www.w3.org/2000/svg">
            <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 0 1-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"></path>
          </svg>
          <p>CLOSE</p>
        </div.close>

        {image ? (
          <div.photoContainer>
            <Image src={image} layout="fill" quality={80} objectFit="contain" objectPosition="center center" alt={`An additional picture for the project ${alt && alt}`} />
          </div.photoContainer>
        ) : (
          "null"
        )}
      </div.modelVideo>
    </>
  );
};

export default Model;
