import { Box, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material"

import { DatePropsType } from "../../../../../../types/props.types"

const Date = ({ handleDate, value }: DatePropsType) => {
    return (
        <Box my={3}>
            <Typography variant="h6" color="#f64">Date</Typography>
            <FormControl>
                <RadioGroup value={value} onChange={handleDate} row>
                    <FormControlLabel value="total" control={<Radio />} label="Total" />
                    <FormControlLabel value="year" control={<Radio />} label="Year" />
                    <FormControlLabel value="month" control={<Radio />} label="Month" />
                    <FormControlLabel value="week" control={<Radio />} label="Week" />
                    <FormControlLabel value="day" control={<Radio />} label="Day" />
                </RadioGroup>
            </FormControl>
        </Box>
    )
}

export default Date