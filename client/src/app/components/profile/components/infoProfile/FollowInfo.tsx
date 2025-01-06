import { Box } from '@mui/material';

import { IUser } from '../../../../interfaces/User';

import Follow from './Follow';

const FollowInfo = ({ user }: { user: IUser }) => {
    return (
        <Box
            mt={2}
            width="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexWrap="wrap"
        >
            <Follow text="Surveys" number={user.surveys?.length || 0} ml={0} />
            <Follow text="Followers" number={user.followers?.length || 0} ml={3} />
            <Follow text="Following" number={user.following?.length || 0} ml={3} />
        </Box>
    );
};

export default FollowInfo;