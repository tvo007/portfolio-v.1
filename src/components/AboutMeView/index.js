import React from 'react';
// import PropTypes from 'prop-types'
import {makeStyles} from '@material-ui/core/styles';
import {Grid, Typography, Button} from '@material-ui/core';

const useStyles = makeStyles (() => ({
  root: {
    height: '100vh',
  },
}));

const AboutMeView = props => {
  const classes = useStyles ();
  return (
    <div id="aboutMeView">
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
        className={classes.root}
      >
        <Grid item>
          <Typography>This is the about me page</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

// AboutMe.propTypes = {

// }

export default AboutMeView;
