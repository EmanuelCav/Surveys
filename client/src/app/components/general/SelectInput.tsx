import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"

import { SelectPropsType } from "../../types/props.types"

const SelectInput = ({ text, value, handleChange, array }: SelectPropsType) => {
    return (
        <FormControl fullWidth sx={{
            mt: 2,
            mb: 1
        }}>
            <InputLabel color='warning'>{text}</InputLabel>
            <Select
                name={text.toLowerCase()}
                value={value}
                label={text}
                color='warning'
                onChange={handleChange}
                sx={{
                    '&:hover fieldset': {
                        borderColor: '#f64 !important',
                    },
                }}
            >
                {
                    array.map((g) => {
                        return <MenuItem sx={{ background: value === g.category ? '#dddddd !important' : '#ffffff' }} value={g.category} key={g.id}>
                            {g.category}
                        </MenuItem>
                    })
                }
            </Select>
        </FormControl>
    )
}

export default SelectInput