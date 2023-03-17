import { staticRequest } from "tinacms";
import { useTina } from "tinacms/dist/edit-state";
import Query from "../.tina/tools/queries/query";
import dynamic from "next/dynamic";

import NavBar from "../components/nav";
import Hero from "../components/hero";
import ContactInfo from "../components/contact/contactInfo";
import ServiceAreas from "../components/contact/serviceAreas";
const Footer = dynamic(() => import("../components/footer"));

const query = `{
    ${Query.getGlobalDocument}
    ${Query.getContactPage}
}
`;

export default function Contact(props) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query,
    variables: {},
    data: props.data,
  });
  const { header, contactInfo, footer } = data?.getGlobalDocument?.data;
  const { hero, serviceAreas } = data?.getContactDocument?.data;
  return (
    <>
      <NavBar isAbsolute={true} data={{ header, contactInfo }} />
      <Hero data={hero} />
      <ContactInfo data={contactInfo} />
      <ServiceAreas data={serviceAreas} />
      <Footer data={{ footer, contactInfo }} />
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
  } catch (e) {
    console.error(e);
  }

  return {
    props: {
      data,
    },
  };
};
