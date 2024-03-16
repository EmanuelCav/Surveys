import { Card, Grid } from '@mui/material'

import { ICategory } from '../../../../interfaces/Survey'

const Category = ({ category }: { category: ICategory }) => {
  return (
    <Grid item xs={3}>
      <Card>
        <p>{category.category}</p>
      </Card>
    </Grid>
  )
}

export default Category