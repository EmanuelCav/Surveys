import { Box } from "@mui/material"

import ExploreHeader from "../general/ExploreHeader"
import ShowCategories from "./components/ShowCategories"

import { ShowCategoriesPropsType } from "../../types/props.types"

const ExploreCategories = ({ categories, getCategory }: ShowCategoriesPropsType) => {
  return (
    <Box width='100%' p={2} sx={{
      marginLeft: '294px'
    }}>
      <ExploreHeader />
      <ShowCategories categories={categories} getCategory={getCategory} />
    </Box>
  )
}

export default ExploreCategories