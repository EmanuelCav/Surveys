import { Grid } from '@mui/material';

import Category from './components/Category';

import { ICategory } from '../../../interfaces/Survey';
import { ShowCategoriesPropsType } from '../../../types/props.types';

const ShowCategories = ({ categories, getCategory, user }: ShowCategoriesPropsType) => {
  return (
    <Grid 
      container 
      mt={2} 
      spacing={2} 
      justifyContent="center"
    >
      {
        categories.map((category: ICategory) => (
          <Category 
            category={category} 
            getCategory={getCategory} 
            user={user} 
            key={category.id} 
          />
        ))
      }
    </Grid>
  );
};

export default ShowCategories;
