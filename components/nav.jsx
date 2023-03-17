import { styled } from "@linaria/react";
import { theme } from "../styles/theme";
import { useState } from "react";
import Link from "next/link";

//#region subcomponent imports
import Modalnav from "./nav.modal";
import Hamburger from "./nav.hamburger";
import Subheader from "./nav.subheader";
import NavLink from "./nav.link";
import CtaButton from "./nav.ctaButton";
import DropdownLink from "./nav.dropdownLink";
//#endregion

//#region stlyes
const div = {};
div.section = styled.div`
  padding: 0 ${theme.spacing.g4};
  z-index: 2;
  position: ${(props) => (props.isAbsolute ? "absolute" : "relative")};
  max-width: 100%;
  width: 100%;
  background-color: ${({ dropdownActive }) => (dropdownActive ? "white" : "transparent")};
  transition: all 0.2s ease;
  button {
    background-color: ${(props) => {
      if (props.color === "black" && props.dropdownActive === false) {
        return "black";
      }
      return theme.colors.primaryBlue;
    }};
  }
  img {
    filter: ${(props) => {
      if (props.color === "black" && props.dropdownActive === false) {
        return "brightness(0%)";
      }
      return "none";
    }};
  }
  @media ${theme.breakPoints.lg} {
    position: relative;
    button {
      background-color: ${theme.colors.primaryBlue};
    }
    img {
      filter: none;
    }
  }
`;
div.row = styled.div`
  padding: 7px 0;
  width: 100%;
  max-width: 1400px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;
div.col = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  nav {
    display: flex;
  }
`;
const img = {};
img.logo = styled.img`
  height: 4.6rem;
  padding: 0px 20px 0px 0px;
  margin: 0;
  @media ${theme.breakPoints.lg} {
    height: ${theme.spacing.g7};
  }
  @media ${theme.breakPoints.sm} {
    height: 55px;
  }
`;
//#endregion styles

const Navbar = ({ data, isAbsolute, color }) => {
  const [modalActive, setModalActive] = useState(false);
  const [dropdownActive, setDropdownActive] = useState(false);
  const { nav } = data?.header || {};
  return (
    <>
      <Subheader data={data?.contactInfo} />
      <div.section isAbsolute={isAbsolute} dropdownActive={dropdownActive} color={color}>
        <div.row>
          <div.col>
            <Link href="/" passHref>
              <a>
                <img.logo
                  src="https://res.cloudinary.com/countylineexcavation/image/upload/v1644984460/logos/county-line-construction-logo_zvguix.svg"
                  alt="The County Line Excavation contractor Logo"
                />
              </a>
            </Link>
            <nav>
              {nav?.map((link, index) => {
                if (link.href && link.label) {
                  return <NavLink key={link.label + index} link={link} />;
                } else if (link.label === "Services") {
                  return (
                    <div
                      key={link.label}
                      onClick={() => {
                        setDropdownActive(!dropdownActive);
                      }}
                    >
                      <DropdownLink link={link} />
                    </div>
                  );
                }
              })}
            </nav>
          </div.col>
          <div.col>
            <NavLink link={{ href: "/contact", label: "Contact" }} />
            <CtaButton
              link="/contact"
              phone={data?.contactInfo?.phoneNumber}
              className="desktopCta"
            >
              Call Now
            </CtaButton>

            <div
              onClick={() => {
                setModalActive(!modalActive);
              }}
            >
              <Hamburger isActive={modalActive} />
            </div>
          </div.col>
        </div.row>
      </div.section>
      <Modalnav
        data={{ links: nav, contactInfo: data?.contactInfo }}
        isActive={modalActive}
        setActive={setModalActive}
      />
    </>
  );
};

export default Navbar;
