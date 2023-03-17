import { staticRequest } from 'tinacms'
import { useTina } from 'tinacms/dist/edit-state'
import Query from '../.tina/tools/queries/query'
import dynamic from 'next/dynamic'

import NavBar from '../components/nav'
import FormPage from '../components/form/formPage.requestBid'
const Footer = dynamic(() => import('../components/footer'))

const query = `{
    ${Query.getGlobalDocument}
		${Query.getServiceList}
}
`

export default function About(props) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query,
    variables: {},
    data: props.data,
  })

  const services = data?.getServiceList?.edges
  const { header, footer, contactInfo } = data?.getGlobalDocument?.data

  return (
    <>
      <NavBar color='black' isAbsolute={true} data={{ header, contactInfo }} />
      <FormPage data={{ services }} />
      <Footer data={{ footer, contactInfo }} map={true} />
    </>
  )
}

export const getStaticProps = async () => {
  const variables = {}
  let data = null
  try {
    data = await staticRequest({
      query,
      variables,
    })
  } catch {
    // swallow errors related to document creation
  }

  return {
    props: {
      data,
      //myOtherProp: 'some-other-data',
    },
  }
}
