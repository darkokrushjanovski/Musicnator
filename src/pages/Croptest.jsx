import React, { useState, useCallback } from "react";
import Cropper from "react-easy-crop";

const Croptest = () => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    console.log(croppedArea, croppedAreaPixels);
  }, []);
  return (
    <div className="App">
      <div className="crop-container">
        <Cropper
          crop={crop}
          aspect={4 / 4}
          onCropChange={setCrop}
          onCropComplete={onCropComplete}
        />
      </div>
    </div>
  );
};

export default Croptest;
