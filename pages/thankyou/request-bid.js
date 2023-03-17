import { staticRequest } from 'tinacms'
import { useTina } from 'tinacms/dist/edit-state'
import Query from '../../.tina/tools/queries/query'
import dynamic from 'next/dynamic'

import NavBar from '../../components/nav'
import ThankYouMessage from '../../components/thankYouMessage'
const Footer = dynamic(() => import('../../components/footer'))

const query = `{
  ${Query.getGlobalDocument}
}
`

export default function Custom404(props) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query,
    variables: {},
    data: props.data,
  })
  const { header, footer, contactInfo } = data?.getGlobalDocument?.data
  return (
    <>
      <NavBar isAbsolute={false} data={{ header, contactInfo }} />
      <ThankYouMessage />
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
