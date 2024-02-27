import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom'
import { AppBar, Box, Toolbar } from "@mui/material";

import { IReducer } from "../../interfaces/Reducer";

import ContainerAuth from "../auth/ContainerAuth";
import Auth from "./components/Auth"
import Icon from "./components/Icon"
import Search from "./components/Search";

import { selector } from "../../helper/selector";

const Header = () => {

  const user = useSelector((state: IReducer) => selector(state).user)

  const location = useLocation()
  const navigate = useNavigate()

  const [isLogin, setIsLogin] = useState<boolean>(false)
  const [isRegister, setIsRegister] = useState<boolean>(false)

  useEffect(() => {
    if (isLogin || isRegister) {
      document.body.style.overflow = "hidden";
      return
    }

    document.body.style.overflow = "auto";

  }, [isLogin, isRegister])


  return (
    <Box>
      {
        (isLogin || isRegister) && <ContainerAuth
          isLogin={isLogin} isRegister={isRegister} navigate={navigate} setIsLogin={setIsLogin} setIsRegister={setIsRegister}
        />
      }
      <AppBar sx={{
        background: '#ffffff',
        padding: 1,
        zIndex: 6
      }}>
        <Toolbar sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <Icon isLoggedIn={user.isLoggedIn} navigate={navigate} location={location} />
          <Search />
          <Auth isLoggedIn={user.isLoggedIn} setIsLogin={setIsLogin} />
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header