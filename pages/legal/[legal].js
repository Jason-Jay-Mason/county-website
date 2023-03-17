import { staticRequest } from 'tinacms'
import { useTina } from 'tinacms/dist/edit-state'
import Query from '../../.tina/tools/queries/query'
import dynamic from 'next/dynamic'

import Seo from '../../components/Seo'
import NavBar from '../../components/nav'
import LegalPage from '../../components/genericTextSection'
import Page404 from '../../components/Page404'
const Footer = dynamic(() => import('../../components/footer'))

const query = `query GetHomePageData($relativePath: String!) {
        ${Query.getGlobalDocument}
        ${Query.getLegalDynamicDocument}
      }
`

export default function _(props) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query,
    variables: props.variables,
    data: props.data,
  })
  const { header, footer, contactInfo, seo } = data?.getGlobalDocument?.data || {}
  const legalPage = data?.getLegalDocument?.data
  if (legalPage) {
    return (
      <>
        <Seo {...seo} />
        <NavBar isAbsolute={false} data={{ header, contactInfo }} />
        <LegalPage data={legalPage} />
        <Footer data={{ footer, contactInfo }} />
      </>
    )
  } else {
    return <Page404 />
  }
}

export const getStaticProps = async (context) => {
  const { legal } = context.params
  const variables = { relativePath: `${legal}.md` }
  let data = null
  try {
    data = await staticRequest({
      query,
      variables,
    })
  } catch {}

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data,
      variables,
    },
  }
}

export async function getStaticPaths() {
  const query = `
      query GetProjectList{
        ${Query.getLegalList}
      }
    `
  let data = null
  try {
    data = await staticRequest({
      query,
    })
  } catch (err) {
    console.log(err)
  }
  return {
    paths: data.getLegalList.edges.map((legal) => ({
      params: { legal: legal.node.sys.filename },
    })),
    fallback: 'blocking',
  }
}
