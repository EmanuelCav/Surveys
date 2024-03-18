import { NavigateFunction } from "react-router-dom"
import { Box } from "@mui/material"

import ImageStart from "./components/start/ImageStart"
import InfoStart from "./components/start/InfoStart"

const Start = ({ navigate }: { navigate: NavigateFunction }) => {
    return (
        <Box display='flex' justifyContent='center' alignItems='center' className="full-screen">
            <InfoStart navigate={navigate} />
            <ImageStart />
        </Box>
    )
}

export default Start