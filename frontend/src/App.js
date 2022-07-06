import {Container, AppBar, Typography, Grow, Grid} from '@mui/material'
import memories from './images/memories.png'
import Form from './components/Form/form'
import Posts from './components/Posts/posts'
import classes  from './styles';



function App() {
  return (
    <Container maxWidth="lg">
      <AppBar style={classes.appBar} position="static" color="inherit">
        <Typography style={classes.heading} variant="h2" align="center">
          Memories
        </Typography>
        <img style={classes.image} src={memories} alt="memories" height="60" />
      </AppBar>
      <Grow in>
        <Grid
          container
          justify="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={7}>
            <Posts />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form />
          </Grid>
        </Grid>
      </Grow>
    </Container>
  );
}

export default App;
