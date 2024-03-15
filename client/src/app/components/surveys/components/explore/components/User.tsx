import { Card, Grid } from "@mui/material"

import { IUser } from "../../../../../interfaces/User"

const User = ({ user }: { user: IUser }) => {
  return (
    <Grid item xs={6}>
      <Card>
        <p>{user.username}</p>
      </Card>
    </Grid>
  )
}

export default User