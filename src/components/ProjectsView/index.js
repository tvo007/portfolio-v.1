import React from 'react';
// import PropTypes from 'prop-types'
import {makeStyles} from '@material-ui/core/styles';
import {Grid, Typography} from '@material-ui/core';
const useStyles = makeStyles (() => ({
  root: {
    height: '100vh',
  },
}));

const ProjectsView = props => {
  const classes = useStyles ();
  return (
    <div id='projectsView'>
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      className={classes.root}
    >
      <Grid item>
        <Typography>This is the Projects page</Typography>
      </Grid>
    </Grid>
    </div>

  );
};

// Projects.propTypes = {

// }

export default ProjectsView;
