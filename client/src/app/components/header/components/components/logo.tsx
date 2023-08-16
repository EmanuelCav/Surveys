import { logoHeaderType } from "../../../../types/index.types"

const Logo = ({ navigate, isLoggedIn }: logoHeaderType) => {

  const redirectIndex = () => {
    if (!isLoggedIn) {
      navigate('/')
    }
  }

  return (
    <div className="container-logo-header" onClick={redirectIndex} style={isLoggedIn ? { cursor: 'default' } : { cursor: 'pointer' }}>
      <img src="/survey.png" alt="survet_logo" className="image-logo-header" />
      <h1 className="text-logo-header">Surveys</h1>
    </div>
  )
}

export default Logo