/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/


// game loop
while (true) {
    var inputs = readline().split(' ');
    var spaceX = parseInt(inputs[0]);
    var spaceY = parseInt(inputs[1]);

    var maxHeight = 0
    var target;
    
    for (var i = 0; i < 8; i++) {
        var mountainH = parseInt(readline()); // represents the height of one mountain, from 9 to 0. Mountain heights are provided from left to right.
        
        if (mountainH > maxHeight){
            maxHeight = mountainH;
            target = i;
        }
        
    }
    
    if (spaceX == target){
        print('FIRE');
    } else{
        print('HOLD');
    }
    
    // either:  FIRE (ship is firing its phase cannons) or HOLD (ship is not firing).
}