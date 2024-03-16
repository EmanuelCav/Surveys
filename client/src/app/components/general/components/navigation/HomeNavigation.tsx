import { Box, Typography } from '@mui/material'
import { FaHome } from "react-icons/fa";

const HomeNavigation = ({ redirectHome }: { redirectHome: () => void }) => {
    return (
        <Box width='100%' p={2} display='flex' justifyContent='space-between' alignItems='center' sx={{
            ":hover": {
                background: '#dddddd',
                cursor: 'pointer'
            },
            ":active": {
                background: '#ffffff'
            }
        }} onClick={redirectHome} >
            <Typography variant="h5">
                Home
            </Typography>
            <FaHome size={20} />
        </Box>
    )
}

export default HomeNavigation