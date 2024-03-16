import { Box } from "@mui/material"

import ExploreHeader from "../general/ExploreHeader"
import Users from "./components/ShowUsers"

import { IUser } from "../../interfaces/User"

const ExploreUsers = ({ users }: { users: IUser[] }) => {
  return (
    <Box width='100%' p={2} sx={{
      marginLeft: '294px'
    }}>
      <ExploreHeader />
      <Users users={users} />
    </Box>
  )
}

export default ExploreUsers