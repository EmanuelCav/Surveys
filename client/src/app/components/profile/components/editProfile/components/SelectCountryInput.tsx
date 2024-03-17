import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"

import { ICountry } from "../../../../../interfaces/User"

import { SelectCountryInputPropsType } from "../../../../../types/props.types"

const SelectCountryInput = ({ text, value, handleChange, array }: SelectCountryInputPropsType) => {
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
          array.map((country: ICountry) => {
            return <MenuItem sx={{ background: value === country.country ? '#dddddd !important' : '#ffffff' }} value={country.country} key={country.id}>
              {country.country}
            </MenuItem>
          })
        }
      </Select>
    </FormControl>
  )
}

export default SelectCountryInput