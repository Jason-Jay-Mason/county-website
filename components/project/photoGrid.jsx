import { styled } from "@linaria/react";
import { theme } from "../../styles/theme";
import Image from "next/image";
import Model from "../miscModal";
import { useState } from "react";

//#region styles
const div = {};
div.photos = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  row-gap: ${theme.spacing.g5};
  @media ${theme.breakPoints.xl} {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media ${theme.breakPoints.md} {
    grid-template-columns: 1fr 1fr;
  }
`;
div.photoContainer = styled.div`
  position: relative;
  width: 90%;
  height: 200px;
  span {
    border-radius: 7px;
    box-shadow: ${theme.boxShadows.image};
    filter: grayscale(70%);
    cursor: pointer;
    :hover {
      filter: grayscale(5%);
    }
  }
  @media ${theme.breakPoints.md} {
    width: 95%;
    padding-top: ${theme.spacing.g5};
    height: 40vw;
  }
`;
//#endregion

const PhotoGrid = ({ data, alt }) => {
  const [visible, setVisible] = useState(false);
  const [currentImage, setImage] = useState(null);
  return (
    <>
      <div onClick={() => setVisible(false)}>
        <Model visible={visible} image={currentImage} alt={alt && alt} />
      </div>
      <div.photos>
        {data?.map((photo, index) => {
          return (
            <div.photoContainer
              key={index + "photo container"}
              onClick={() => {
                setVisible(true);
                setImage(photo.title || "/no-image.svg");
              }}
            >
              <Image src={photo.title || "/no-image.svg"} layout="fill" quality={30} objectFit="cover" objectPosition="center center" alt={alt && alt} />
            </div.photoContainer>
          );
        })}
      </div.photos>
    </>
  );
};

export default PhotoGrid;
