import { Box, Card, CardContent, Grid, Typography } from '@mui/material'

import ButtonCard from '../../../general/ButtonCard'

import { CategoryPropsType } from '../../../../types/props.types'

const Category = ({ category, getCategory }: CategoryPropsType) => {
  return (
    <Grid item xs={3}>
      <Card sx={{
        boxShadow: "0 0 2px 1px #f76 inset",
        p: 2,
        userSelect: 'none',
        msUserSelect: 'none',
        MozUserSelect: 'none',
        WebkitUserSelect: 'none'
      }}>
        <CardContent sx={{ textAlign: 'center' }}>
          <Typography noWrap variant="h6" align="center" component="div">
            {category.category}
          </Typography>
          <Box
            component="img"
            src={category.iconCategory}
            alt={category.category}
            width={50}
            height={50}
            mt={2}
          />
        </CardContent>
        <ButtonCard id={category.id} func={getCategory} text="View" />
      </Card>
    </Grid>
  )
}

export default Category