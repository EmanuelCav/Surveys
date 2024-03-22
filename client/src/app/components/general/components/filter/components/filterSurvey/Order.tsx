import { Box, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material"

import { OrderPropsType } from "../../../../../../types/props.types"

const Order = ({ handleOrder, value }: OrderPropsType) => {
    return (
        <Box my={3}>
            <Typography variant="h6" color="#f64">Order by</Typography>
            <FormControl>
                <RadioGroup value={value} onChange={handleOrder} row>
                    <FormControlLabel value="random" control={<Radio />} label="Random" />
                    <FormControlLabel value="most recent" control={<Radio />} label="Most recent" />
                    <FormControlLabel value="older" control={<Radio />} label="Older" />
                    <FormControlLabel value="recommendations" control={<Radio />} label="Recommendations" />
                    <FormControlLabel value="votes" control={<Radio />} label="Votes" />
                </RadioGroup>
            </FormControl>
        </Box>
    )
}

export default Order