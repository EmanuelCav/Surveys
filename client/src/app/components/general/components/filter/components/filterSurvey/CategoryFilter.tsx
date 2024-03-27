import { Box, Button, Typography } from "@mui/material"
import { NavigateFunction } from "react-router-dom"

const CategoryFilter = ({ navigate }: { navigate: NavigateFunction }) => {

    const redirectCategories = () => {
        navigate('/explore/categories')
    }

    return (
        <Box my={3}>
            <Typography variant="h6" color="#f64">Categories</Typography>
            <Button sx={{ mt: 2 }} color="warning" variant="outlined" size="small" onClick={redirectCategories}>
                Show categories
            </Button>
        </Box>
    )
}

export default CategoryFilter