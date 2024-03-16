import { Button, CardActions } from '@mui/material'

import { ButtonCardPropsType } from '../../types/props.types'

const ButtonCard = ({ id, text, func }: ButtonCardPropsType) => {
    return (
        <CardActions>
            <Button variant="contained" color="warning" fullWidth size="medium" onClick={() => func(id)}>{text}</Button>
        </CardActions>
    )
}

export default ButtonCard