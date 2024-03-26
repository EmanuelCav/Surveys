import { Box, TextField } from '@mui/material'
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

import { InputPasswordPropsType } from '../../types/props.types';

const InputPassword = ({ showPassword, value, handleChange, setPassword, text }: InputPasswordPropsType) => {
    return (
        <Box sx={{ position: 'relative', justifyContent: 'center', alignItems: 'center', display: 'flex', mt: 2 }}>
            <TextField
                margin="normal"
                fullWidth
                name={text.toLowerCase()}
                label={text.charAt(0).toUpperCase() + text.slice(1, text.length)}
                type={showPassword ? 'text' : 'password'}
                color='warning'
                value={value}
                sx={{
                    '&:hover fieldset': {
                        borderColor: '#f64 !important'
                    },
                    m: 0
                }}
                onChange={handleChange}
            />
            {
                showPassword ?
                    <AiFillEyeInvisible color='#f64' size={24} className='eye-icon' onClick={setPassword} />
                    : <AiFillEye color='#f64' size={24} className='eye-icon' onClick={setPassword} />
            }
        </Box>
    )
}

export default InputPassword