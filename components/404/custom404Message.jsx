import { styled } from '@linaria/react'
import { theme } from '../../styles/theme'
import Button from '../button'
import Link from 'next/link'

const { elements, typography, spacing, colors, fontSize, breakPoints } = theme
//#region styles
const section = {}
section.custom404 = styled.section`
  ${elements.section}
  height:100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const div = {}
div.row = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: ${spacing.g8} ${spacing.g4} ${spacing.g10} ${spacing.g4};
  ${elements.row}
  h1 {
    ${typography.huge}
    text-align: center;
    color: ${colors.primaryBlue};
    padding-bottom: ${spacing.g7};
  }
  h2 {
    font-size: ${fontSize.xlrg};
    font-weight: 300;
    text-align: center;
    padding-bottom: ${spacing.g7};
    @media ${breakPoints.lg} {
      font-size: ${fontSize.lrg};
    }
  }
  a,
  button {
    margin: 0 auto;
    @media ${breakPoints.lg} {
      font-size: 1rem;
    }
  }
`
//#endregion

const Custom404Message = () => {
  return (
    <section.custom404>
      <div.row>
        <h1>404 Page Not Found</h1>
        <h2>It looks like this page doesn't exist, are you sure this is where it was at?</h2>
        <Link href='/' passHref>
          <a>
            <Button fontSize={fontSize.med} padding={`${spacing.g5} ${spacing.g7}`}>
              Back to Home
            </Button>
          </a>
        </Link>
      </div.row>
    </section.custom404>
  )
}

export default Custom404Message
