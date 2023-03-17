import { styled } from "@linaria/react";
import { theme } from "../styles/theme";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

//#region styles
const section = {};
section.genericText = styled.section`
  ${theme.elements.section}
`;

const div = {};
div.row = styled.div`
  padding: ${theme.spacing.g7} ${theme.spacing.g4};
  ${theme.elements.row}
  h1 {
    ${theme.typography.xlrg}
    padding-bottom: ${theme.spacing.g4};
  }
  h2 {
    ${theme.typography.medlrg}
    padding: ${theme.spacing.g5} 0 ${theme.spacing.g4} 0;
  }
  p,
  ul {
    padding-bottom: ${theme.spacing.g4};
  }
`;

//#endregion

const LegalPage = ({ data }) => {
  return (
    <section.genericText>
      <div.row>
        <h1>{data?.legalDocumentTitle}</h1>
        <ReactMarkdown>{data?.body}</ReactMarkdown>
      </div.row>
    </section.genericText>
  );
};

export default LegalPage;
