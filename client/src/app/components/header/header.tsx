import { useState } from "react";
import { useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom'
import { AppBar, Box, Toolbar } from "@mui/material";

import { IReducer } from "../../interfaces/Reducer";

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

  return (
    <Box>
      <AppBar sx={{
        background: '#ffffff',
        padding: 1
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