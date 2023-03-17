import { styled } from '@linaria/react'
import { css } from 'linaria'
import { theme } from '../styles/theme'
import { useState } from 'react'
import Image from './image'

//#region styles
const section = {}
section.slider = styled.section`
  position: relative;
  z-index: 100;
`
const div = {}
div.row = styled.div`
  ${theme.elements.row}
  padding: 0 ${theme.spacing.g4};
  margin-top: calc(-335px / 2);
`
div.beforeAfterContainer = styled.div`
  display: none;
  column-gap: ${theme.spacing.g2};
  align-items: center;
`
div.beforeAfter = styled.div`
  width: 100%;
  position: relative;
  max-width: 700px;
  height: 340px;
  transition: all 0.2s ease;
  span {
    box-shadow: ${theme.boxShadows.image};
    border-radius: 15px;
  }
  p {
    color: white;
    position: relative;
    top: 20px;
    left: 10px;
    text-transform: uppercase;
    font-weight: 800;
    margin: 0 20px;
  }
  :nth-child(1) {
    filter: grayscale(70%);
  }
  :hover {
    filter: grayscale(5%);
  }
  @media ${theme.breakPoints.lg} {
    height: 40vw;
    min-height: 220px;
    :nth-child(1) {
      margin-bottom: ${theme.spacing.g3};
    }
  }
`
div.arrows = styled.div`
  ${theme.elements.row}
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: ${theme.spacing.g5} ${theme.spacing.g5} ${theme.spacing.g5} ${theme.spacing.g5};
  z-index: 10;
  .leftArrow,
  .rightArrow {
    transform: rotate(0deg);
    fill: #c4c4c4;
    cursor: pointer;
    :hover {
      fill: #acacac;
    }
  }
  .rightArrow {
    transform: rotate(180deg);
  }
  @media ${theme.breakPoints.lg} {
    max-width: 700px;
    justify-content: flex-start;
  }
`
const displayed = css`
  animation: fadeIn 0.2s;
  display: flex;
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @media ${theme.breakPoints.lg} {
    display: flex;
    flex-direction: column;
  }
`
//#endregion

const BeforeAfterSlider = ({ data }) => {
  const [selected, setSelected] = useState(0)
  const nextOrPrevSelected = (direction) => {
    if (direction === 'back') {
      if (selected === 0) {
        setSelected(data?.length - 1)
      } else {
        setSelected(selected - 1)
      }
    }
    if (direction === 'forward') {
      if (selected === data?.length - 1) {
        setSelected(0)
      } else {
        setSelected(selected + 1)
      }
    }
  }
  return (
    <section.slider>
      <div.row>
        {data?.map((pics, index) => {
          return (
            <div.beforeAfterContainer key={index} className={index === selected ? displayed : null}>
              <div.beforeAfter>
                <p>before</p>
                <Image
                  src={pics?.beforeImage}
                  layout='fill'
                  objectFit='cover'
                  quality={80}
                  width={700}
                  placeholder='no-image.svg'
                  alt='An image showing the photo of dirt work before it is done'
                />
              </div.beforeAfter>
              <div.beforeAfter>
                <p>after</p>
                <Image
                  src={pics?.afterImage}
                  layout='fill'
                  objectFit='cover'
                  quality={80}
                  width={700}
                  placeholder='no-image.svg'
                  alt='An image showing the photo of dirt work after it is done'
                />
              </div.beforeAfter>
            </div.beforeAfterContainer>
          )
        })}
      </div.row>
      <div.arrows>
        <svg
          onClick={() => {
            nextOrPrevSelected('back')
          }}
          stroke='currentColor'
          fill='currentColor'
          strokeWidth='0'
          viewBox='0 0 512 512'
          color='grey'
          className='leftArrow'
          height='40px'
          width='40px'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm43.4 289.1c7.5 7.5 7.5 19.8 0 27.3-3.8 3.8-8.7 5.6-13.6 5.6s-9.9-1.9-13.7-5.7l-94-94.3c-6.9-7.6-6.7-19.3.6-26.6l95.4-95.7c7.5-7.5 19.7-7.6 27.3 0 7.5 7.5 7.6 19.7 0 27.3l-81.9 81 79.9 81.1z'></path>
        </svg>

        <svg
          onClick={() => {
            nextOrPrevSelected('forward')
          }}
          stroke='currentColor'
          fill='currentColor'
          className='rightArrow'
          strokeWidth='0'
          viewBox='0 0 512 512'
          color='grey'
          height='40px'
          width='40px'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm43.4 289.1c7.5 7.5 7.5 19.8 0 27.3-3.8 3.8-8.7 5.6-13.6 5.6s-9.9-1.9-13.7-5.7l-94-94.3c-6.9-7.6-6.7-19.3.6-26.6l95.4-95.7c7.5-7.5 19.7-7.6 27.3 0 7.5 7.5 7.6 19.7 0 27.3l-81.9 81 79.9 81.1z'></path>
        </svg>
      </div.arrows>
    </section.slider>
  )
}

export default BeforeAfterSlider
