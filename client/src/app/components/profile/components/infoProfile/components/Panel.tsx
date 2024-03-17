import { Fade, Menu, MenuItem } from "@mui/material"

import { PanelPropsType } from "../../../../../types/props.types"

import { userLogout } from "../../../../../server/actions/user.actions"

const Panel = ({ anchorEl, handleClose, open, navigate, dispatch }: PanelPropsType) => {

    const logOut = () => {
        dispatch(userLogout(navigate) as any)
        handleClose()
    }

    return (
        <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
        >
            <MenuItem onClick={logOut}>Logout</MenuItem>
        </Menu>
    )
}

export default Panel