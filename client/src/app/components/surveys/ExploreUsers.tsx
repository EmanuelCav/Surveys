import { Box } from "@mui/material"

import ExploreHeader from "./components/explore/ExploreHeader"
import Users from "./components/explore/Users"

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