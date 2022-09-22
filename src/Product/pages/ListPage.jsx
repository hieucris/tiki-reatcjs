import React from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Grid, makeStyles, Paper } from '@material-ui/core';

ListPage.propTypes = {};

const useStyle = makeStyles((theme) => ({
  root: {},
  left: {
    width: '250px',
  },
  right: {
    flex: '1 1 auto',
  },
}));

function ListPage(props) {
  const classes = useStyle();
  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <Grid item className={classes.left}>
            <Paper elevation={0}>Left</Paper>
          </Grid>
          <Grid item className={classes.right}>
            <Paper elevation={0}>Right</Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;
