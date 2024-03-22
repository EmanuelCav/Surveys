import { Box, Typography } from "@mui/material"

const FilterUser = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                background: '#ffffff',
                width: '28%',
                px: 4,
                py: 2,
                userSelect: 'none',
                position: 'relative'
            }}
        >
            <Typography>
                FilterUser
            </Typography>
        </Box>
    )
}

export default FilterUser