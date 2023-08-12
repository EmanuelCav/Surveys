import { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { IReducerUser } from "../../interfaces/Reducer";

import Auth from "./components/auth"
import Navigation from "./components/navigation"


const Header = () => {

  const { isLoggedIn } = useSelector((state: IReducerUser) => state)

  const location = useLocation()

  useEffect(() => {
  }, [location])

  return (
    <>
      {
        location.pathname !== "/auth" &&
        <div className="container-header">
          <Navigation isLoggedIn={isLoggedIn} />
          <Auth isLoggedIn={isLoggedIn} />
        </div>
      }
    </>
  )
}

export default Header