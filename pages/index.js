import { staticRequest } from "tinacms";
import { useTina } from "tinacms/dist/edit-state";
import Query from "../.tina/tools/queries/query";
import dynamic from "next/dynamic";

import Seo from "../components/Seo";
const NavBar = dynamic(() => import("../components/nav"));
const Hero = dynamic(() => import("../components/home/hero"));
import SocialProof from "../components/socialProofBar";
const Services = dynamic(() => import("../components/home/servicesSlider"));
const Plan = dynamic(() => import("../components/home/planSlider"));
const ReviewSlider = dynamic(() => import("../components/reviewSlider"));
import PrefooterCTA from "../components/prefooterCta";
const Footer = dynamic(() => import("../components/footer"));

const query = `{
  ${Query.getGlobalDocument}
  ${Query.getHomePage}
}
`;

export default function Home(props) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query,
    variables: {},
    data: props.data,
  });

  const { reviews, header, footer, contactInfo } = data?.getGlobalDocument?.data;
  const { hero, serviceSlider, planSlider, preFooterCTA, seo } = data?.getHomeDocument?.data;
  return (
    <>
      <Seo {...seo} />
      <NavBar isAbsolute={false} data={{ header, contactInfo }} />
      <Hero data={hero} contactInfo={contactInfo} />
      <SocialProof data={contactInfo} />
      <Services data={serviceSlider} />
      <Plan data={planSlider} />
      <ReviewSlider data={reviews} />
      <PrefooterCTA data={preFooterCTA} />
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
