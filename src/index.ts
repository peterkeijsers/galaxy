import { Scene, WebGLRenderer } from 'three';
import camera from './gamelogic/camera';
import player from './gamelogic/player';
import './styles.css';

// Scene
const scene = new Scene();

// Renderer
const renderer = new WebGLRenderer();

// Add player to scene
scene.add( player );

// Animation
function animate() {

    requestAnimationFrame( animate );

    renderer.render( scene, camera );
    
}

animate();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);