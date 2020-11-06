import { BoxGeometry, MeshBasicMaterial, Mesh} from 'three';

// Geomerty
const geometry = new BoxGeometry();
const material = new MeshBasicMaterial( { color: 0x00ff00, wireframe: true } );
const spacecraft = new Mesh( geometry, material );

export default spacecraft;