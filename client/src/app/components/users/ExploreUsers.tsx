import { Box } from "@mui/material"

import ExploreHeader from "../general/ExploreHeader"
import ShowUsers from "./components/ShowUsers"
import ChangeUsers from "./components/ChangeUsers"

import { ExploreUsersPropsType } from "../../types/props.types"

const ExploreUsers = ({ users, handlePage, page, navigate, usersLength, handleFilter }: ExploreUsersPropsType) => {

  const redirectUser = (id: number) => {
    navigate(`/profile/${id}`)
  }

  return (
    <Box width='100%' p={2} sx={{
      marginLeft: '294px'
    }} className="container-explore">
      <ExploreHeader handleFilter={handleFilter} />
      <ShowUsers users={users} redirectUser={redirectUser} />
      <ChangeUsers handlePage={handlePage} page={page} usersLength={usersLength} />
    </Box>
  )
}

export default ExploreUsers