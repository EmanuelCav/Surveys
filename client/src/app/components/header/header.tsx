import { useEffect } from "react";
import Auth from "./components/auth"
import Navigation from "./components/navigation"

import { useLocation } from 'react-router-dom';

const Header = () => {

  const location = useLocation()

  useEffect(() => {
  }, [location])

  return (
    <>
      {
        location.pathname !== "/auth" &&
        <div className="container-header">
          <Navigation />
          <Auth />
        </div>
      }
    </>
  )
}

export default Header