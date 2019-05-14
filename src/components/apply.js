import React from 'react';
import CanvasImg from './canvasImg.js'
import ApplyBtn from './applyButton.js'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

export default function Apply() {
  return (
    <Card>
      <CanvasImg />
      <CardContent>
        <ApplyBtn />
      </CardContent>
    </Card>
  )
}
