import React from 'react';
// import PropTypes from 'prop-types'
import {makeStyles} from '@material-ui/core/styles';
import {Grid, Typography} from '@material-ui/core';
const useStyles = makeStyles (() => ({
  root: {
    height: '100vh',
  },
}));

const ContactView = props => {
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
          <Typography>This is the Contact page</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

// Projects.propTypes = {

// }

export default ContactView;
