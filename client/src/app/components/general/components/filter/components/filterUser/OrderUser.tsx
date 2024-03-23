import { Box, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material"

import { OrderUserPropsType } from "../../../../../../types/props.types"

const OrderUser = ({ value, handleOrder }: OrderUserPropsType) => {
  return (
    <Box my={3}>
            <Typography variant="h6" color="#f64">Order by</Typography>
            <FormControl>
                <RadioGroup value={value} onChange={handleOrder} row>
                    <FormControlLabel value="random" control={<Radio />} label="Random" />
                    <FormControlLabel value="followers" control={<Radio />} label="Followers" />
                    <FormControlLabel value="surveys" control={<Radio />} label="Surveys" />
                </RadioGroup>
            </FormControl>
        </Box>
  )
}

export default OrderUser