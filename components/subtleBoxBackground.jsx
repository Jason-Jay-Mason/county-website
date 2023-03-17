import { styled } from '@linaria/react'
import { theme } from '../styles/theme'

//#region styles
const div = {}
div.background = styled.div`
  max-width: 1415px;
  margin: 0 auto;
  padding: ${(props) => (props.padding ? props.padding : `${theme.spacing.g7} 0`)};
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : theme.colors.iceGrey};
  border-radius: 15px;
`
//#endregion

const BoxBackground = ({ children, backgroundColor, marginTop, padding }) => {
  return (
    <div.background backgroundColor={backgroundColor} marginTop={marginTop} padding={padding}>
      {children}
    </div.background>
  )
}

export default BoxBackground
