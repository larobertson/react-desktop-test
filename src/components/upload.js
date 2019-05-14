import React from 'react';
import SourceImg from './sourceImg.js'
import UploadBtn from './uploadButton.js'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

export default function Upload() {
  return (
    <Card>
        <SourceImg />
        <CardContent>
          <UploadBtn />
        </CardContent>
    </Card>
  )
}
