import NavBar from '../components/nav'
import Custom404Message from '../components/404/custom404Message'

export default function Custom404() {
  return (
    <>
      <NavBar isAbsolute={true} />
      <Custom404Message />
    </>
  )
}
