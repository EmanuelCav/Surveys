import { useEffect, useState } from 'react'
import { AiOutlineUser } from 'react-icons/ai';
import { Box } from '@mui/material';

import { AuthPropsType } from '../../../types/props.types';

import ButtonNav from './components/auth/ButtonNav';
import NavIsAuth from './components/auth/NavIsAuth';

const Auth = ({ user, setIsLogin, navigate }: AuthPropsType) => {

  const [menu, setMenu] = useState<boolean>(window.matchMedia("(max-width: 550px)").matches)

  const redirectAuth = () => {
    setIsLogin(true)
  }

  useEffect(() => {
    window
      .matchMedia("(max-width: 550px)")
      .addEventListener('change', e => setMenu(e.matches));
  }, [])

  return (
    <Box sx={{
      justifyContent: 'space-evenly',
      alignItems: 'center',
      display: 'flex',
      flex: 1
    }}>
      {
        user.isLoggedIn ?
          <NavIsAuth navigate={navigate} id={user.user.user?.id!} />
          :
          <ButtonNav func={redirectAuth} ComponentIcon={AiOutlineUser} text='Sign in' />
      }
    </Box>
  )
}

export default Auth