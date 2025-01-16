import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom'
import { AppBar, Box, Container, Toolbar } from "@mui/material";

import { IReducer } from "../../interfaces/Reducer";

import ContainerAuth from "../auth/ContainerAuth";
import Auth from "./components/Auth"
import Icon from "./components/Icon"
import Search from "./components/Search";
import MenuDrawer from "./components/MenuDrawer";

import { welcomeApi } from "../../server/api/surveys.api";

import { selector } from "../../helper/selector";

const Header = () => {

  const user = useSelector((state: IReducer) => selector(state).user)

  const location = useLocation()
  const navigate = useNavigate()

  const [isLogin, setIsLogin] = useState<boolean>(false)
  const [isRegister, setIsRegister] = useState<boolean>(false)
  const [isMenu, setIsMenu] = useState<boolean>(false)

  const handleMenu = () => {
    setIsMenu(!isMenu)
  }

  useEffect(() => {
    if (isLogin || isRegister) {
      document.body.style.overflow = "hidden";
      return
    }

    document.body.style.overflow = "auto";

  }, [isLogin, isRegister])

  useEffect(() => {
    (async () => {
      await welcomeApi()
    })()
  }, [])

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
        <Container fixed maxWidth="lg">
          <Toolbar sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <Icon navigate={navigate} location={location} />
            <Search navigate={navigate} token={user.user.token!} />
            <Auth user={user} setIsLogin={setIsLogin} navigate={navigate} handleMenu={handleMenu} />
          </Toolbar>
        </Container>
      </AppBar>
      <MenuDrawer handleMenu={handleMenu} isMenu={isMenu} navigate={navigate} user={user} />
    </Box>
  )
}

export default Header