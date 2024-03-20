import { Card, Grid, Typography } from '@mui/material'

import { ICategory } from '../../../../interfaces/Survey'

const Category = ({ category }: { category: ICategory }) => {
  return (
    <Grid item xs={3}>
      <Card>
        <Typography>{category.category}</Typography>
      </Card>
    </Grid>
  )
}

export default Category