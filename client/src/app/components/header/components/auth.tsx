import { useEffect, useState } from 'react'
import { AiOutlineUser } from 'react-icons/ai';
import { Box, Button } from '@mui/material';

import { AuthPropsType } from '../../../types/props.types';

const Auth = ({ isLoggedIn, setIsLogin }: AuthPropsType) => {

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
    <Box>
      <Button onClick={redirectAuth} variant='contained' color='warning' startIcon={<AiOutlineUser color="#fff" />}>
        Sign in
      </Button>
    </Box>
  )
}

export default Auth