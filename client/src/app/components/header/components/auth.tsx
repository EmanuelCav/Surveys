import { useNavigate } from "react-router-dom";

const Auth = () => {

  const navigate = useNavigate()

  const redirectAuth = () => {
    navigate('/auth')
  }

  return (
    <div className="container-auth">
      <p className="option-auth-header" onClick={redirectAuth}>Login</p>
      <p className="option-list-header">Help</p>
    </div>
  )
}

export default Auth