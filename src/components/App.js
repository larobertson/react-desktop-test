import React from 'react';
import Upload from './upload';
import Apply from './apply';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// import '../App.css';

const styles = {
  topGrid: {
    margin: 0,
    padding: 0
  },
  paper: {
    backgroundColor: '#cfd8dc',
    minHeight: '150px',
    boxShadow: '0 3px 5px 2px #263238',
    margin: 0,
    padding: 0
  }
};

function App() {

  return (
    <div>
      <Paper
        style={styles.paper}
      >
        <h1>Hello Electron!</h1>
      </Paper>

      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="flex-start"
        xs="auto"
        wrap="wrap"
        spacing={40}
      >
        <Grid 
          item
        >
          <Upload />
        </Grid>
        <Grid 
          item
        >
          <Apply />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
