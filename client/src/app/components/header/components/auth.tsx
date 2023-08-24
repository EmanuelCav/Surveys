import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { IReducer } from "../../../interfaces/Reducer";

const Auth = ({ isLoggedIn }: { isLoggedIn: boolean }) => {

  const { user } = useSelector((state: IReducer) => state)

  const navigate = useNavigate()

  const redirectAuth = () => {
    navigate('/auth')
  }

  const redirectCreate = () => {
    navigate('/surveys/create')
  }

  const redirectProfile = () => {
    navigate(`/profile/${user.user.user._id}`)
  }

  return (
    <div className="container-auth-header">
      {
        isLoggedIn ? <>
          <p className="option-list-header" style={{ margin: "0 30px" }} onClick={redirectProfile}>Profile</p>
          <p className="option-auth-header" onClick={redirectCreate}>Create Survey</p>
        </> : <>
          <p className="option-auth-header" onClick={redirectAuth}>Login</p>
          <p className="option-list-header">Help</p>
        </>
      }
    </div>
  )
}

export default Auth