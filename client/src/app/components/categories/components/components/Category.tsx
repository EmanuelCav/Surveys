import { Box, Card, CardContent, Grid, Switch, Typography } from '@mui/material';

import { CategoryPropsType } from '../../../../types/props.types';

import { isCategorySelected } from '../../../../helper/functions';

const Category = ({ category, getCategory, user }: CategoryPropsType) => {
  return (
    <Grid 
      item 
      xs={12}
      sm={6}
      md={4}
      lg={3}
    >
      <Card 
        sx={{
          boxShadow: "0 0 2px 1px #f76 inset",
          p: 2,
          userSelect: 'none',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          display: 'flex',
          height: "100%"
        }}
      >
        <CardContent sx={{ textAlign: 'center' }}>
          <Typography 
            noWrap 
            variant="h6" 
            align="center" 
            component="div"
            sx={{
              fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" }
            }}
          >
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
        {
          user.isLoggedIn &&
          <Switch
            checked={isCategorySelected(user.user.user!, category)}
            onChange={() => getCategory(category.id)}
            inputProps={{ 'aria-label': 'controlled' }}
          />
        }
      </Card>
    </Grid>
  );
};

export default Category;
