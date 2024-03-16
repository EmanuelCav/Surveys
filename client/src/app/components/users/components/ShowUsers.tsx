import { Grid } from '@mui/material'

import User from './components/User'

import { IUser } from '../../../interfaces/User'

const ShowUsers = ({ users }: { users: IUser[] }) => {
    return (
        <Grid container spacing={1}>
            <Grid container spacing={6}>
                {
                    users.map((user: IUser) => {
                        return <User user={user} key={user.id} />
                    })
                }
            </Grid>
        </Grid>
    )
}

export default ShowUsers