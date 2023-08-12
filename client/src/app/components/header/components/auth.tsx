import { useNavigate } from "react-router-dom";

const Auth = ({ isLoggedIn }: { isLoggedIn: boolean }) => {

  const navigate = useNavigate()

  const redirectAuth = () => {
    navigate('/auth')
  }

  return (
    <div className="container-auth">
      {
        isLoggedIn ? <>
          <p className="option-list-header" style={{ margin: "0 30px" }}>My recommendations</p>
          <p className="option-list-header">Profile</p>
        </> : <>
          <p className="option-auth-header" onClick={redirectAuth}>Login</p>
          <p className="option-list-header">Help</p>
        </>
      }
    </div>
  )
}

export default Auth