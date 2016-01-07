/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var road = parseInt(readline()); // the length of the road before the gap.
var gap = parseInt(readline()); // the length of the gap.
var platform = parseInt(readline()); // the length of the landing platform.

// game loop
while (true) {
    var speed = parseInt(readline()); // the motorbike's speed.
    var coordX = parseInt(readline()); // the position on the road of the motorbike.

    // Write an action using print()
    // To debug: printErr('Debug messages...');
    if (coordX > road) {
        print('SLOW');
    } else if (coordX + speed > road) {
        print('JUMP');
    } else {
        if (speed <= gap) {
            print('SPEED');
        } else if (speed > gap + 1) {
            print('SLOW');
        } else {
            print('WAIT');
        }
    }
}