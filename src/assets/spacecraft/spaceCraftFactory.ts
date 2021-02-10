import { BoxGeometry, MeshBasicMaterial, Mesh, Object3D } from 'three';
import { SpaceCraftInterface } from './spaceCraftInterface';

export const createSpaceCraft = ( spaceCraftConfig: SpaceCraftInterface = {name: 'Henk', type: 'xwing', speed: 0.1} ) => {

    // Geometry
    const geometry = new BoxGeometry();
    const material = new MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    const mesh = new Mesh(geometry, material);
    const object3d = new Object3D();

    return {...object3d, ...spaceCraftConfig};
}