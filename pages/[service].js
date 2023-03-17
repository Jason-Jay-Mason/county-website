import { staticRequest } from 'tinacms'
import { useTina } from 'tinacms/dist/edit-state'
import Query from '../.tina/tools/queries/query'
import dynamic from 'next/dynamic'
import { theme } from '../styles/theme'
import Seo from '../components/Seo'
import NavBar from '../components/nav'
import Hero from '../components/services/hero.services'
import FeaturedGrid from '../components/featuredGrid'
import LongText from '../components/longText'
const BeforeAfterSlider = dynamic(() => import('../components/beforeAfterSlider'))
const ReviewSlider = dynamic(() => import('../components/reviewSlider'))
const Footer = dynamic(() => import('../components/footer'))

const query = `query GetHomePageData($relativePath: String!) {
        ${Query.getGlobalDocument}
				${Query.getServiceDynamicDocument}
    		${Query.getProjectsList}
      }
`

export default function _(props) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query,
    variables: props.variables,
    data: props.data,
  })

  console.log(props)
  const { header, reviews, footer, contactInfo } = data?.getGlobalDocument?.data
  const { hero, featuredGrid, longText, seo } = data?.getServiceDocument?.data

  const projectBeforeAfters = data?.getProjectList?.edges
    .filter((project) => {
      let { afterImage, beforeImage, deactivate } = project.node.data
      if (afterImage && beforeImage && (deactivate === null || deactivate === false)) {
        return project
      }
    })
    .map((project) => {
      let { afterImage, beforeImage, title } = project.node.data
      return { beforeImage: beforeImage, afterImage: afterImage, title: title }
    })

  return (
    <>
      <Seo {...seo} />
      <NavBar isAbsolute={false} data={{ header, contactInfo }} />
      <Hero data={hero} />
      <FeaturedGrid maxCol='3' data={featuredGrid} />
      <BeforeAfterSlider data={projectBeforeAfters} />
      <LongText data={longText} />
      <ReviewSlider data={reviews} paddingBottom={theme.spacing.g10} />
      <Footer data={{ footer, contactInfo }} />
    </>
  )
}

export const getStaticProps = async (context) => {
  const { service } = context.params
  const variables = { relativePath: `${service}.md` }
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
				${Query.getServiceList}
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
    paths: data.getServiceList.edges.map((service) => ({
      params: { service: service.node.sys.filename },
    })),
    fallback: 'blocking',
  }
}
