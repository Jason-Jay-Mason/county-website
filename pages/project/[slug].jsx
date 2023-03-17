import { staticRequest } from 'tinacms'
import { useTina } from 'tinacms/dist/edit-state'
import Query from '../../.tina/tools/queries/query'
import dynamic from 'next/dynamic'

import Project from '../../components/project/project'
import Seo from '../../components/Seo'
import NavBar from '../../components/nav'
import PrefooterCTA from '../../components/prefooterCta'
const Footer = dynamic(() => import('../../components/footer'))

const query = `    query GetHomePageData($relativePath: String!) {
  ${Query.getGlobalDocument}
  ${Query.getProjectDynamicDocument}
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
  const projectPage = data?.getProjectDocument?.data
  return (
    <>
      <Seo {...seo} />
      <NavBar isAbsolute={false} data={{ header, contactInfo }} />
      <Project data={projectPage} />
      <PrefooterCTA />
      <Footer data={{ footer, contactInfo }} />
    </>
  )
}

export const getStaticProps = async (context) => {
  const { slug } = context.params
  const variables = { relativePath: `${slug}.md` }
  let data = null
  try {
    data = await staticRequest({
      query,
      variables,
    })
  } catch (e) {
    console.log(e)
  }
  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data,
      variables,
      slug,
    },
  }
}

export async function getStaticPaths() {
  const query = `
  query GetProjectList{
    ${Query.getProjectFileNames}
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
    paths: data.getProjectList.edges.map((project) => ({
      params: { slug: project.node.sys.filename },
    })),
    fallback: 'blocking',
  }
}
