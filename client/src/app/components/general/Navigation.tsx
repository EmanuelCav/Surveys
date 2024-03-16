import { Box } from "@mui/material"

import Section from "./components/navigation/Section"
import HomeNavigation from "./components/navigation/HomeNavigation";

import { NavigationPropsType } from "../../types/props.types";

const Navigation = ({ isCategories, isSurveys, isUsers, navigate }: NavigationPropsType) => {

    const redirectHome = () => {
        navigate('/')
    }

    const redirectUsers = () => {
        navigate('/explore/users')
    }

    const redirectCategories = () => {
        navigate('/explore/categories')
    }

    const redirectSurveys = () => {
        navigate('/explore/surveys')
    }

    return (
        <Box position='absolute' top={0} left={0}>
            <Box position='fixed' height='100vh' width={294} p={2} sx={{
                borderRight: "1px solid #f64"
            }}>
                <HomeNavigation redirectHome={redirectHome} />
                <Section section="Surveys" handleAction={redirectSurveys} isAction={isSurveys} />
                <Section section="Categories" handleAction={redirectCategories} isAction={isCategories} />
                <Section section="Users" handleAction={redirectUsers} isAction={isUsers} />
            </Box>
        </Box>
    )
}

export default Navigation