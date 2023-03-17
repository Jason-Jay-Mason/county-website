import { styled } from '@linaria/react'
import { theme } from '../styles/theme'
import Link from 'next/link'

//#region styles
const { colors, elements, breakPoints, spacing, typography } = theme
const section = {}
section.socialProof = styled.section`
  ${elements.section}
  background-color: ${colors.tempestBlue};
`
const div = {}
div.row = styled.div`
  ${elements.row}
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: ${spacing.g6} 0;
  @media ${theme.breakPoints.lg} {
    text-align: center;
  }
  a {
    color: ${colors.highlightYellow};
    padding: 0 0 0 ${spacing.g2};
  }
`
//#endregion

const SocailProof = ({ data }) => {
  const { googleMapsUrl, facebookUrl } = data || {}

  return (
    <section.socialProof>
      <div.row>
        <p>
          County Line Construction & Excavation is rated 5 stars on
          <Link href={googleMapsUrl || '/'} passHref>
            <a>Google </a>
          </Link>
          &
          <Link href={facebookUrl || '/'} passHref>
            <a>Facebook</a>
          </Link>
        </p>
      </div.row>
    </section.socialProof>
  )
}

export default SocailProof
