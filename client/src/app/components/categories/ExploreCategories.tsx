import { Box } from "@mui/material";

import ShowCategories from "./components/ShowCategories";

import { ExploreCategoriesPropsType } from "../../types/props.types";

const ExploreCategories = ({ categories, getCategory, user }: ExploreCategoriesPropsType) => {
  return (
    <Box 
      width="100%" 
      p={2} 
      sx={{
        marginLeft: { xs: "0", sm: "294px" }
      }} 
      className="container-explore"
    >
      <ShowCategories categories={categories} getCategory={getCategory} user={user} />
    </Box>
  );
};

export default ExploreCategories;
