import spacecraft from '../assets/spacecrafts/default';

var xSpeed = .2;
var ySpeed = .2;

document.addEventListener("keydown", objectMove, false);
function objectMove(event) {
    var keyCode = event.which;
    if (keyCode == 87) {
        spacecraft.position.y += ySpeed;
    } else if (keyCode == 83) {
        spacecraft.position.y -= ySpeed;
    } else if (keyCode == 65) {
        spacecraft.position.x -= xSpeed;
    } else if (keyCode == 68) {
        spacecraft.position.x += xSpeed;
    } else if (keyCode == 32) {
        spacecraft.position.set(0, 0, 0);
    }
}

export default spacecraft;