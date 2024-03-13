import { TextField } from "@mui/material"

import { InputOptionPropsType } from "../../../types/props.types"

const InputOption = ({ index, value, handleChange }: InputOptionPropsType) => {
    return (
        <TextField
            margin="normal"
            fullWidth
            label={"Option" + " " + (index + 1)}
            name="name"
            autoComplete="off"
            color='warning'
            value={value}
            onChange={(e) => handleChange(e, index)}
            inputProps={{ maxLength: 40 }}
            sx={{
                my: 2,
                '&:hover fieldset': {
                    borderColor: '#f64 !important',
                },
            }}
        />
    )
}

export default InputOption