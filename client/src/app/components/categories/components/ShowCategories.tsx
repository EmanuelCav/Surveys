import { Grid } from '@mui/material'

import Category from './components/Category'

import { ICategory } from '../../../interfaces/Survey'
import { ShowCategoriesPropsType } from '../../../types/props.types'

const ShowCategories = ({ categories, getCategory, user }: ShowCategoriesPropsType) => {
  return (
    <Grid container mt={2} spacing={1}>
      <Grid container spacing={2}>
        {
          categories.map((category: ICategory) => {
            return <Category category={category} getCategory={getCategory} user={user} key={category.id} />
          })
        }
      </Grid>
    </Grid>
  )
}

export default ShowCategories