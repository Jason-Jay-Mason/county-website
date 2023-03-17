import { styled } from "@linaria/react";
import { theme } from "../styles/theme";

const div = {};
div.container = styled.div`
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 60px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  @media ${theme.breakPoints.lg} {
    display: flex;
  }
  @media ${theme.breakPoints.sm} {
    width: 60px;
    height: 40px;
  }
`;
div.burger = styled.div`
  width: 50px;
  height: 6px;
  background: ${(props) => (props.isActive ? "transparent" : theme.colors.skyGrey)};
  border-radius: 5px;
  transition: all 0.2s ease;
  transform: ${(props) => (props.isActive ? "translatey(0px)" : "translateX(0px)")};
  ::before,
  ::after {
    content: "";
    position: absolute;
    width: 50px;
    height: 6px;
    background: ${theme.colors.skyGrey};
    border-radius: 5px;
    transition: all 0.2s ease;
  }
  ::before {
    transform: ${(props) => (props.isActive ? `rotate(45deg) ` : "translateY(-1rem)")};
  }
  ::after {
    transform: ${(props) => (props.isActive ? `rotate(-45deg) ` : "translateY(1rem)")};
  }
`;

const Hamburger = ({ isActive }) => {
  return (
    <>
      <div.container isActive={isActive}>
        <div.burger isActive={isActive}></div.burger>
      </div.container>
    </>
  );
};

export default Hamburger;
