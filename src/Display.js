import React from 'react';
// import PropTypes from 'prop-types'
import {
  AboutMeView,
  ContactView,
  ProjectsView,
  Header,
  Footer,
  LandingView,
} from './components';
import {Grid} from '@material-ui/core';

// import {Desktop} from './layouts/Desktop';

const Display = props => {
  return (
    <div>
      <Header />
      <Grid container direction="column" alignItems="center">
        <LandingView />
        <AboutMeView />
        <ProjectsView />
        <ContactView />
      </Grid>
      <Footer />
    </div>
  );
};

//controls mobile vs desktop view

// Display.propTypes = {

// }

export default Display;
