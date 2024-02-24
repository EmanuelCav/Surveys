import { BsSearch } from "react-icons/bs";

import { Box, FormControl, Input, InputAdornment } from "@mui/material";

const Search = () => {
    return (
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <FormControl variant="standard">
                <Input
                    id="input-with-icon-adornment"
                    startAdornment={
                        <InputAdornment position="start">
                            <BsSearch />
                        </InputAdornment>
                    }
                    placeholder="Search on Surveys"
                />
            </FormControl>
        </Box>
    )
}

export default Search