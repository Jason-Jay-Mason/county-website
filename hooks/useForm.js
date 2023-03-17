import { createContext, useContext, useEffect, useState } from 'react'

const FormValuesContext = createContext()
const SetFormValuesContext = createContext()
const FormErrorsContext = createContext()
const SetFormErrorsContext = createContext()
const FormValid = createContext()
const SetFormValidated = createContext()

export const useFormContext = () => {
  const formValues = useContext(FormValuesContext)
  const formError = useContext(FormErrorsContext)
  const formValid = useContext(FormValid)
  const setFormValidated = useContext(SetFormValidated)

  return [formValues, formError, formValid, setFormValidated]
}
export const useSetFormContext = () => {
  const setFormValues = useContext(SetFormValuesContext)
  const setFormError = useContext(SetFormErrorsContext)

  return [setFormValues, setFormError]
}

export const initializeForm = (form) => {
  const initValues = {}
  const initErrors = {}

  form.forEach((field) => {
    if (field.noSend) {
      return
    }
    if (Array.isArray(field)) {
      field.forEach((subfield) => {
        initValues[subfield.id] = ''
        initErrors[subfield.id] = 'init'
        return
      })
    }
    if (field.type && field.type === 'multiple') {
      initValues[field.id] = field.value || []
      return
    }

    if (field.id) {
      initValues[field.id] = field.value || '' 
      initErrors[field.id] = 'init'
      return
    }
  })

  return [initValues, initErrors]
}

export const constructMessage = (form, formData) => {
  let message = ''

  form.forEach((field, i) => {
    if (field.id === 'captcha') {
      return
    }
    if (Array.isArray(field)) {
      field.forEach((subfield) => {
        message =
          message +
          `
			${subfield.label}: ${formData[subfield.id]}
		`
      })
      return
    }
    message =
      message +
      `
			${field.label}: ${formData[field.id]}
		`
    return
  })
  return message
}

const validateForm = (formErrors) => {
  const errorMessages = Object.values(formErrors)
  return errorMessages.filter((message) => {
    if (message !== null) {
      return message
    }
    return
  })
}

export const FormProvider = ({ children }) => {
const [formErrors, setFormErrors] = useState({})
  const [formValues, setFormValues] = useState({})
  const [formValidated, setFormValidated] = useState(false)

  useEffect(() => {
		if(formErrors){
    const errors = validateForm(formErrors)
    if (errors.length < 1) {
      setFormValidated(true)
    }
    if (errors.length > 0 && formValidated) {
      setFormValidated(false)
    }

		}
  }, [formErrors])

  return (
    <FormValuesContext.Provider value={formValues}>
      <SetFormValuesContext.Provider value={setFormValues}>
        <FormErrorsContext.Provider value={formErrors}>
          <SetFormErrorsContext.Provider value={setFormErrors}>
            <SetFormValidated.Provider value={setFormValidated}>
              <FormValid.Provider value={formValidated}>{children}</FormValid.Provider>
            </SetFormValidated.Provider>
          </SetFormErrorsContext.Provider>
        </FormErrorsContext.Provider>
      </SetFormValuesContext.Provider>
    </FormValuesContext.Provider>
  )
}
