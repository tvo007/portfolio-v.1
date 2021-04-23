import React from 'react';
// import PropTypes from 'prop-types'
import {makeStyles} from '@material-ui/core/styles';
import {Grid, Typography, Button} from '@material-ui/core';
import {Link, animateScroll as scroll} from 'react-scroll';

const useStyles = makeStyles (() => ({
  root: {
    height: '100vh',
  },
}));

const LandingView = props => {
  const classes = useStyles ();
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      className={classes.root}
    >
      <Grid item>
        <Typography>Hi, My name is Tim Vo.</Typography>
        <Typography>I'm a full-stack web developer.</Typography>

        <Link
          activeClass="active"
          to="projectsView"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <Typography>Click here to see my work.</Typography>
        </Link>

      </Grid>
    </Grid>
  );
};

// AboutMe.propTypes = {

// }

export default LandingView;
