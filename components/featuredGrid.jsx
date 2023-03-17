import { styled } from '@linaria/react'
import { theme } from '../styles/theme'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

//#region component imports
import ArtisticBackgroundElement from './artisticBgElement.topogrophy'
//#endregion

//#region styles
const section = {}
section.featuredGrid = styled.section`
  background-color: ${theme.colors.tempestBlue};
  padding: 200px 0 350px 0;
  @media ${theme.breakPoints.md} {
    padding: ${theme.spacing.g8} 0 ${theme.spacing.g10} 0;
  }
`
const div = {}
div.row = styled.div`
  ${theme.elements.row}
  padding: 0 ${theme.spacing.g5} 0 ${theme.spacing.g5};
  display: grid;
  grid-template-columns: ${(props) => {
    let final = ''
    if (props.maxColumns > 0) {
      for (let i = 0; i < props.maxColumns; i++) {
        final = final + '1fr '
      }
      return final
    } else {
      return '1fr 1fr 1fr'
    }
  }};
  justify-items: start;
  align-items: start;
  row-gap: ${theme.spacing.g9};
  column-gap: ${theme.spacing.g6};
  img {
    height: 60px;
    filter: brightness(0) invert(1);
  }
  @media ${theme.breakPoints.lg} {
    grid-template-columns: 1fr;
    max-width: 600px;
  }
  @media ${theme.breakPoints.md} {
    grid-template-columns: 1fr;
    padding: 0 ${theme.spacing.g4} 0 ${theme.spacing.g4};
    row-gap: ${theme.spacing.g7};
  }
`
div.col = styled.div`
  color: white;
  z-index: 2;
  h5 {
    ${theme.typography.medlrg}
    padding: ${theme.spacing.g4} 0;
  }
`

//#endregion

const FeaturedGrid = ({ data }) => {
  return (
    <section.featuredGrid>
      <ArtisticBackgroundElement
        xxlLeft='30%'
        left='50%'
        marginTop='-700px'
        width='1300px'
        opacity='0.1'
      />
      <div.row maxColumns={data.maxColumns}>
        {data?.features?.map((feature, index) => {
          return (
            <div.col key={feature?.title + index}>
              {feature?.iconToggle ? (
                <img src={feature?.icon} alt={`An icon representing ${feature?.headline}`} />
              ) : null}
              <h5>{feature?.headline}</h5>
              <ReactMarkdown>{feature?.body}</ReactMarkdown>
            </div.col>
          )
        })}
      </div.row>
      <ArtisticBackgroundElement
        xxlLeft='-10%'
        left='-10%'
        marginTop='0px'
        width='1300px'
        opacity='0.1'
      />
    </section.featuredGrid>
  )
}

export default FeaturedGrid
