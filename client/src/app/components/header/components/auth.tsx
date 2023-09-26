import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { AiOutlineMenu } from 'react-icons/ai';

import { IReducer } from "../../../interfaces/Reducer";

import { selector } from '../../../helper/selector';

const Auth = ({ isLoggedIn }: { isLoggedIn: boolean }) => {

  const user = useSelector((state: IReducer) => selector(state).user)

  const navigate = useNavigate()
  const location = useLocation()

  const [menu, setMenu] = useState(window.matchMedia("(max-width: 500px)").matches)

  const redirectAuth = () => {
    navigate('/auth')
  }

  const redirectCreate = () => {
    navigate('/surveys/create')
  }

  const redirectProfile = () => {
    navigate(`/profile/${user.user.user._id}`)
  }

  useEffect(() => {
    window
      .matchMedia("(max-width: 500px)")
      .addEventListener('change', e => setMenu(e.matches));
  }, [])

  useEffect(() => {
  }, [location])

  return (
    <div className="container-auth-header">
      {
        menu ? (
          <AiOutlineMenu size={24} />
        ) : (
          <>
            {
              isLoggedIn ? (
                <>
                  <p className="option-list-header" style={location.pathname === `/profile/${user.user.user._id}` ?
                    { color: '#f64', cursor: 'default', fontWeight: 700, textDecoration: 'underline', margin: "0 30px" } : { margin: "0 30px" }} onClick={redirectProfile}>Profile</p>
                  <p className="option-auth-header" style={location.pathname === "/surveys/create" ?
                    { color: '#f64', cursor: 'default', fontWeight: 700, textDecoration: 'underline' } : {}} onClick={redirectCreate}>Create Survey</p>
                </>
              ) : (
                <>
                  <p className="option-auth-header" onClick={redirectAuth}>Login</p>
                  <p className="option-list-header">Help</p>
                </>
              )
            }
          </>
        )
      }
    </div>
  )
}

export default Auth