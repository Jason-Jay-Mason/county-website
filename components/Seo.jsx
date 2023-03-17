import Head from "next/head";
import { useRouter } from "next/router";

//#region styles
const div = {};
//#endregion

const Seo = (props) => {
  const customMeta = props;
  const router = useRouter();
  const path = `view-source:http://localhost:3000${router.asPath}`;
  const meta = {
    title: "Excavating Contractor - County Line Construction & Excavation",
    description:
      "County Line Construction is the premier excavation contractor in the Gig Harbor, and Key Peninsula areas.",
    image:
      "https://res.cloudinary.com/countylineexcavation/image/upload/v1644284994/main%20page%20photos/begin-construction_et5jww.jpg",
    type: "website",
    ...customMeta,
  };

  return (
    <Head>
      <title>{meta.title}</title>
      <meta
        name="robots"
        content={`${meta.noFollow ? "nofollow" : "follow"},${meta.noIndex ? "noindex" : "index"}`}
      />
      <meta name="description" content={meta.description} />
      <meta property="og:url" content={path} />
      <link rel="canonical" href={path} />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content="County Line Construction & Excavation" />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content={meta.image} />
      <meta property="twitter:title" content={meta.title} />
      <meta property="twitter:description" content={meta.description} />
      <meta property="twitter:image" content={meta.image} />
      <meta property="twitter:card" content="summary_large_card" />
      {meta.date && <meta property="article:publish_time" content={meta.date} />}
    </Head>
  );
};

export default Seo;
