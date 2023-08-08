import { NavigateFunction } from "react-router-dom"

const Logo = ({ navigate }: {navigate: NavigateFunction}) => {

  const redirectIndex = () => {
    navigate('/')
  }

  return (
    <div className="container-logo-header" onClick={redirectIndex}>
        <img src="/survey.png" alt="survet_logo" className="image-logo-header" />
        <h1 className="text-logo-header">Surveys</h1>
    </div>
  )
}

export default Logo