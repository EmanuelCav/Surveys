import { Fade, Menu, MenuItem } from "@mui/material"

import { PanelSurveyPropsType } from "../../../../../types/props.types"

const PanelSurvey = ({ anchorEl, open, handleClose, setIsRemove, setIsState }: PanelSurveyPropsType) => {

    const handleRemove = () => {
        handleClose()
        setIsRemove(true)
    }

    const handleState = () => {
        handleClose()
        setIsState(true)
    }

    return (
        <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
        >
            <MenuItem onClick={handleRemove}>Remove</MenuItem>
            <MenuItem onClick={handleState}>Change visibility</MenuItem>
        </Menu>
    )
}

export default PanelSurvey