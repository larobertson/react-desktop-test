import React from 'react';

export default sourceImg () => {
  return (
    <div>
      <input type="file" id="fileInput" name="file" />
      <img id="imageSrc" alt="No Image" />
    </div>
  )
}