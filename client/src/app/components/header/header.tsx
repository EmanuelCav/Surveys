import { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { IReducer } from "../../interfaces/Reducer";

import Auth from "./components/auth"
import Navigation from "./components/navigation"

import { selector } from "../../helper/selector";

const Header = () => {

  const user = useSelector((state: IReducer) => selector(state).user)

  const location = useLocation()

  useEffect(() => {
  }, [location, user.isLoggedIn])

  return (
    <>
      {
        location.pathname !== "/auth" &&
        <div className="container-header">
          <Navigation isLoggedIn={user.isLoggedIn} />
          <Auth isLoggedIn={user.isLoggedIn} />
        </div>
      }
    </>
  )
}

export default Header