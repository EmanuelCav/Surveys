import { FormControlLabel, Radio } from "@mui/material"

const RadioInputs = ({ value }: { value: string }) => {
    return (
        <FormControlLabel value={value} control={<Radio />} label={value.charAt(0) + value.slice(0, value.length)} />
    )
}

export default RadioInputs