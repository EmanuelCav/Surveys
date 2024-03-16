import { Box } from "@mui/material"

import ExploreHeader from "../general/ExploreHeader"
import ShowCategories from "./components/ShowCategories"

import { ICategory } from "../../interfaces/Survey"

const ExploreCategories = ({ categories }: { categories: ICategory[] }) => {
  return (
    <Box width='100%' p={2} sx={{
      marginLeft: '294px'
    }}>
      <ExploreHeader />
      <ShowCategories categories={categories} />
    </Box>
  )
}

export default ExploreCategories