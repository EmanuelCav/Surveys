import { Box, Button, CardActions } from "@mui/material"

import { ButtonFilterPropsType } from "../../../../../types/props.types"

const ButtonFilter = ({ handleFilter, handleOrder }: ButtonFilterPropsType) => {
    return (
        <Box width='100%' display="flex" justifyContent="space-around" alignItems="center" mt={3}>
            <CardActions>
                <Button variant="contained" color="warning">Apply filters</Button>
            </CardActions>
            <Button variant="outlined" color="warning" onClick={handleFilter}>Cancel</Button>
        </Box>
    )
}

export default ButtonFilter