import { styled } from '@linaria/react'
import { theme } from '../../styles/theme'
import { useEffect, useRef } from 'react'
import { Loader } from '@googlemaps/js-api-loader'
import ArtisticBackgroundElement from '../artisticBgElement.topogrophy'

//#region styles
const { maxMin } = theme
const section = {}
section.contact = styled.section`
  margin-top: ${theme.spacing.g7};
  position: relative;
  background-color: ${theme.colors.tempestBlue};
  @media ${theme.breakPoints.md} {
    margin-top: 0;
  }
`
const div = {}
div.row = styled.div`
  ${theme.elements.row}
  padding:${theme.spacing.g8} ${theme.spacing.g4};
  color: white;
  @media ${theme.breakPoints.lg} {
    padding: ${theme.spacing.g7} ${theme.spacing.g4} ${theme.spacing.g2} ${theme.spacing.g4};
  }
`
div.contactInfo = styled.div`
  h3 {
    ${theme.typography.xxlrg}
    margin: 0;
    padding-bottom: ${theme.spacing.g4};
    @media ${theme.breakPoints.lg} {
      text-align: left;
      padding-bottom: ${theme.spacing.g3};
    }
  }
  p {
    font-size: ${theme.fontSize.lrg};
    @media ${theme.breakPoints.md} {
      font-size: 1rem;
    }
  }
`
div.textBlock = styled.div`
  padding-bottom: ${theme.spacing.g7};
`
div.contactLine = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: ${theme.spacing.g3};
  .breakall {
    word-break: break-all;
  }
  img {
    width: 40px;
    margin-top: 5px;
    padding-right: ${theme.spacing.g4};
  }
  @media ${theme.breakPoints.md} {
    padding-bottom: ${theme.spacing.g2};
    img {
      margin-top: 2px;
      width: 25px;
      padding-right: ${theme.spacing.g3};
    }
  }
`
div.map = styled.div`
  position: absolute;
  top: -11%;
  right: 0;
  border-radius: 15px;
  width: 52%;
  height: 120%;
  justify-content: flex-end;
  @media ${theme.breakPoints.xxl} {
    height: 120%;
    top: -11%;
  }
  @media ${theme.breakPoints.lg} {
    border-radius: 0px;
    position: relative;
    height: 500px;
    width: 100%;
  }
`
//#endregion

const ContactInfo = ({ data }) => {
  const element = <div />
  const googlemap = useRef(element)
  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLEMAPS,
      version: 'weekly',
    })
    let map
    loader.load().then(() => {
      if (googlemap.current !== null) {
        map = new google.maps.Map(googlemap?.current, {
          mapId: process.env.NEXT_PUBLIC_MAPID,
          center: { lat: 47.330003, lng: -122.577394 },
          zoom: 11.2,
          disableDefaultUI: false,
        })
        const circle = new google.maps.Circle({
          strokeColor: '#E35326',
          strokeOpacity: 1,
          strokeWeight: 2,
          fillColor: '#E35326',
          fillOpacity: 0.1,
          map,
          center: { lat: 47.330003, lng: -122.577394 },
          radius: 19000,
        })
      }
    })
  }, [googlemap])
  return (
    <section.contact>
      <div.row>
        <ArtisticBackgroundElement left='200px' opacity='0.1' />
        <div.contactInfo>
          <h3>Contact</h3>
          <div.textBlock>
            <div.contactLine>
              <img src='https://res.cloudinary.com/countylineexcavation/image/upload/v1645122249/Icons/mail_icon_z1n6ky.svg' />
              <p className='breakall'>{data?.email}</p>
            </div.contactLine>
            <div.contactLine>
              <img src='https://res.cloudinary.com/countylineexcavation/image/upload/v1645122249/Icons/regular-phone_kukboc.svg' />
              <p className='breakall'>{data?.phoneNumber}</p>
            </div.contactLine>
          </div.textBlock>
        </div.contactInfo>
        <div.contactInfo>
          <h3>Hours</h3>
          <div.textBlock>
            <div.contactLine>
              <img src='https://res.cloudinary.com/countylineexcavation/image/upload/v1645122243/Icons/hours-icon_feqdhm.svg' />
              <p>{data?.hours}</p>
            </div.contactLine>
          </div.textBlock>
        </div.contactInfo>
      </div.row>

      <div.map id='map' ref={googlemap} />
    </section.contact>
  )
}

export default ContactInfo
