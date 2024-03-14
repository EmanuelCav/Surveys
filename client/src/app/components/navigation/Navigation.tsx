import { Box } from "@mui/material"

import Users from "./components/Users"
import Categories from "./components/Categories"

const Navigation = () => {
    return (
        <Box position='absolute' top={0} left={0}>
            <Box position='fixed' height='100vh' width={294} p={2}>
                <Users />
                <Categories />
            </Box>
        </Box>
    )
}

export default Navigation