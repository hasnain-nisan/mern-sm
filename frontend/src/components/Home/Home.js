import React from 'react'
import { Grow, Grid } from "@mui/material";
import Posts from '../Posts/Posts'
import Form from '../Form/Form'

const Home = () => {
  return (
    <Grow in>
      <Grid
        container
        justifyContent="space-between"
        alignItems="stretch"
        spacing={3}
        direction={{ xs: "column-reverse", sm: "row" }}
      >
        <Grid item xs={12} sm={7}>
          <Posts />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Form />
        </Grid>
      </Grid>
    </Grow>
  );
}

export default Home