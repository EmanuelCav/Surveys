import { Box } from "@mui/material"

import Section from "./components/navigation/Section"
import HomeNavigation from "./components/navigation/HomeNavigation";

import { NavigationPropsType } from "../../types/props.types";

const Navigation = ({ isCategories, isSurveys, isUsers, setIsCategories, setIsUsers, setIsSurveys, navigate }: NavigationPropsType) => {

    const redirectHome = () => {
        navigate('/')
    }

    const handleUsers = () => {
        setIsUsers(true)
        setIsCategories(false)
        setIsSurveys(false)
    }

    const handleCategories = () => {
        setIsCategories(true)
        setIsUsers(false)
        setIsSurveys(false)
    }

    const handleSurveys = () => {
        setIsSurveys(true)
        setIsCategories(false)
        setIsUsers(false)
    }

    return (
        <Box position='absolute' top={0} left={0}>
            <Box position='fixed' height='100vh' width={294} p={2} sx={{
                borderRight: "1px solid #f64"
            }}>
                <HomeNavigation redirectHome={redirectHome} />
                <Section section="Surveys" handleAction={handleSurveys} isAction={isSurveys} />
                <Section section="Categories" handleAction={handleCategories} isAction={isCategories} />
                <Section section="Users" handleAction={handleUsers} isAction={isUsers} />
            </Box>
        </Box>
    )
}

export default Navigation