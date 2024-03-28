import { Box, Card, CardContent, Grid, Switch, Typography } from '@mui/material'

import { CategoryPropsType } from '../../../../types/props.types'

import { isCategorySelected } from '../../../../helper/functions'

const Category = ({ category, getCategory, user }: CategoryPropsType) => {
  return (
    <Grid item xs={3}>
      <Card sx={{
        boxShadow: "0 0 2px 1px #f76 inset",
        p: 2,
        userSelect: 'none',
        msUserSelect: 'none',
        MozUserSelect: 'none',
        WebkitUserSelect: 'none',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        display: 'flex'
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
        <Switch
          checked={isCategorySelected(user, category)}
          onChange={() => getCategory(category.id)}
          inputProps={{ 'aria-label': 'controlled' }}
        />
      </Card>
    </Grid>
  )
}

export default Category