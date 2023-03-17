import { styled } from '@linaria/react'
import { useState } from 'react'
import { theme } from '../../styles/theme'
import Form from './form.requestbid'
import { FormProvider } from '../../hooks/useForm'
//#region styles
const div = {}

div.fromPage = styled.div`
  position: relative;
`
div.headline = styled.div`
  background-color: ${theme.colors.highlightYellow};
  padding: ${theme.spacing.g9} ${theme.spacing.g5} ${theme.spacing.g9} ${theme.spacing.g5};
  @media ${theme.breakPoints.md} {
    padding: ${theme.spacing.g8} ${theme.spacing.g5} ${theme.spacing.g9} ${theme.spacing.g5};
  }
  h2 {
    margin: 0 auto;
    max-width: ${theme.maxMin.contentMaxWidth};
    text-align: center;
    ${theme.typography.xlrg}
    font-weight:700;
    strong {
      font-weight: 900;
    }
    color: ${theme.colors.tempestBlue};
  }
`

div.formSection = styled.div`
  margin: -100px auto ${theme.spacing.g8} auto;
  max-width: 734px;
  border-radius: 15px;
  background-color: white;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.15);
`

//#endregion styles

const FormPage = ({ data }) => {
  const [complete, setComplete] = useState(false)
  const [error, setError] = useState(null)
  const services = data?.services || {}
  return (
    <FormProvider>
      <div.fromPage>
        <div.headline>
          <h2>
            Fill out the form below to request a bid <br /> Or Call
            <strong> (253) 514-9529</strong>
          </h2>
        </div.headline>
        <div.formSection>
          <Form services={services} />
        </div.formSection>
      </div.fromPage>
    </FormProvider>
  )
}

export default FormPage
