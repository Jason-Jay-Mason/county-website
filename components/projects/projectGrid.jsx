import { styled } from "@linaria/react";
import { theme } from "../../styles/theme";
import ImageCard from "./projectGrid.imageCard";

const { spacing } = theme;
//#region styles
const section = {};
section.projectGrid = styled.section``;
const div = {};
div.row = styled.div`
  ${theme.elements.row}
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  row-gap: ${spacing.g4};
  padding: 0 0 ${spacing.g10} 0;
  @media ${theme.breakPoints.xl} {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media ${theme.breakPoints.lg} {
    grid-template-columns: 1fr 1fr;
  }
  @media ${theme.breakPoints.sm} {
    grid-template-columns: 1fr;
  }
`;

//#endregion

const ProjectGrid = ({ data }) => {
  const validProjects = data?.filter((project) => {
    if ((project.deactivate === false || project.deactivate === null) && project.featuredImage && project.title) {
      return project;
    }
  });

  return (
    <section.projectGrid>
      <div.row>
        {validProjects.map((project, index) => (
          <ImageCard key={index + "imgc"} data={project} />
        ))}
      </div.row>
    </section.projectGrid>
  );
};

export default ProjectGrid;
