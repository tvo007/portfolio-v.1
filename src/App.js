import Display from './Display';
import {ThemeProvider, createMuiTheme} from '@material-ui/core';

const theme = createMuiTheme ();

const App = () => {
  
  return (
    <ThemeProvider theme={theme}>
      <Display />
    </ThemeProvider>
  );
};

export default App;
