import { styled } from '@linaria/react'
import { theme } from '../styles/theme'

//#region styles
const div = {}
div.bgElement = styled.div`
  display: inline-block;
  position: absolute;
  width: 100vw;
  margin-top: ${(props) => (props.marginTop ? props.marginTop : '-160px')};
  z-index: 0;
  right: ${(props) => (props.right ? props.right : '0')};
  overflow: hidden;
  min-height: 120%;
  opacity: ${(props) => (props.opacity ? props.opacity : '1')};
  img {
    position: absolute;
    left: ${(props) => (props.left ? props.left : '0')};
    width: ${(props) => (props.width ? props.width : 'auto')};
    @media ${theme.breakPoints.xxl} {
      left: ${(props) => (props.xxlLeft ? props.xxlLeft : '0')};
    }
  }

  @media ${theme.breakPoints.lg} {
    display: none;
  }
`
//#endregion

const ArtisticBackgroundElement = ({ left, xxlLeft, marginTop, opacity, width, right }) => {
  return (
    <div.bgElement
      left={left}
      xxlLeft={xxlLeft}
      marginTop={marginTop}
      opacity={opacity}
      width={width}
      right={right}
    >
      <img
        src='https://res.cloudinary.com/countylineexcavation/image/upload/v1644984795/artistic%20elements/topography-grey_bktqgh.svg'
        alt='A background image of topography and land.'
      />
    </div.bgElement>
  )
}

export default ArtisticBackgroundElement
