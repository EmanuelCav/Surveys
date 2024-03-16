import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"

import { SelectStateInputPropsType } from "../../../types/props.types"
import { StateTypeKey } from "../../../types/key.types"

const SelectStateInput = ({ text, value, handleChange, array }: SelectStateInputPropsType) => {
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
                array.map((state: StateTypeKey, index: number) => {
                    return <MenuItem sx={{ background: value === state ? '#dddddd !important' : '#ffffff' }} value={state} key={index}>
                        {state}
                    </MenuItem>
                })
            }
        </Select>
    </FormControl>
  )
}

export default SelectStateInput