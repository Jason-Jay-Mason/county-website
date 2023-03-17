import { styled } from '@linaria/react'
import { theme } from '../styles/theme'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import BoxBackground from './subtleBoxBackground'
import Button from './button'
import Link from 'next/link'

//#region styles
const section = {}
section.longText = styled.section`
  position: relative;
  margin-top: -180px;
  margin-bottom: -200px;
  padding: 0 ${theme.spacing.g4};
`
const div = {}

div.row = styled.div`
  ${theme.elements.row}
  padding: ${theme.spacing.g9} ${theme.spacing.g5} ${theme.spacing.g10} ${theme.spacing.g5};
  z-index: 90;
  position: relative;
  a {
    color: ${theme.colors.primaryBlue};
    font-weight: 400;
  }
  h2 {
    text-align: center;
    ${theme.typography.xlrgLt}
    padding-bottom: ${theme.spacing.g5};
    color: ${theme.colors.primaryBlue};
  }
  h3 {
    text-align: center;
    ${theme.typography.xxlrg}
    padding-bottom: ${theme.spacing.g7};
  }
  @media ${theme.breakPoints.lg} {
    padding: ${theme.spacing.g9} ${theme.spacing.g3} ${theme.spacing.g9} ${theme.spacing.g3};
    h3 {
      padding-bottom: ${theme.spacing.g6};
    }
  }
`
div.textRow = styled.div`
  ${theme.elements.row}
  display: grid;
  grid-template-columns: ${(props) => {
    if (props.columnNumber == null || props.columnNumber == 0) {
      return '1fr'
    }
    let frames = ''
    for (let i = 0; i < props.columnNumber; i++) {
      frames = frames + '1fr '
    }
    return frames
  }};

  column-gap: ${theme.spacing.g5};

  @media ${theme.breakPoints.lg} {
    grid-template-columns: 1fr;
    row-gap: ${theme.spacing.g6};
    p {
      padding-bottom: ${theme.spacing.g2};
    }
  }
`
div.buttons = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: ${theme.spacing.g5};
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing.g7} 0 ${theme.spacing.g7} 0;
  @media ${theme.breakPoints.md} {
    flex-direction: column;
    button {
      margin-bottom: ${theme.spacing.g4};
    }
  }
`
//#endregion

const LongText = ({ data }) => {
  const columnNumber = data?.bodyRows?.length
  return (
    <section.longText>
      <BoxBackground backgroundColor={theme.colors.lightBlueGrey}>
        <div.row>
          <h2>{data?.subHeadline}</h2>
          <h3>{data?.headline}</h3>

          {data?.bodyRows?.map((row, index) => {
            let columnNumber = row.bodyColumns?.length
            return (
              <div.textRow columnNumber={columnNumber} key={index + 'bodyRow'}>
                {row.bodyColumns?.map((column, index) => {
                  return <ReactMarkdown key={index}>{column.body}</ReactMarkdown>
                })}
              </div.textRow>
            )
          })}
          <div.buttons>
            {data?.ctaButtonToggle ? (
              <Link href={data?.ctaButtonLink ? data?.ctaButtonLink : ''} passHref>
                <a>
                  <Button
                    backgroundColor={theme.colors.primaryBlue}
                    fontSize='1rem'
                    padding={`${theme.spacing.g5} ${theme.spacing.g6}`}
                  >
                    {data?.ctaButtonText}
                  </Button>
                </a>
              </Link>
            ) : null}
            {data?.ctaButtonToggle2 ? (
              <Link href={data?.ctaButtonLink2 ? data?.ctaButtonLink2 : ''} passHref>
                <a>
                  <Button
                    backgroundColor={theme.colors.tempestBlue}
                    fontSize='1rem'
                    padding={`${theme.spacing.g5} ${theme.spacing.g6}`}
                  >
                    {data?.ctaButtonText2}
                  </Button>
                </a>
              </Link>
            ) : null}
          </div.buttons>
        </div.row>
      </BoxBackground>
    </section.longText>
  )
}

export default LongText
