import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"

import { SelectGenderInputPropsType } from "../../../../../types/props.types"
import { GenderTypeKey } from "../../../../../types/key.types"

const SelectGenderInput = ({ text, value, handleChange, array }: SelectGenderInputPropsType) => {
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
                array.map((gender: GenderTypeKey, index: number) => {
                    return <MenuItem sx={{ background: value === gender ? '#dddddd !important' : '#ffffff' }} value={gender} key={index}>
                        {gender}
                    </MenuItem>
                })
            }
        </Select>
    </FormControl>
  )
}

export default SelectGenderInput