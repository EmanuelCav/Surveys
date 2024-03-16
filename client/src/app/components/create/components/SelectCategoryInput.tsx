import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"

import { SelectCategoryInputPropsType } from "../../../types/props.types"
import { ICategory } from "../../../interfaces/Survey"

const SelectCategoryInput = ({ text, value, handleChange, array }: SelectCategoryInputPropsType) => {
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
                array.map((category: ICategory) => {
                    return <MenuItem sx={{ background: value === category.category ? '#dddddd !important' : '#ffffff' }} value={category.category} key={category.id}>
                        {category.category}
                    </MenuItem>
                })
            }
        </Select>
    </FormControl>
  )
}

export default SelectCategoryInput