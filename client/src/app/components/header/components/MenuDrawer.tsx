import { Box, Drawer, List } from "@mui/material"

import ListDrawer from "./components/menuDrawer/ListDrawer"

import { MenuDrawerPropsType } from "../../../types/props.types"

const MenuDrawer = ({ isMenu, handleMenu, navigate, user }: MenuDrawerPropsType) => {

    const loggedInMenu = (
        <List>
            <ListDrawer text="New Survey" func={() => navigate("/surveys/create")} />
            <ListDrawer text="Explore" func={() => navigate("/explore/surveys")} />
            <ListDrawer text="Profile" func={() => navigate("/profile/" + user.user.user?.id)} />
        </List>
    );

    const loggedOutMenu = (
        <List>
            <ListDrawer text="Explore" func={() => navigate("/explore/surveys")} />
            <ListDrawer text="Sign In" func={() => navigate("/auth")} />
        </List>
    );


    return (
        <Drawer
            anchor="left"
            open={isMenu}
            onClose={handleMenu}
        >
            <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={handleMenu}
                onKeyDown={handleMenu}
            >
                {
                    user.isLoggedIn && user.user.token ? loggedInMenu : loggedOutMenu
                }
            </Box>
        </Drawer>
    )
}

export default MenuDrawer