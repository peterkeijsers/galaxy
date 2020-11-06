import { PerspectiveCamera } from 'three';

// Camera
const camera = new PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

camera.position.z = 5;

export default camera
