import { styled } from "@linaria/react";
import { theme } from "../../styles/theme";
import Link from "next/link";
import Image from "../image";
import Date from "../date";
import Button from "../button";

//#region styles
const div = {};
div.imageContainer = styled.div`
  position: relative;
  height: ${theme.spacing.g10};
  width: 95%;
  margin: 0 auto;
  @media ${theme.breakPoints.sm} {
    width: 97%;
  }
  span {
    border-radius: 12px;
    z-index: 1;
  }
  .image-overlay {
    transition: all 0.2s ease;
    background-color: ${theme.colors.tempestBlue}27;
    height: ${theme.spacing.g7};
    display: flex;
    z-index: 4;
    width: 100%;
    bottom: 0;
    position: absolute;
    border-radius: 0px 0px 12px 12px;
    flex-direction: column;
    padding: 0 ${theme.spacing.g5};
    :hover {
    }
  }
  h6 {
    visibility: collapse;
    color: transparent;
    transition: all 0.1s ease;
    text-transform: capitalize;
    font-size: 1em;
    padding-top: ${theme.spacing.g5};
  }
  p {
    top: 35%;
    left: ${theme.spacing.g5};
    color: white;
    align-self: center;
    padding: 0;
    transition: all 0.2s ease;
    position: absolute;
  }
  button {
    visibility: collapse;
    opacity: 0;
    position: absolute;
    bottom: ${theme.spacing.g5};
  }

  :hover {
    transition: all 0.2s ease;
    .image-overlay {
      background-color: ${theme.colors.primaryBlue}6B;
      height: 100%;
      border-radius: 12px;
    }
    p {
      transform: translatey(0);
      top: 20%;
      font-size: 0.9rem;
      transition: all 0.2s ease;
    }
    h6 {
      position: relative;
      transition: all 0.1s ease;
      visibility: visible;
      color: white;
    }
    button {
      visibility: visible;
      opacity: 1;
    }
  }
`;
//#endregion

const ImageCard = ({ data }) => {
  const link = `/project/${data?.fileName}`;

  return (
    <Link href={link} passHref>
      <a>
        <div.imageContainer>
          <div className="image-overlay">
            <h6>{data.title.length > 20 ? data.title.slice(0, 20) + "..." : data.title}</h6>
            <Date>{data?.date || "2021-09-21T06:00:00.000Z"}</Date>
            <Button backgroundColor="rgba(255, 255, 255, 0.09" boxShadow="none" display="flex" hvrBackgroundColor="rgba(255, 255, 255, 0.1">
              View Project
            </Button>
          </div>
          <Image src={data?.featuredImage} layout="fill" quality={80} width={400} objectFit="cover" placeholder="/no-image.svg" alt="Land after excavation work is complete" />
        </div.imageContainer>
      </a>
    </Link>
  );
};

export default ImageCard;
