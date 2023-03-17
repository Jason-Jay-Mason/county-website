import { styled } from '@linaria/react'
import { theme } from '../styles/theme'
import Button from './button'
import Link from 'next/link'

const { elements, typography, spacing, colors, fontSize, breakPoints } = theme
//#region styles
const section = {}
section.thankyou = styled.section`
  ${elements.section}
`
const div = {}
div.row = styled.div`
  display: flex;
  flex-direction: column;
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

const ThankYouMessage = () => {
  return (
    <section.thankyou>
      <div.row>
        <h1>Bid request sent!</h1>
        <h2>Thanks for requesting a bid! We will contact you ASAP!</h2>
        <Link href='/' passHref>
          <a>
            <Button fontSize={fontSize.med} padding={`${spacing.g5} ${spacing.g7}`}>
              Back to Home
            </Button>
          </a>
        </Link>
      </div.row>
    </section.thankyou>
  )
}

export default ThankYouMessage
