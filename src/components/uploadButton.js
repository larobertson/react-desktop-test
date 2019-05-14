import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import '../App.css';


// The `withStyles()` higher-order component is injecting a `classes`
// property that is used by the `Button` component.
const UploadButton = withStyles({
  root: {
    backgroundColor: '#607d8b',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px #263238'
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);

export default function UploadBtn() {
  return (
  <label class="fileContainer">
    <UploadButton>Upload</UploadButton>
    <input type="file"/>
  </label>
  )
}
