import { styled } from "@linaria/react";
import { css } from "linaria";
import { useEffect, useState } from "react";
import { theme } from "../styles/theme";
import useWindowSize from "../hooks/useWindowSize";
import moment from "moment";

//#region styles
const div = {};
div.cardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 50px 0 0;
  p {
    color: #5d697e;
  }
  .profileImg {
    padding-right: ${theme.spacing.g4};
    width: 70px;
    filter: grayscale(100%);
  }
  .fiveStar {
    color: #8693aa;
  }
  :hover {
    .profileImg {
      filter: grayscale(0%);
    }
    p {
      color: ${theme.colors.tempestBlue};
    }
    .fiveStar {
      color: ${theme.colors.highlightYellow};
    }
  }
  @media ${theme.breakPoints.lg} {
    display: none;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    padding: 0 ${theme.spacing.g7};
    .profileImg {
      filter: grayscale(0%);
    }
    p {
      color: ${theme.colors.tempestBlue};
    }
    .fiveStar {
      color: ${theme.colors.highlightYellow};
    }
  }
  @media ${theme.breakPoints.sm} {
    padding: 0 ${theme.spacing.g3} 0 ${theme.spacing.g3};
  }
`;
div.reviewerDetails = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: ${theme.spacing.g3};
`;
div.details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
div.detailsRow = styled.div`
  display: flex;
  flex-direction: row;

  p {
    text-transform: uppercase;
    font-weight: 800;
    line-height: 100%;
    padding-bottom: ${theme.spacing.g3};
  }
  span {
    line-height: 100%;
    font-size: ${theme.fontSize.xsml};
  }
`;

div.reviewMessage = styled.div`
  background-color: ${theme.colors.iceGrey};
  width: 450px;
  border-radius: 4px;
  padding: ${theme.spacing.g5};
  min-height: 310px;
  will-change: max-height;
  p {
    max-height: 230px;
    overflow: hidden;
    transition: max-height 0.3s;
  }
  :hover {
    p {
      max-height: ${(props) => (props.expanded ? "4000px" : "230px")};
      transition: all 0.3s;
    }
  }
  .readmore {
    color: ${theme.colors.primaryBlue};
    cursor: pointer;
  }
  @media ${theme.breakPoints.lg} {
    width: 100%;
  }
`;
div.stars = styled.div`
  display: flex;
  flex-direction: row;
  margin: -2px 7px 0 0;
`;
const displaySelected = css`
  animation: fadeIn 1.2s;
  display: flex;
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

//#endregion

const ReviewCard = ({ data, selected, index }) => {
  const date = moment(data?.date).fromNow() || {};
  const [width, _] = useWindowSize();
  const [readMore, setReadMore] = useState();
  const [expanded, setExpanded] = useState(false);

  if (index) {
    useEffect(() => {
      const handler = setTimeout(() => {
        let element = document.getElementById(`${index}review-card`);
        if (element.scrollHeight > element.clientHeight + 1) {
          setReadMore(true);
        } else {
          setReadMore(false);
        }
      }, 100);
      return () => clearTimeout(handler);
    }, [, width, selected, data]);
  }
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <svg key={i} stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 16 16" className="fiveStar" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 6.204l-5.528-0.803-2.472-5.009-2.472 5.009-5.528 0.803 4 3.899-0.944 5.505 4.944-2.599 4.944 2.599-0.944-5.505 4-3.899z"></path>
      </svg>
    );
  }
  return (
    <div.cardContainer className={selected?.title === data?.title ? displaySelected : ""}>
      <div.reviewerDetails>
        <img className="profileImg" src={data?.profile} alt={`The profile image of ${data?.title}`} />
        <div.details>
          <div.detailsRow>
            <p>{data?.title}</p>
          </div.detailsRow>
          <div.detailsRow>
            <div.stars>{stars}</div.stars>
            <span>{date === "Invalid date" ? "1 month ago" : date}</span>
          </div.detailsRow>
        </div.details>
      </div.reviewerDetails>
      <div.reviewMessage expanded={expanded} onMouseLeave={() => setExpanded(false)}>
        <p id={index ? `${index}review-card` : "blah"}>{data.review}</p>
        {readMore ? (
          <span onClick={() => setExpanded(!expanded)} className="readmore">
            {expanded ? "read less" : "...read more"}
          </span>
        ) : null}
      </div.reviewMessage>
    </div.cardContainer>
  );
};

export default ReviewCard;
