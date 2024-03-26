import { useDispatch } from 'react-redux'
import { Navigate, useNavigate } from "react-router-dom";
import { Box } from "@mui/material"

import FormHeader from "../components/general/FormHeader"
import FormTitle from "../components/general/FormTitle"
import UpdatePassword from "../components/password/UpdatePassword"

const Password = ({ email }: { email: string | null }) => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <>
      {
        email ? (
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
              <UpdatePassword email={email} dispatch={dispatch} navigate={navigate} />
            </Box>
          </Box>
        ) : (
          <Navigate to='/' />
        )
      }
    </>
  )
}

export default Password