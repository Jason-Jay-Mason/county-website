import { styled } from '@linaria/react'
import Link from 'next/link'
import { theme } from '../styles/theme'

//#region styles
const div = {}
div.section = styled.div`
  padding: 0 ${theme.spacing.g4};
  height: 35px;
  background-color: ${theme.colors.tempestBlue};
  @media ${theme.breakPoints.lg} {
    display: none;
  }
`
div.row = styled.div`
  max-width: 1370px;
  display: flex;
  height: 35px;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`
div.col = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  display: flex;
  justify-content: center;
  padding: ${theme.spacing.g3} 0;
  svg {
    margin: 0 ${theme.spacing.g3};
  }
  :nth-child(1) {
    justify-content: flex-end;
    flex-basis: 20%;
  }
  :nth-child(3) {
    justify-content: flex-end;
    flex-basis: 20%;
  }
`
div.alert = styled.div`
  color: white;
  display: flex;
  font-size: ${theme.fontSize.xxsml};
  font-weight: 100;
  a {
    margin: 0;
    color: ${theme.colors.highlightYellow};
  }
`
//#endregion styles

const Subheader = ({ data }) => {
  const { googleMapsUrl, facebookUrl, linkedInUrl, youTubeUrl, instagramUrl, bbbUrl } = data || {}
  return (
    <>
      <div.section>
        <div.row>
          <div.col></div.col>
          <div.col>
            <div.alert>
              <p>
                County Line Construction & Excavation is rated 5 stars on
                <Link href={googleMapsUrl || '/'} passHref>
                  <a> Google </a>
                </Link>
                &
                <Link href={facebookUrl || '/'} passHref>
                  <a> Facebook </a>
                </Link>
              </p>
            </div.alert>
          </div.col>
          <div.col>
            {facebookUrl && (
              <Link href={facebookUrl || '/'} passHref>
                <a>
                  <svg
                    stroke='currentColor'
                    fill='currentColor'
                    strokeWidth='0'
                    viewBox='0 0 1024 1024'
                    color='white'
                    height='19px'
                    width='19px'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6 44.2 0 82.1 3.3 93.2 4.8v107.9z'></path>
                  </svg>
                </a>
              </Link>
            )}

            {googleMapsUrl && (
              <Link href={googleMapsUrl || '/'} passHref>
                <a>
                  <svg
                    stroke='currentColor'
                    fill='currentColor'
                    strokeWidth='0'
                    role='img'
                    viewBox='0 0 24 24'
                    color='white'
                    height='16px'
                    width='16px'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M19.527 4.799c1.212 2.608.937 5.678-.405 8.173-1.101 2.047-2.744 3.74-4.098 5.614-.619.858-1.244 1.75-1.669 2.727-.141.325-.263.658-.383.992-.121.333-.224.673-.34 1.008-.109.314-.236.684-.627.687h-.007c-.466-.001-.579-.53-.695-.887-.284-.874-.581-1.713-1.019-2.525-.51-.944-1.145-1.817-1.79-2.671L19.527 4.799zM8.545 7.705l-3.959 4.707c.724 1.54 1.821 2.863 2.871 4.18.247.31.494.622.737.936l4.984-5.925-.029.01c-1.741.601-3.691-.291-4.392-1.987a3.377 3.377 0 0 1-.209-.716c-.063-.437-.077-.761-.004-1.198l.001-.007zM5.492 3.149l-.003.004c-1.947 2.466-2.281 5.88-1.117 8.77l4.785-5.689-.058-.05-3.607-3.035zM14.661.436l-3.838 4.563a.295.295 0 0 1 .027-.01c1.6-.551 3.403.15 4.22 1.626.176.319.323.683.377 1.045.068.446.085.773.012 1.22l-.003.016 3.836-4.561A8.382 8.382 0 0 0 14.67.439l-.009-.003zM9.466 5.868L14.162.285l-.047-.012A8.31 8.31 0 0 0 11.986 0a8.439 8.439 0 0 0-6.169 2.766l-.016.018 3.665 3.084z'></path>
                  </svg>
                </a>
              </Link>
            )}

            {linkedInUrl && (
              <Link href={linkedInUrl || '/'} passHref>
                <a>
                  <svg
                    stroke='currentColor'
                    fill='currentColor'
                    strokeWidth='0'
                    viewBox='0 0 1024 1024'
                    color='white'
                    height='19px'
                    width='19px'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z'></path>
                  </svg>
                </a>
              </Link>
            )}

            {youTubeUrl && (
              <Link href={youTubeUrl || '/'} passHref>
                <a>
                  <svg
                    stroke='currentColor'
                    fill='currentColor'
                    strokeWidth='0'
                    viewBox='0 0 1024 1024'
                    color='white'
                    height='22.6px'
                    width='22.6px'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M941.3 296.1a112.3 112.3 0 0 0-79.2-79.3C792.2 198 512 198 512 198s-280.2 0-350.1 18.7A112.12 112.12 0 0 0 82.7 296C64 366 64 512 64 512s0 146 18.7 215.9c10.3 38.6 40.7 69 79.2 79.3C231.8 826 512 826 512 826s280.2 0 350.1-18.8c38.6-10.3 68.9-40.7 79.2-79.3C960 658 960 512 960 512s0-146-18.7-215.9zM423 646V378l232 133-232 135z'></path>
                  </svg>
                </a>
              </Link>
            )}

            {instagramUrl && (
              <Link href={instagramUrl || '/'} passHref>
                <a>
                  <svg
                    stroke='currentColor'
                    fill='currentColor'
                    strokeWidth='0'
                    viewBox='0 0 1024 1024'
                    color='white'
                    height='19px'
                    width='19px'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9z'></path>
                  </svg>
                </a>
              </Link>
            )}
          </div.col>
        </div.row>
      </div.section>
    </>
  )
}

export default Subheader
