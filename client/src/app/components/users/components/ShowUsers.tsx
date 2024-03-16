import { Grid } from '@mui/material'

import User from './components/User'

import { IUser } from '../../../interfaces/User'
import { ShowUsersPropsType } from '../../../types/props.types'

const ShowUsers = ({ users, redirectUser }: ShowUsersPropsType) => {
    return (
        <Grid container mt={2} spacing={1}>
            <Grid container spacing={2}>
                {
                    users.map((user: IUser) => {
                        return <User user={user} redirectUser={redirectUser} key={user.id} />
                    })
                }
            </Grid>
        </Grid>
    )
}

export default ShowUsers