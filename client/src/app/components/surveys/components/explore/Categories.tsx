import { Grid } from '@mui/material'

import Category from './components/Category'

import { ICategory } from '../../../../interfaces/Survey'

const Categories = ({ categories }: { categories: ICategory[] }) => {
  return (
    <Grid container spacing={1}>
      <Grid container spacing={6}>
        {
          categories.map((category: ICategory) => {
            return <Category category={category} key={category.id} />
          })
        }
      </Grid>
    </Grid>
  )
}

export default Categories