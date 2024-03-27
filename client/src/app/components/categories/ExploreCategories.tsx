import { Box } from "@mui/material"

import ShowCategories from "./components/ShowCategories"

import { ExploreCategoriesPropsType } from "../../types/props.types"

const ExploreCategories = ({ categories, getCategory }: ExploreCategoriesPropsType) => {
  return (
    <Box width='100%' p={2} sx={{
      marginLeft: '294px'
    }}>
      <ShowCategories categories={categories} getCategory={getCategory} />
    </Box>
  )
}

export default ExploreCategories