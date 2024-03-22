import { Box, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material"

const CategoryFilter = () => {
    return (
        <Box my={3}>
            <Typography variant="h6" color="#f64">Categories</Typography>
            <FormControl>
                <RadioGroup row>
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                    <FormControlLabel value="disabled" control={<Radio />} label="other" />
                </RadioGroup>
            </FormControl>
        </Box>
    )
}

export default CategoryFilter