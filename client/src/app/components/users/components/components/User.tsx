import { Card, CardContent, Grid, Typography } from "@mui/material"

import ButtonCard from "../../../general/ButtonCard"
import InfoExplore from "../../../general/InfoExplore"

import { UserPropsType } from "../../../../types/props.types"

const User = ({ user, redirectUser }: UserPropsType) => {
  return (
    <Grid item xs={4}>
      <Card sx={{
        boxShadow: "0 0 2px 1px #f76 inset",
        p: 2
      }}>
        <CardContent>
          <Typography noWrap variant="h6" align="center" component="div">
            {user.username}
          </Typography>
          <InfoExplore data={user} />
        </CardContent>
        <ButtonCard id={user.id} func={redirectUser} text="View" />
      </Card>
    </Grid>
  )
}

export default User