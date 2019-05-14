import React from 'react';
import Upload from './upload';
import Apply from './apply';
import Grid from '@material-ui/core/Grid';
// import '../App.css';

function App() {

  return (
    <div className="modal">
      <h1>Hello Electron!</h1>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="flex-end"
        xs="auto"
        wrap="wrap"
      >
        <Upload />
        <Apply />
      </Grid>
    </div>
  );
}

export default App;
