import { styled } from '@linaria/react'
import { theme } from '../../styles/theme'
import { useFormContext, useSetFormContext } from '../../hooks/useForm'

//#region styles
const div = {}

div.wrapper = styled.div`
  input[type='checkbox'] {
    position: absolute;
    left: -100000000px;
  }
  input[type='checkbox']:checked + label {
    background-color: ${theme.colors.tempestBlue};
    color: white;
    cursor: pointer;
    img {
      filter: brightness(0) invert(1);
    }
  }

  label {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    max-width: 96%;
    margin: ${theme.spacing.g1} 0;
    padding: ${theme.spacing.g4} ${theme.spacing.g2};
    border-radius: 5px;
    :hover {
      background-color: ${theme.colors.iceGrey};
      cursor: pointer;
    }
    img {
      margin-right: ${theme.spacing.g1};
    }
  }
`

//#endregion styles

const IconCheckBox = ({ id, label, icon }) => {
  const [formValues, formErrors, formValid] = useFormContext()
  const [setFormValues, setFormErrors] = useSetFormContext()

  const handleChange = (e) => {
    const selectionId = e.target.id
    const selectionValue = e.target.checked
    let next = []

    if (typeof selectionValue !== 'boolean') {
      console.error(
        `Oops! Check box return ${selectionValue}. Checkboxes need to return a booleanl`
      )
      return
    }

    if (selectionValue === false) {
      next = formValues[id].filter((selection) => {
        if (selection === selectionId) {
          return
        } else {
          return selection
        }
      })
    }

    if (selectionValue === true) {
      next = [...formValues[id], selectionId]
    }

    setFormValues({
      ...formValues,
      [id]: next,
    })
  }

  return (
    <div.wrapper>
      <input onChange={handleChange} id={label} type='checkbox' />
      <label htmlFor={label}>
        <img src={icon || 'https://res.cloudinary.com/countylineexcavation/image/upload/v1644437330/Icons/excavator-icon_ydgs5f.svg'} alt={`An icon for ${label}`} />
        {label}
      </label>
    </div.wrapper>
  )
}

export default IconCheckBox
