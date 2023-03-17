import dynamic from "next/dynamic";
import { TinaEditProvider } from "tinacms/dist/edit-state";
import Head from "next/head";
const TinaCMS = dynamic(() => import("tinacms"), { ssr: false });

//#region Exporting global styles
import globalcss from "../styles/globals";
export const globalStyles = globalcss;
//#endregion

const branch = "main";
// When working locally, hit our local filesystem.
// On a Vercel deployment, hit the Tina Cloud API
const apiURL =
  process.env.NODE_ENV == "development"
    ? "http://localhost:4001/graphql"
    : `https://content.tinajs.io/content/${process.env.NEXT_PUBLIC_TINA_CLIENT_ID}/github/${branch}`;

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <TinaEditProvider
        editMode={
          <TinaCMS
            //media store config
            mediaStore={async () => {
              // Load media store dynamically so it only loads in edit mode
              const pack = await import("next-tinacms-cloudinary");
              return pack.TinaCloudCloudinaryMediaStore;
            }}
            cmsCallback={(cms) => {
              //this is the new admin section which is not ready for marcus yet
              cms.flags.set("tina-admin", false);
              //this is the markdown editing plugin
              import("react-tinacms-editor").then((field) => {
                cms.plugins.add(field.MarkdownFieldPlugin);
              });
              //this is a custom field plugin for a labeled group list
              import("../.tina/plugins.tsx").then(({ labeledGroupList }) => {
                cms.fields.add(labeledGroupList);
              });
            }}
            //creating the global form here with the createGlobalForm function
            formifyCallback={({ formConfig, createForm, createGlobalForm }) => {
              if (formConfig.id === "getGlobalDocument") {
                return createGlobalForm(formConfig);
              }
              return createForm(formConfig);
            }}
            documentCreatorCallback={{
              //redirect after a new document is created
              onNewDocument: ({ collection: { slug }, breadcrumbs }) => {
                if (slug === "legal") {
                  const relativeUrl = `/${breadcrumbs.join("/")}`;
                  return (window.location.href = relativeUrl);
                } else {
                  const relativeUrl = `/${slug}/${breadcrumbs.join("/")}`;
                  return (window.location.href = relativeUrl);
                }
              },

              //filter the collections that can be created
              filterCollections: (options) => {
                return options.filter(
                  (option) =>
                    option.label === "Project" ||
                    option.label === "Service" ||
                    option.label === "Legal"
                );
              },
            }}
            //api url for tina cms cloud
            apiURL={apiURL}
          >
            <Component {...pageProps} />
          </TinaCMS>
        }
      >
        <Component {...pageProps} />
      </TinaEditProvider>
    </>
  );
};

export default App;
