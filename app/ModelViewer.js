import { useState, useEffect } from 'react';

const ModelViewer = () => {
  const [dimensions, setDimensions] = useState({ width: '100%', height: '30vh' });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 832) {
        setDimensions({ width: '50%', height: '40vh' });
      } else if (window.innerWidth >= 640) {
        setDimensions({ width: '75%', height: '40vh' });
      } else {
        setDimensions({ width: '100%', height: '20vh' });
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call the function initially to set the dimensions

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <model-viewer
      src="https://cloud-if969vfbm-hack-club-bot.vercel.app/0imagetostl.com_hacky_holidays__3_.glb" // Replace with your 3D model file
      alt="A 3D model"
      camera-controls
      disable-zoom
      camera-orbit="0deg 0deg 105%"
      disable-pan
      style={{ width: '25', height: dimensions.height }}
    ></model-viewer>
  );
};

export default ModelViewer;