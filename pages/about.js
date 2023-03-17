import { staticRequest } from "tinacms";
import { useTina } from "tinacms/dist/edit-state";
import Query from "../.tina/tools/queries/query";
import dynamic from "next/dynamic";
import { theme } from "../styles/theme";

import Seo from "../components/Seo";
import NavBar from "../components/nav";
import Hero from "../components/hero";
import SocialProof from "../components/socialProofBar";
import GenericFeaturedSection from "../components/genericFeaturedSection";
import FeaturedGrid from "../components/featuredGrid";
import LongText from "../components/longText";
const BeforeAfterSlider = dynamic(() =>
  import("../components/beforeAfterSlider")
);
const ReviewSlider = dynamic(() => import("../components/reviewSlider"));

const Footer = dynamic(() => import("../components/footer"));

const query = `{
    ${Query.getGlobalDocument}
    ${Query.getAboutPage}
    ${Query.getProjectsList}
}
`;

export default function About(props) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query,
    variables: {},
    data: props.data,
  });
  const { header, reviews, footer, contactInfo } =
    data?.getGlobalDocument?.data;
  const { hero, featuredSection, featuredGrid, longText, seo } =
    data?.getAboutDocument?.data;

  const projectBeforeAfters = data?.getProjectList?.edges
    .filter((project) => {
      let { afterImage, beforeImage, deactivate } = project.node.data;
      if (
        afterImage &&
        beforeImage &&
        (deactivate === null || deactivate === false)
      ) {
        return project;
      }
    })
    .map((project) => {
      let { afterImage, beforeImage, title } = project.node.data;
      return { beforeImage: beforeImage, afterImage: afterImage, title: title };
    });
  return (
    <>
      <Seo {...seo} />
      <NavBar isAbsolute={true} data={{ header, contactInfo }} />
      <Hero data={hero} />
      <SocialProof data={contactInfo} />
      <GenericFeaturedSection data={featuredSection} />
      <FeaturedGrid maxCol="3" data={featuredGrid} />
      <BeforeAfterSlider data={projectBeforeAfters} />
      <LongText data={longText} />
      <ReviewSlider data={reviews} paddingBottom={theme.spacing.g10} />
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
  } catch {
    // swallow errors related to document creation
  }

  return {
    props: {
      data,
      //myOtherProp: 'some-other-data',
    },
  };
};
