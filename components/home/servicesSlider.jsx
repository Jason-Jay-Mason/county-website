import { styled } from '@linaria/react'
import { useState } from 'react'
import { theme } from '../../styles/theme'

//#region component imports

import FilterButton from '../button.filter'
import TopicDisplay from './serviceSlider.topicDisplay'
import ArtisticBackgroundElement from '../artisticBgElement.topogrophy'
import BoxBackground from '../subtleBoxBackground'
//#endregion

//#region styles

const section = {}
section.services = styled.section`
  ${theme.elements.section};
  margin: ${theme.spacing.g8} 0 ${theme.spacing.g7} 0;
  @media ${theme.breakPoints.lg} {
    margin: ${theme.spacing.g6} 0;
    padding: ${theme.spacing.g2};
  }
`

const div = {}

div.row = styled.div`
  max-width: ${theme.maxMin.contentMaxWidth};
  margin-left: ${theme.spacing.g7};
  @media ${theme.breakPoints.xl} {
    margin-left: ${theme.spacing.g6};
  }
  @media ${theme.breakPoints.lg} {
    margin: 0 ${theme.spacing.g6} 0 ${theme.spacing.g6};
  }
  @media ${theme.breakPoints.sm} {
    margin: 0 ${theme.spacing.g4} 0 ${theme.spacing.g4};
  }
  nav {
    z-index: 20;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 50%;
    padding: 0 0 ${theme.spacing.g6} 0;
    @media ${theme.breakPoints.lg} {
      width: 90%;
      flex-wrap: wrap;
      margin: 0 auto;
    }
    @media ${theme.breakPoints.sm} {
      flex-direction: column;
      padding: 0 0 ${theme.spacing.g6} 0;
    }
    .serviceButton {
      margin: 0 10px 0 0;
    }
  }
`

const p = {}
p.mobileSelect = styled.p`
  ${theme.typography.medlrg};
  display: none;
  text-align: center;
  padding-bottom: ${theme.spacing.g5};
  @media ${theme.breakPoints.sm} {
    display: block;
  }
`
//#endregion

const Services = ({ data }) => {
  const [currentTopic, setTopic] = useState(data?.categoryList[0])
  return (
    <section.services data-tinafield='serviceSlider'>
      <BoxBackground>
        <ArtisticBackgroundElement left='40%' xxlLeft='30%' />
        <div.row>
          <p.mobileSelect>select a category</p.mobileSelect>
          <nav>
            {data?.categoryList.map((category, index) => {
              return (
                <div
                  key={category.title + 'filterButton'}
                  onClick={() => {
                    setTopic(data?.categoryList[index])
                  }}
                  className='serviceButton'
                >
                  <FilterButton selected={currentTopic.title === category.title}>
                    {category.title}
                  </FilterButton>
                </div>
              )
            })}
          </nav>
          {data?.categoryList?.map((category) => {
            return (
              <TopicDisplay
                key={category.title + 'display'}
                currentTopic={currentTopic.title}
                topic={category}
              />
            )
          })}
        </div.row>
      </BoxBackground>
    </section.services>
  )
}

export default Services
