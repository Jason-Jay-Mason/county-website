import { styled } from '@linaria/react'
import { theme } from '../styles/theme'
//#region component imports
import ReviewCard from './reviewSlider.reviewCard'
import { useState } from 'react'

//#endregion

const reviewCount = 7
//#region styles
const section = {}
section.reviewSlider = styled.section`
  padding-bottom: ${(props) => (props.paddingBottom ? props.paddingBottom : theme.spacing.g7)};
`

const div = {}
div.reviewContainer = styled.div`
  will-change: transform;
  display: flex;
  flex-direction: row;
  margin: 0;
  width: ${(props) => (props.reviewCount > 0 ? `calc(500px * ${props.reviewCount})` : 0)};
  animation: scroll linear infinite;
  animation-duration: ${(props) => `calc(8s * ${props.reviewCount})`};
  transform: translateZ(0);
  will-change: transform;
  @keyframes scroll {
    from {
      transform: translateX(0);
    }
    to {
      transform: ${(props) =>
        props.reviewCount > 0 ? `translateX(calc(-500px * ${props.reviewCount})` : 'translateX(0)'};
    }
  }
  :hover {
    animation-play-state: paused;
  }

  @media ${theme.breakPoints.lg} {
    animation: scroll none;
    position: relative;
    transform: translate(0, 0);
    width: 100%;
    padding: 0 0 0 0;
    margin: 0 auto;
  }
`
div.start = styled.div`
  display: flex;
  flex-direction: row;
`
div.clone = styled.div`
  display: flex;
  flex-direction: row;
`
div.arrows = styled.div`
  display: none;
  padding: 0 ${theme.spacing.g7} ${theme.spacing.g6} ${theme.spacing.g7};
  flex-direction: row;
  column-gap: ${theme.spacing.g3};
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
    display: flex;
    position: relative;
    z-index: 100;
  }
  @media ${theme.breakPoints.sm} {
    padding: 0 ${theme.spacing.g3} ${theme.spacing.g6} ${theme.spacing.g3};
  }
`
//#endregion

const ReviewSlider = ({ data, paddingBottom }) => {
  const reviewCount = data?.reviewsList?.length ? data?.reviewsList?.length : 0

  const [selected, setSelected] = useState(0)
  const nextOrPrevSelected = (direction) => {
    if (direction === 'back') {
      if (selected === 0) {
        setSelected(reviewCount - 1)
      } else {
        setSelected(selected - 1)
      }
    }
    if (direction === 'forward') {
      if (selected === reviewCount - 1) {
        setSelected(0)
      } else {
        setSelected(selected + 1)
      }
    }
  }

  return (
    <section.reviewSlider paddingBottom={paddingBottom}>
      <div.arrows>
        <svg
          onClick={() => {
            nextOrPrevSelected('back')
          }}
          stroke='currentColor'
          fill='currentColor'
          strokeWidth='0'
          viewBox='0 0 512 512'
          className='leftArrow'
          color='grey'
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
          strokeWidth='0'
          viewBox='0 0 512 512'
          className='rightArrow'
          color='grey'
          height='40px'
          width='40px'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm43.4 289.1c7.5 7.5 7.5 19.8 0 27.3-3.8 3.8-8.7 5.6-13.6 5.6s-9.9-1.9-13.7-5.7l-94-94.3c-6.9-7.6-6.7-19.3.6-26.6l95.4-95.7c7.5-7.5 19.7-7.6 27.3 0 7.5 7.5 7.6 19.7 0 27.3l-81.9 81 79.9 81.1z'></path>
        </svg>
      </div.arrows>
      <div.reviewContainer reviewCount={reviewCount}>
        <div.start>
          {data?.reviewsList?.map((review, index) => {
            return (
              <div key={index}>
                <ReviewCard
                  selected={data?.reviewsList[selected]}
                  data={review}
                  index={`${index}`}
                />
              </div>
            )
          })}
        </div.start>
        <div.clone>
          {data?.reviewsList?.map((review, index) => {
            return (
              <div key={index + 'dupe'}>
                <ReviewCard data={review} />
              </div>
            )
          })}
        </div.clone>
      </div.reviewContainer>
    </section.reviewSlider>
  )
}

export default ReviewSlider
