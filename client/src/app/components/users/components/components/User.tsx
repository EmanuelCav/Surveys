import { Card, CardContent, Grid, Typography } from "@mui/material";

import ButtonCard from "../../../general/ButtonCard";
import InfoExplore from "../../../general/InfoExplore";

import { UserPropsType } from "../../../../types/props.types";

const User = ({ user, redirectUser }: UserPropsType) => {
  return (
    <Grid 
      item 
      xs={12}
      sm={6}
      md={4}
      lg={3}
    >
      <Card 
        sx={{
          boxShadow: "0 0 2px 1px #f76 inset",
          p: 2,
          maxWidth: "100%",
          height: "100%"
        }}
      >
        <CardContent>
          <Typography 
            noWrap 
            variant="h6" 
            align="center" 
            component="div"
            sx={{
              fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
            }}
          >
            {user.username}
          </Typography>
          <InfoExplore data={user} />
        </CardContent>
        <ButtonCard id={user.id!} func={redirectUser} text="View" />
      </Card>
    </Grid>
  );
};

export default User;
