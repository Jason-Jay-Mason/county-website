import { staticRequest } from "tinacms";
import { useTina } from "tinacms/dist/edit-state";
import Query from "../.tina/tools/queries/query";
import dynamic from "next/dynamic";

import Seo from "../components/Seo";
import Hero from "../components/hero";
import ProjectGrid from "../components/projects/projectGrid";
import NavBar from "../components/nav";

const Footer = dynamic(() => import("../components/footer"));

const query = `{
    ${Query.getGlobalDocument}
    ${Query.getProjectsList}
    ${Query.getProjectsPage}
}
`;

export default function Projects(props) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query,
    variables: {},
    data: props.data,
  });

  const { reviews, header, footer, contactInfo } = data?.getGlobalDocument?.data;
  const projects = data?.getProjectList?.edges?.map((project) => {
    return { fileName: project.node.sys.filename, ...project.node.data };
  });
  const { hero, seo } = data?.getProjectsDocument?.data;
  return (
    <>
      <Seo {...seo} />
      <NavBar isAbsolute={true} data={{ header, contactInfo }} />
      <Hero data={hero} />
      <ProjectGrid data={projects} />
      <Footer data={{ footer, contactInfo }} map={true} />
    </>
  );
}

export const getStaticProps = async () => {
  const variables = {};
  let data = null;
  try {
    data = await staticRequest({
      query,
      variables,
    });
  } catch {}

  return {
    props: {
      data,
    },
  };
};
