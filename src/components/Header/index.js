import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import {AppBar, Toolbar} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
// import PropTypes from 'prop-types'
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { Link, animateScroll as scroll } from "react-scroll";

function ElevationScroll(props) {
  const { children } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });

// ElevationScroll.propTypes = {
//   children: PropTypes.element.isRequired,
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
};

const useStyles = makeStyles (() => ({
  appBar: {
    flexGrow: 1,
  },
}));

const Header = props => {
  const classes = useStyles ();
  return (
    <div>
      <CssBaseline />
      <ElevationScroll {...props}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <MenuIcon />
        </Toolbar>
      </AppBar>
      </ElevationScroll>
    </div>
  );
};

// Header.propTypes = {

// }

export default Header;
