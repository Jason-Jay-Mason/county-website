import { styled } from "@linaria/react";
import { div } from "../components/nav";

const goldenRatio = 1.61803398875;

const colors = {
  white: "#ffffff",
  primaryBlue: "#001E51",
  navLinks: "#686868",
  skyGrey: "#C4C4C4",
  tempestBlue: "#030B1D",
  iceGrey: "#F8F8F8",
  highlightYellow: "#F3DC0B",
  lightBlueGrey: "#FDFDFD",
};
const breakPoints = {
  xsml: "(max-width:480px)",
  sm: "(max-width: 640px)",
  md: "(max-width: 768px)",
  lg: "(max-width:1024px)",
  xl: "(max-width:1280px)",
  xxl: "(max-width:1536px)",
};
const maxMin = {
  contentMaxWidth: "1280px",
};
const spacing = {
  g1: `${(1 / goldenRatio / goldenRatio / goldenRatio).toFixed(2)}rem`,
  g2: `${(1 / goldenRatio / goldenRatio).toFixed(2)}rem`,
  g3: `${(1 / goldenRatio).toFixed(2)}rem`,
  g4: "1rem",
  g5: `${(goldenRatio * 1).toFixed(2)}rem`,
  g6: `${Math.pow(goldenRatio, 2).toFixed(2)}rem`,
  g7: `${Math.pow(goldenRatio, 3).toFixed(2)}rem`,
  g8: `${Math.pow(goldenRatio, 4).toFixed(2)}rem`,
  g9: `${Math.pow(goldenRatio, 5).toFixed(2)}rem`,
  g10: `${Math.pow(goldenRatio, 6).toFixed(2)}rem`,
  g11: `${Math.pow(goldenRatio, 7).toFixed(2)}rem`,
};
const fontSize = {
  xxsml: "0.75rem",
  xsml: "0.875rem",
  sml: "1.25rem",
  med: "1.125rem",
  medlrg: "1.5rem",
  lrg: "1.625rem",
  xlrg: "2.25rem",
  xxlrg: "2.875rem",
  xxxlrg: "3rem",
  huge: "4rem",
};
const typography = {
  medlrg: `
    letter-spacing: 0%;
    line-height: 120%;
    font-weight: 800;
    font-size: ${fontSize.medlrg};
    text-transform: uppercase;
    @media ${breakPoints.sm} {
      font-size: ${fontSize.sml};
    }
  `,
  xlrgLt: `
  line-height: 120%;
  letter-spacing: 0%;
  font-weight: 100;
  text-transform: uppercase;
  font-size: ${fontSize.xlrg};
  @media ${breakPoints.lg} {
    text-align:center; 
    font-size:4vw;
  }
  @media ${breakPoints.sm} {
    font-size: 1.4rem;
  }
`,
  xlrg: `
line-height: 120%;
letter-spacing: 0%;
font-weight: 800;
text-transform: uppercase;
padding-bottom: ${spacing.g4};
font-size: ${fontSize.xlrg};
@media ${breakPoints.lg} {
  text-align:center; 
  font-size:4vw;
}
@media ${breakPoints.sm} {
  font-size: ${fontSize.lrg};
}
`,
  xxlrgLt: `
    line-height: 120%;
    letter-spacing: 0%;
    font-weight: 100;
    text-transform: uppercase;
    font-size: ${fontSize.xxlrg};
    @media ${breakPoints.lg} {
      text-align:center; 
      font-size:4vw;
    }
    @media ${breakPoints.sm} {
      font-size: 1.5rem;
    }
  `,
  xxlrg: `
  line-height: 120%;
  letter-spacing: -2%;
  font-weight: 800;
  text-transform: uppercase;
  font-size: ${fontSize.xxlrg};
  @media ${breakPoints.lg} {
    text-align:center; 
    font-size:4vw;
  }
  @media ${breakPoints.sm} {
    font-size: 1.6rem;
  }
`,
  xxxlrg: `
line-height: 120%;
letter-spacing: -2%;
font-weight: 800;
text-transform: uppercase;
font-size: ${fontSize.xxxlrg};
@media ${breakPoints.lg} {
  text-align:center; 
  font-size:4vw;
}
@media ${breakPoints.sm} {
  font-size: ${fontSize.lrg};
}
`,
  huge: `
    font-weight: 800;
    font-size: ${fontSize.huge};
    line-height: 100%;
    letter-spacing: -0.02em;
    text-transform: uppercase;
    @media ${breakPoints.lg} {
      text-align:center; 
      font-size:5vw;
    }
    @media ${breakPoints.sm} {
      font-size: 2rem;
    }
  `,
};
const boxShadows = {
  button: "0px 0px 10px rgba(0, 30, 81, 0.31)",
  buttonYellow: "0px 0px 13px rgba(243, 220, 11, 0.46)",
  image: "0px 0px 11px rgba(0, 0, 0, 0.58)",
};

const globalButton = `
display:flex;
align-items:center;
justify-content:center;
border-radius: 4px;
transition: all 0.2s ease;
margin: 0 ${spacing.g5} 0 0;
cursor: pointer;
`;

const globalSection = `
  padding-left: ${spacing.g4};
  padding-right: ${spacing.g4};
  display: block;
`;
const globalRow = `
  margin: 0 auto;
  max-width: ${maxMin.contentMaxWidth};
`;
const elements = {
  section: globalSection,
  row: globalRow,
  button: globalButton,
};

const theme = {
  colors: { ...colors },
  breakPoints: { ...breakPoints },
  spacing: { ...spacing },
  fontSize: { ...fontSize },
  boxShadows: { ...boxShadows },
  typography: { ...typography },
  elements: { ...elements },
  maxMin: { ...maxMin },
};
export { theme };
