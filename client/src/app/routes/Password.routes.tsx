import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from "react-router-dom";
import { Box } from "@mui/material"

import FormHeader from "../components/general/FormHeader"
import FormTitle from "../components/general/FormTitle"
import UpdatePassword from "../components/password/UpdatePassword"

import { IReducer } from '../interfaces/Reducer';

import { selector } from '../helper/selector';

const Password = () => {

  const user = useSelector((state: IReducer) => selector(state).user)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <>
      {(!user.user.user?.email || user.isLoggedIn) ? (
        <Navigate to="/" />
      ) : (
        <Box className="full-screen"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            userSelect: 'none'
          }}>
          <Box
            sx={{
              py: 2,
              px: 4,
              width: '37.66%'
            }}
          >
            <FormHeader />
            <FormTitle title="Update your password" />
            <UpdatePassword dispatch={dispatch} navigate={navigate} email={user.user.user.email} />
          </Box>
        </Box>
      )}
    </>
  )
}

export default Password