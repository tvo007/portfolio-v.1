import React, {Fragment} from 'react';
import {makeStyles} from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Grid,
  IconButton,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
// import PropTypes from 'prop-types'
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import {Link as ScrollLink, animateScroll as scroll} from 'react-scroll';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles (theme => ({
  appBar: {
    flexGrow: 1,
    padding: '0 8rem',
    [theme.breakpoints.down ('sm')]: {
      padding: 0,
    },
    // width: theme.spacing(10)
  },
  button: {
    color: 'white',
    // [theme.breakpoints.down('xs')]: {
    //   visibility: 'hidden'
    // },
  },
  iconButton: {
    color: 'white',
    // display: 'flex',
    // flexDirection: 'row',
    // justifyContent: 'flex-end',
  },
}));

function ElevationScroll (props) {
  const {children} = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger ({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement (children, {
    elevation: trigger ? 4 : 0,
  });

  // ElevationScroll.propTypes = {
  //   children: PropTypes.element.isRequired,
  //   /**
  //    * Injected by the documentation to work in an iframe.
  //    * You won't need it on your project.
  //    */
  //   window: PropTypes.func,
}

const Header = props => {
  const matches = useMediaQuery (theme => theme.breakpoints.up ('sm'));
  const classes = useStyles ();
  return (
    <div>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar className={classes.appBar}>
          <Toolbar>

            {matches
              ? <Fragment>
                  {' '}<ScrollLink
                    activeClass="active"
                    to="landingView"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <Button className={classes.button}>
                      <Typography>Landing</Typography>
                    </Button>
                  </ScrollLink>
                  <ScrollLink
                    activeClass="active"
                    to="aboutMeView"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <Button className={classes.button}>
                      <Typography>About</Typography>
                    </Button>
                  </ScrollLink>
                  <ScrollLink
                    activeClass="active"
                    to="projectsView"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <Button className={classes.button}>
                      <Typography>Projects</Typography>
                    </Button>
                  </ScrollLink>
                  <ScrollLink
                    activeClass="active"
                    to="contactView"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <Button className={classes.button}>
                      <Typography>Contact</Typography>
                    </Button>
                  </ScrollLink>
                </Fragment>
              : <Grid container justify="flex-end">
                  <IconButton className={classes.iconButton}>
                    <MenuIcon fontSize="large" />

                  </IconButton>
                </Grid>}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </div>
  );
};

// Header.propTypes = {

// }

export default Header;
