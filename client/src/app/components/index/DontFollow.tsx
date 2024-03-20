import { Box, Button, Typography } from "@mui/material"

const DontFollow = ({ redirectUsers }: { redirectUsers: () => void }) => {
    return (
        <Box mt={2} display="flex" justifyContent="center" alignItems="center" flexDirection="column">
            <Typography variant="h6">You don't follow any user</Typography>
            <Button variant="outlined" color="warning" sx={{
                mt: 2
            }} onClick={redirectUsers}>
                Explore users
            </Button>
        </Box>
    )
}

export default DontFollow