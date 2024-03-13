import { Typography } from "@mui/material"

import { ActionOptionPropsType } from "../../../types/props.types"

const ActionOption = ({ text, handleOptionAction, disabled }: ActionOptionPropsType) => {
    return (
        <Typography my={2} variant="h5" color={disabled ? "#fa8" : "#f64"} sx={{
            userSelect: 'none',
            MozUserSelect: 'none',
            cursor: disabled ? 'default' : 'pointer',
            ":hover": {
                textDecoration: disabled ? 'none' : 'underline'
            },
            ":active": {
                textDecoration: 'none'
            }
        }} onClick={!disabled ? () => handleOptionAction(text === "Add an option") : () => {}}>
            {text}
        </Typography>
    )
}

export default ActionOption