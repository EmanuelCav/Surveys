import { Box } from "@mui/material"

import ExploreHeader from "./components/explore/ExploreHeader"
import Categories from "./components/explore/Categories"

import { ICategory } from "../../interfaces/Survey"

const ExploreCategories = ({ categories }: { categories: ICategory[] }) => {
  return (
    <Box width='100%' p={2} sx={{
      marginLeft: '294px'
    }}>
      <ExploreHeader />
      <Categories categories={categories} />
    </Box>
  )
}

export default ExploreCategories