import { useDispatch } from 'react-redux'
import { Box } from "@mui/material"

import { ContainerAuthPropsType } from "../../types/props.types"

import Login from "./components/Login"
import Register from "./components/Register"

const ContainerAuth = ({ navigate, setIsLogin, setIsRegister, isLogin, isRegister }: ContainerAuthPropsType) => {

  const dispatch = useDispatch()

  const registerVisibility = () => {
    setIsLogin(false)
    setIsRegister(true)
  }

  const handleIsAuth = () => {
    setIsLogin(false)
    setIsRegister(false)
  }

  return (
    <Box position='fixed' display="flex" justifyContent='center' alignItems='center' sx={{
      top: 0,
      left: 0,
      height: '100vh',
      width: '100%',
      background: 'rgba(0,0,0,0.4)',
      zIndex: 12,
      overflow: 'hidden'
    }}>
      {
        isLogin && <Login navigate={navigate} handleIsAuth={handleIsAuth} dispatch={dispatch} registerVisibility={registerVisibility} />
      }
      {
        isRegister && <Register navigate={navigate} handleIsAuth={handleIsAuth} dispatch={dispatch} />
      }
    </Box>
  )
}

export default ContainerAuth