import { BsSearch } from "react-icons/bs";

import { Box, FormControl, Input, InputAdornment } from "@mui/material";

const Search = () => {
    return (
        <Box sx={{ '& > :not(style)': { m: 1 }, userSelect: 'none' }}>
            <FormControl variant="standard">
                <Input
                    id="input-with-icon-adornment"
                    color="warning"
                    autoComplete="off"
                    sx={{
                        borderBottomColor: '#f64',
                        ":hover": {
                            color: '#f64'
                        }
                    }}
                    startAdornment={
                        <InputAdornment position="start" variant="outlined">
                            <BsSearch color="#f64" />
                        </InputAdornment>
                    }
                    placeholder="Search on Surveys"
                />
            </FormControl>
        </Box>
    )
}

export default Search