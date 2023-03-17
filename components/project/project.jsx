import { styled } from '@linaria/react'
import { theme } from '../../styles/theme'
import Button from '../button'
import Link from 'next/link'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import ProjectImage from './projectImage'
import PhotoGrid from './photoGrid'
import Date from '../date'
import BoxBackground from '../subtleBoxBackground'
//#region styles
const section = {}
section.project = styled.section`
  padding: ${theme.spacing.g7} ${theme.spacing.g2} 0 ${theme.spacing.g2};
`
const div = {}
div.row = styled.div`
  ${theme.elements.row}
  padding: 0 ${theme.spacing.g2} 0 ${theme.spacing.g2};
  @media ${theme.breakPoints.sm} {
    button {
      margin: 0 auto;
    }
  }
`
div.imageRow = styled.div`
  ${theme.elements.row}
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing.g6} 0 0 0;
  margin-bottom: -200px;
  div:nth-child(1) {
    margin-right: ${theme.spacing.g4};
  }
  @media ${theme.breakPoints.sm} {
    flex-direction: column;
    margin-right: 0;
    div:nth-child(1) {
      margin-right: 0;
    }
    div:nth-child(2) {
      margin-top: ${theme.spacing.g4};
    }
  }
`
div.content = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: ${theme.spacing.g5} 0;
  h6 {
    ${theme.typography.medlrg}
    padding: ${theme.spacing.g8} 0 ${theme.spacing.g5} 0;
  }
  @media ${theme.breakPoints.md} {
    margin-top: -60px;
  }
`

//#endregion

const Project = ({ data }) => {
  return (
    <>
      <section.project>
        <div.row>
          <Link href='/projects' passHref>
            <a>
              <Button
                display='flex'
                color='white'
                backgroundColor={theme.colors.primaryBlue}
                border={`0px solid ${theme.colors.skyGrey}`}
                boxShadow='none'
                fontSize={theme.fontSize.xxsml}
              >
                <svg
                  stroke='currentColor'
                  fill='currentColor'
                  strokeWidth='0'
                  viewBox='0 0 1024 1024'
                  height='18'
                  width='18'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 0 0 0 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z'></path>
                </svg>
                Back To Projects
              </Button>
            </a>
          </Link>

          <div.imageRow>
            <ProjectImage data={data} />
          </div.imageRow>
        </div.row>
        <BoxBackground
          padding={`${theme.spacing.g10} ${theme.spacing.g4} ${theme.spacing.g9} ${theme.spacing.g4}`}
          backgroundColor={theme.colors.lightBlueGrey}
        >
          <div.row>
            <div.content>
              <Date className='dates'>{data?.date}</Date>
              <ReactMarkdown>{data?.projectDescription}</ReactMarkdown>
              {data?.morePhotos ? (
                <>
                  <h6>More photos</h6>
                  <PhotoGrid data={data?.morePhotos} alt={data?.title} />
                </>
              ) : null}
            </div.content>
          </div.row>
        </BoxBackground>
      </section.project>
    </>
  )
}

export default Project
