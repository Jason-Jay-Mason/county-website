import { styled } from '@linaria/react'
import { theme } from '../../styles/theme'
import IconCheckBox from './form.iconRadio'
import Field from './form.field'
import { initializeForm, useFormContext, useSetFormContext } from '../../hooks/useForm'
import { createRef, useEffect, useState } from 'react'
import axios from 'axios'
import ReCAPTCHA from 'react-google-recaptcha'
import { useRouter } from 'next/router'

//#region styles
const div = {}

div.form = styled.div`
  padding: ${theme.spacing.g7};

  @media ${theme.breakPoints.md} {
    padding: ${theme.spacing.g7} ${theme.spacing.g4};
  }
  p {
    padding-bottom: ${theme.spacing.g5};
  }
  form {
    input[type='submit'] {
      background-color: ${theme.colors.highlightYellow};
      color: ${theme.colors.tempestBlue};
      border: none;
      width: 45%;
      height: ${theme.spacing.g7};
      font-size: 1rem;
      cursor: pointer;
      border-radius: 4px;
      :hover {
        opacity: 95%;
      }
      :disabled {
        background-color: ${theme.colors.skyGrey};
        cursor: not-allowed;
      }
      @media ${theme.breakPoints.lg} {
        margin-top: ${theme.spacing.g7};
        max-width: 400px;
        width: 100%;
      }
    }
    iframe {
      margin-top: 5px;
      transform: scale(0.9);
      transform-origin: 0 0;
      @media ${theme.breakPoints.lg} {
        margin: ${theme.spacing.g5} auto 0 auto;
      }
    }
  }
`
div.buttons = styled.div`
  display: grid;
  padding-bottom: ${theme.spacing.g5};
  grid-template-columns: 1fr 1fr 1fr;
  @media ${theme.breakPoints.lg} {
    grid-template-columns: 1fr 1fr;
  }
  @media ${theme.breakPoints.md} {
    grid-template-columns: 1fr;
  }
`
div.serviceButton = styled.div`
  h6 {
    font-size: 12px;
  }
  img {
    height: 20px;
  }
`
div.fieldRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  div {
    width: 48.5%;
  }
  @media ${theme.breakPoints.lg} {
    flex-direction: column;
    align-items: center;
    div {
      width: 100%;
    }
  }
`
div.submit = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 25px 0;
  div {
    width: 48.5%;
  }
  @media ${theme.breakPoints.lg} {
    flex-direction: column;
    align-items: center;
    div {
      width: 100%;
    }
  }
`
//#endregion styles

const postUrl = 'https://submit-form.com/q40PJ3Vn'

const siteKey =
  process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITEKEY || '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'

//#region form obj
const form = [
  {
    id: 'services',
    label: 'Services Desired',
    component: 'hidden',
    type: 'multiple',
    selections: [],
  },
  {
    id: 'industry',
    label: 'Select Industry',
    component: 'select',
    options: [
      {
        label: 'Residential',
        value: 'residential',
      },
      {
        label: 'Commercial',
        value: 'commercial',
      },
    ],
  },
  {
    id: 'email',
    label: 'Email',
    component: 'input',
    type: 'email',
  },
  [
    {
      id: 'firstName',
      label: 'First Name',
      component: 'input',
      type: 'text',
    },
    {
      id: 'lastName',
      label: 'Last Name',
      component: 'input',
      type: 'text',
    },
  ],
  [
    {
      id: 'phone',
      label: 'Phone Number',
      component: 'input',
      type: 'tel',
    },
    {
      id: 'zip',
      label: 'Zip Code',
      component: 'input',
      type: 'zip',
    },
  ],
  {
    id: 'contactMethod',
    label: 'Preferred Contact Method',
    component: 'select',
    options: [
      {
        label: 'Phone',
        value: 'phone',
      },
      {
        label: 'Email',
        value: 'email',
      },
    ],
  },
  {
    id: 'description',
    label: 'Please Describe Your Project...',
    component: 'textarea',
    type: 'text',
  },
  {
    id: 'captcha',
    label: 'Captcha',
    component: 'input',
  },
]
//#endregion form obj

const [initValues, initErrors] = initializeForm(form)

const Form = ({ services }) => {
  const [loading, setLoading] = useState(true)
  const [formValues, formErrors, formValid, setFormValidated] = useFormContext()
  const [setFormValues, setFormErrors] = useSetFormContext()
  const [submitMessage, setSubmitMessage] = useState('Send Request')
  const reCaptchaRef = createRef()
  const router = useRouter()
  const other = {
    node: {
      data: {
        serviceName: 'Other',
      },
    },
  }
  const finalServices = [...services, other]

  useEffect(() => {
    setFormValues(initValues)
    setFormErrors(initErrors)
  }, [])

  //#region handlers
  const handleSubmit = async (e) => {
    setSubmitMessage('Loading...')
    e.preventDefault()
    const reCaptchaValue = reCaptchaRef.current.getValue()
    try {
      const response = await axios.post(postUrl, {
        message: formValues,
        'g-recaptcha-response': reCaptchaValue,
        _email: {
          from: 'Countyline Website',
          subject: 'NEW BID REQUEST!',
        },
      })
      router.push('/thankyou/request-bid')
    } catch (e) {
      setFormValidated(false)
      setSubmitMessage('Sorry! Request Failed, Please Call')
      console.error(e)
    }
  }

  const handleCaptcha = (e) => {
    if (!e) {
      setFormErrors({
        ...formErrors,
        captcha: 'Error',
      })
    }
    if (e) {
      setFormErrors({
        ...formErrors,
        captcha: null,
      })
    }
  }
  //#endregion handlers

  return (
    <div.form>
      <form onSubmit={handleSubmit} noValidate>
        <p>Select services needed:</p>
        <div.buttons>
          {finalServices.map((service, i) => {
            let data = service.node.data
            return (
              <div.serviceButton key={'button' + i}>
                <IconCheckBox id='services' icon={data.icon} label={data.serviceName} />
              </div.serviceButton>
            )
          })}
        </div.buttons>
        {form.map((field, i) => {
          if (field.id === 'captcha' || field.component == 'hidden') {
            return null
          }
          if (Array.isArray(field)) {
            return (
              <div.fieldRow key={'fieldrow' + i}>
                {field.map((subfield, i) => {
                  return (
                    <Field
                      component={subfield.component}
                      type={subfield.type}
                      label={subfield.label}
                      id={subfield.id}
                      key={subfield.id + i}
                      options={subfield.component === 'select' && field.options}
                    />
                  )
                })}
              </div.fieldRow>
            )
          }
          return (
            <Field
              component={field.component}
              type={field.type}
              label={field.label}
              id={field.id}
              key={field.id + i}
              options={field.component === 'select' && field.options}
            />
          )
        })}
        <div.submit>
          <div>
            <ReCAPTCHA onChange={handleCaptcha} ref={reCaptchaRef} sitekey={siteKey} />
          </div>
          <input type='submit' disabled={!formValid} value={submitMessage} />
        </div.submit>
      </form>
    </div.form>
  )
}

export default Form
