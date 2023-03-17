import { styled } from '@linaria/react'
import { useState } from 'react'

import { theme } from '../../styles/theme'
import { useFormContext, useSetFormContext } from '../../hooks/useForm'

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
  textarea,
  select,
  input {
    border: none;
    padding-left: 30px;
    font-size: 1em;
    border-radius: 4px;
    color: ${theme.colors.tempestBlue};
    outline: none;
    color: #808080;
    background-color: #f7f7f8;
    margin: ${theme.spacing.g4} 0;
    width: 100%;
    :valid {
      color: ${theme.colors.tempestBlue};
      background-color: #f3f8ff;
    }
    :placeholder-shown {
      background-color: #f7f7f8;
    }
    :focus {
      background-color: #f3f8ff;
      border: 1px solid #1964e4;
    }
  }
  input,
  select {
    height: 60px;
  }
  select:focus {
    option {
      color: ${theme.colors.tempestBlue};
    }
  }
  textarea {
    height: 300px;
    padding-top: 20px;
  }
  .error {
    background-color: #fff8f5 !important;
    border: 1px solid #e35326;
  }
`
//#endregion styles

const Field = ({ options, component, type, label, id }) => {
  const [formValues, formErrors] = useFormContext()
  const [setFormValues, setFormErrors] = useSetFormContext()
  const [keyPressed, setKeyPressed] = useState()

  //#region validation
  const emailValidation = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
  const phoneValidation = new RegExp(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/)

  const validateField = (e) => {
    const value = e.target.value
    switch (type) {
      case 'text':
        if (value == '') {
          setFormErrors({
            ...formErrors,
            [id]: '*This field is required',
          })
          return
        }

        setFormErrors({
          ...formErrors,
          [id]: null,
        })
        break
      case 'email':
        if (value == '') {
          setFormErrors({
            ...formErrors,
            [id]: '*This field is required',
          })
          return
        }
        if (!emailValidation.test(value)) {
          setFormErrors({
            ...formErrors,
            [id]: '*Please enter a valid email',
          })
          return
        } else {
          setFormErrors({
            ...formErrors,
            [id]: null,
          })
        }
        break
      case 'tel':
        if (value === '(') {
          setFormErrors({
            ...formErrors,
            [id]: '*This field is required',
          })
          return
        }
        if (!phoneValidation.test(value)) {
          setFormErrors({
            ...formErrors,
            [id]: '*Please enter a valid phone number',
          })
          return
        } else {
          setFormErrors({
            ...formErrors,
            [id]: null,
          })
        }
        break
      case 'zip':
        if (value === '') {
          setFormErrors({
            ...formErrors,
            [id]: '*This field is required',
          })
          return
        }
        if (value.length < 5) {
          setFormErrors({
            ...formErrors,
            [id]: '*Please enter a valid zip',
          })
          return
        } else {
          setFormErrors({
            ...formErrors,
            [id]: null,
          })
        }
        break
      default:
        if (value == '') {
          setFormErrors({
            ...formErrors,
            [id]: '*This field is required',
          })
          return
        }

        setFormErrors({
          ...formErrors,
          [id]: null,
        })
    }
  }
  //#endregion validation

  //#region handlers

  const handleKeyPress = (e) => {
    setKeyPressed(e.code)
  }

  const handleZipChange = (e) => {
    const value = e.target.value
    const prev = formValues[e.target.id]
    let next = ''
    const fieldId = e.target.id
    if (formErrors[fieldId] && formErrors[fieldId] !== 'init') {
      validateField(e)
    }
    if (value.length === 6) {
      return
    }
    if (keyPressed.length && keyPressed[0] === 'K') {
      return
    }
    if (keyPressed === 'Backspace') {
      next = value
    }
    if (keyPressed.length && keyPressed[0] === 'D') {
      next = value
    }
    setFormValues({ ...formValues, [e.target.id]: next })
  }

  const handleTelChange = (e) => {
    const fieldId = e.target.id
    const value = e.target.value
    const prev = formValues[fieldId]
    let next = ''
    if (formErrors[fieldId] && formErrors[fieldId] !== 'init') {
      validateField(e)
    }
    if (keyPressed.length && keyPressed[0] === 'K') {
      return
    }
    if (keyPressed.length && keyPressed[0] === 'D') {
      if (prev && prev.length === 14) {
        return
      }
      switch (value.length) {
        case 1:
          next = '(' + value
          break
        case 4:
          next = value + ') '
          break
        case 9:
          next = value + '-'
          break
        default:
          next = value
      }
    }
    if (keyPressed === 'Backspace') {
      switch (value.length) {
        case 1:
          next = ''
          break
        case 5:
          next = value.slice(0, 3)
          break
        case 9:
          next = value.slice(0, 8)
          break
        default:
          next = value
      }
    }
    setFormValues({ ...formValues, [fieldId]: next })
  }

  const handleChange = (e) => {
    const fieldId = e.target.id
    if (formErrors[fieldId] && formErrors[fieldId] !== 'init') {
      validateField(e)
    }
    setFormValues({ ...formValues, [fieldId]: e.target.value })
  }
  //#endregion handlers

  switch (component) {
    case 'hidden':
      return null
    case 'select':
      return (
        <div.wrapper>
          {formErrors && formErrors[id] !== null && formErrors[id] !== 'init' && (
            <p>{formErrors[id]}</p>
          )}
          <select
            id={id}
            className={formErrors[id] == null || formErrors[id] == 'init' ? null : 'error'}
            value={formValues[id] ? formValues[id] : ''}
            type='select'
            onChange={handleChange}
            onBlur={validateField}
            required
            defaultValue=''
          >
            <option value='' disabled hidden>
              {label}
            </option>
            {options.map((option) => {
              return (
                <option value={option.value || ''} key={option.label}>
                  {option.label}
                </option>
              )
            })}
          </select>
        </div.wrapper>
      )
    case 'input':
      switch (type) {
        case 'tel':
          return (
            <div.wrapper>
              {formErrors && formErrors[id] !== null && formErrors[id] !== 'init' && (
                <p>{formErrors[id]}</p>
              )}
              <input
                id={id}
                className={formErrors[id] == null || formErrors[id] == 'init' ? null : 'error'}
                value={formValues[id] ? formValues[id] : ''}
                type={type}
                onKeyDown={handleKeyPress}
                onChange={handleTelChange}
                onBlur={validateField}
                placeholder={label}
              />
            </div.wrapper>
          )
        case 'zip':
          return (
            <div.wrapper>
              {formErrors && formErrors[id] !== null && formErrors[id] !== 'init' && (
                <p>{formErrors[id]}</p>
              )}
              <input
                id={id}
                className={formErrors[id] == null || formErrors[id] == 'init' ? null : 'error'}
                value={formValues[id] ? formValues[id] : ''}
                type={type}
                onChange={handleZipChange}
                onKeyDown={handleKeyPress}
                onBlur={validateField}
                placeholder={label}
              />
            </div.wrapper>
          )
        default:
          return (
            <div.wrapper>
              {formErrors && formErrors[id] !== null && formErrors[id] !== 'init' && (
                <p>{formErrors[id]}</p>
              )}
              <input
                id={id}
                className={formErrors[id] == null || formErrors[id] == 'init' ? null : 'error'}
                value={formValues[id] ? formValues[id] : ''}
                type={type}
                onChange={handleChange}
                onBlur={validateField}
                placeholder={label}
              />
            </div.wrapper>
          )
      }
    case 'textarea':
      return (
        <div.wrapper>
          {formErrors && formErrors[id] !== null && formErrors[id] !== 'init' && (
            <p>{formErrors[id]}</p>
          )}
          <textarea
            id={id}
            className={formErrors[id] == null || formErrors[id] == 'init' ? null : 'error'}
            value={formValues[id] ? formValues[id] : ''}
            type={type}
            onChange={handleChange}
            onBlur={validateField}
            placeholder={label}
          />
        </div.wrapper>
      )
    default:
      return <input />
  }
}

export default Field
