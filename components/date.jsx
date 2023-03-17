import { styled } from "@linaria/react";
import { theme } from "../styles/theme";
import moment from "moment";

//#region styles
const p = {};
p.date = styled.p`
  padding: 0 0 ${theme.spacing.g5} 0;
  font-size: ${theme.fontSize.xxsml};
`;
//#endregion

const Date = ({ children }) => {
  let date = moment(children).format("MMMM Do YYYY");
  return <p.date>{date}</p.date>;
};

export default Date;
