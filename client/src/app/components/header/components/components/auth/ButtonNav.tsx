import { Button } from "@mui/material"

import { ButtonNavPropsType } from "../../../../../types/props.types"

const ButtonNav = ({ func, ComponentIcon, text }: ButtonNavPropsType) => {
    return (
        <Button onClick={func} variant='contained' color='warning' startIcon={<ComponentIcon color="#fff" />}>
            {text}
        </Button>
    )
}

export default ButtonNav