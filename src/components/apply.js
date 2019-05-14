import React from 'react';
import CanvasImg from './canvasImg.js'
import ApplyBtn from './applyButton.js'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    backgroundColor: '#cfd8dc',
    minWidth: 275,
    boxShadow: '0 3px 5px 2px #263238'
  },
  title: {
    backgroundColor: '#607d8b',
    fontSize: 26,
  }
};

export default function Apply() {
  return (
    <Card style={styles.card}>
      <Typography style={styles.title} gutterBottom>
        Modified Image
      </Typography>
      <CardContent>
        <CanvasImg />
      </CardContent>
      <CardActions>
        <ApplyBtn />
      </CardActions>
    </Card>
  )
}
