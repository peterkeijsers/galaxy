import { Scene, WebGLRenderer } from 'three';
import camera from './gamelogic/camera';
import player from './gamelogic/player';
import Stats from 'three/examples/jsm/libs/stats.module.js';
import './styles.css';

// Stats
var stats = new Stats();
stats.showPanel( 0 ); // 0: fps, 1: ms, 2: mb, 3+: custom
document.body.appendChild( stats.dom );

// Scene
const scene = new Scene();

// Renderer
const renderer = new WebGLRenderer();

// Add player to scene
scene.add( player );

// Animation
function animate() {
    stats.begin();

    requestAnimationFrame( animate );

    renderer.render( scene, camera );
    
    stats.end();
}

animate();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);