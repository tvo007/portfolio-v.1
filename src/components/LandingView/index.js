import React from 'react';
// import PropTypes from 'prop-types'
import {makeStyles} from '@material-ui/core/styles';
import {Grid, Typography, Button} from '@material-ui/core';
import {Link as ScrollLink, animateScroll as scroll} from 'react-scroll';

const useStyles = makeStyles (() => ({
  root: {
    height: '100vh',
  },
}));

const LandingView = props => {
  const classes = useStyles ();
  return (
    <div id="landingView">

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

          <ScrollLink
            activeClass="active"
            to="projectsView"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <Typography>Click here to see my work.</Typography>
          </ScrollLink>

        </Grid>
      </Grid>
    </div>
  );
};

// AboutMe.propTypes = {

// }

export default LandingView;
