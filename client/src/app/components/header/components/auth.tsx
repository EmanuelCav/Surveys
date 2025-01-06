import { useEffect, useState } from 'react'
import { Box } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import ExploreIcon from '@mui/icons-material/Explore';

import { AuthPropsType } from '../../../types/props.types';

import ButtonNav from './components/auth/ButtonNav';
import NavIsAuth from './components/auth/NavIsAuth';
import Menu from './components/auth/Menu';

const Auth = ({ user, setIsLogin, navigate, handleMenu }: AuthPropsType) => {

  const [menu, setMenu] = useState<boolean>(window.matchMedia("(max-width: 1050px)").matches)

  const redirectAuth = () => {
    setIsLogin(true)
  }

  useEffect(() => {
    window
      .matchMedia("(max-width: 1050px)")
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
          <>
            {
              menu ? <Menu handleMenu={handleMenu} /> : <NavIsAuth navigate={navigate} id={user.user.user?.id!} />
            }
          </>
          :
          <>
            {
              menu ? <>
                <Menu handleMenu={handleMenu} />
              </> : <>
                <ButtonNav func={() => navigate("/explore/surveys")} ComponentIcon={ExploreIcon} text='Explore' />
                <ButtonNav func={redirectAuth} ComponentIcon={PersonIcon} text='Sign in' />
              </>
            }

          </>
      }
    </Box>
  )
}

export default Auth