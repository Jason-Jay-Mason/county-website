import { styled } from "@linaria/react";
import { theme } from "../styles/theme";

//#region styles
const button = {};
button.play = styled.button`
  ${theme.elements.button}
  padding: ${theme.spacing.g4} 3rem ${theme.spacing.g4} 2rem;
  background: rgba(0, 0, 0, 0.05);
  color: white;
  border: 3px solid white;
  font-weight: 300;
  font-size: 18px;
  * {
    margin: 0 10px 0 10px;
  }
  :hover {
    background: rgba(0, 0, 0, 0.3);
  }
  @media ${theme.breakPoints.sm} {
    font-size: 16px;
    margin: 10px 0 0 0;
    width: 100%;
  }
`;
//#endregion

const PlayButton = ({ children }) => {
  return (
    <button.play>
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="26px" width="26px" xmlns="http://www.w3.org/2000/svg">
        <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm144.1 454.9L437.7 677.8a8.02 8.02 0 0 1-12.7-6.5V353.7a8 8 0 0 1 12.7-6.5L656.1 506a7.9 7.9 0 0 1 0 12.9z"></path>
      </svg>
      {children}
    </button.play>
  );
};

export default PlayButton;