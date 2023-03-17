import { styled } from '@linaria/react'
import { theme } from '../../styles/theme'

//#region styles
const div = {}

div.wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  p {
    margin: 0;
    padding-top: 5px;
    padding-bottom: 0 !important;
    line-height: 100%;
    font-size: 12px;
    color: #e35326;
  }
  input,
  select {
    width: 100%;
    height: 60px;
    margin: ${theme.spacing.g4} 0;
    border: none;
    padding-left: 30px;
    font-size: 1em;
    border-radius: 4px;
    color: ${theme.colors.tempestBlue};
    outline: none;
    + label {
      position: absolute;
      padding: 0 10px;
      transform: translateY(35px) translateX(21px);
    }
    :valid {
      background-color: #f3f8ff;
      + label {
        color: transparent;
      }
    }
    :placeholder-shown {
      background-color: #f7f7f8;
      + label {
        transition: all 0.2s ease;
        color: #808080;
      }
    }
    :focus {
      background-color: #f3f8ff;
      border: 1px solid #1964e4;
    }
    option[value=''] {
      display: none;
    }
  }
  select:focus {
    option {
      color: ${theme.colors.tempestBlue};
    }
  }
  select:invalid {
    color: #808080;
    background-color: ${theme.colors.iceGrey};
  }
`
//#endregion styles

const Field = ({ children, label }) => {
  let error = null
  const { type } = children

  switch (type) {
    case 'select':
      return (
        <div.wrapper>
          {error && <p>*This field is required</p>}
          {children}
        </div.wrapper>
      )
    case 'input':
      return (
        <div.wrapper>
          {error && <p>*This field is required</p>}
          {children}
        </div.wrapper>
      )
    case 'textarea':
      return (
        <div.wrapper>
          {error && <p>*This field is required</p>}
          {children}
        </div.wrapper>
      )
    default:
      return <input />
  }
}

export default Field
