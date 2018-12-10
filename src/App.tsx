import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import theme from './theme/MuiTheme';
import Example from './components/Example';
import SampleOne from './components/SampleOne';
import SampleTwo from './components/SampleTwo';
import SampleThree from './components/SampleThree';
import SampleFour from './components/SampleFour';
import SampleFive from './components/SampleFive';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Grid container justify="center">
          <Grid item xs={8}>
            <Example></Example>
            <hr/>
          </Grid>
          <Grid item xs={8}>
            <SampleOne></SampleOne>
            <hr/>
          </Grid>
          <Grid item xs={8}>
            <SampleTwo></SampleTwo>
            <hr/>
          </Grid>
          <Grid item xs={8}>
            <SampleThree></SampleThree>
            <hr/>
          </Grid>
          <Grid item xs={8}>
            <SampleFour></SampleFour>
            <hr/>
          </Grid>
          <Grid item xs={8}>
            <SampleFive></SampleFive>
          </Grid>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default App;
