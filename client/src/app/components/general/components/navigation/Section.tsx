import { Box, Typography } from "@mui/material"
import { FaArrowRight } from "react-icons/fa";

import { SectionPropsType } from "../../../../types/props.types";

const Section = ({ section, handleAction, isAction }: SectionPropsType) => {
    return (
        <Box display='flex' justifyContent='space-between' alignItems='center' p={2} sx={{
            cursor: 'pointer',
            ":hover": {
                background: '#dddddd'
            },
            ":active": {
                background: '#ffffff'
            }
        }} onClick={handleAction}>
            <Typography variant="h6">
                {section}
            </Typography>
            <FaArrowRight color={isAction ? '#f64' : '#000'} size={20} />
        </Box>
    )
}

export default Section