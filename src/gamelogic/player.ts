import defaultSpacecraft from '../assets/spacecraft/spaceCraftFactory';

interface PlayerConfig {
    name: string;
    spacecraft: typeof defaultSpacecraft;
};

function createPlayer(player: PlayerConfig) {
    const newPlayer = {};

    return {...newPlayer, ...player};
};

document.addEventListener("keydown", objectMove, false);
function objectMove(event) {
    switch(event.which) {
        case 87:
            player.spacecraft.translateY( player.spacecraft.speed );
            break;
        case 83:
            player.spacecraft.translateY( - player.spacecraft.speed );
            break;
        case 65:
            player.spacecraft.translateX( player.spacecraft.speed );
            break;
        case 68:
            player.spacecraft.translateX( - player.spacecraft.speed );
            break;
}

const player = createPlayer({
    name: 'Peter',
    spacecraft: defaultSpacecraft
});

export default player;