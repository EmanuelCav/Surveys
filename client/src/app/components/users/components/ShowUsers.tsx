import { Grid } from "@mui/material";

import User from "./components/User";

import { IUser } from "../../../interfaces/User";
import { ShowUsersPropsType } from "../../../types/props.types";

const ShowUsers = ({ users, redirectUser }: ShowUsersPropsType) => {
  return (
    <Grid 
      container 
      mt={2} 
      spacing={2} 
      justifyContent="center"
    >
      {
        users.map((user: IUser) => (
          <User user={user} redirectUser={redirectUser} key={user.id} />
        ))
      }
    </Grid>
  );
};

export default ShowUsers;
