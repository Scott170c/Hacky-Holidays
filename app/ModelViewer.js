const ModelViewer = () => {
    return (
      <model-viewer
        src="https://cloud-4ij979j8m-hack-club-bot.vercel.app/0imagetostl.com_3d-hacky-holidays.glb" // Replace with your 3D model file
        alt="A 3D model"
        camera-controls
        disable-zoom
        camera-orbit="0deg 0deg 105%"
        disable-pan
        style={{ width: '25%', height: '500px' }}
      ></model-viewer>
    );
  };
  
  export default ModelViewer;