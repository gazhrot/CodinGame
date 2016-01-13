var inputs = readline().split(' '),lightX = parseInt(inputs[0]),lightY = parseInt(inputs[1]),initialTX = parseInt(inputs[2]),initialTY = parseInt(inputs[3]),thorX = initialTX,thorY = initialTY;
while (true) {
    var remainingTurns = parseInt(readline()),directionX = "",directionY = "";
    if (thorX > lightX) {
        directionX = "W";
        thorX--;
    } else if (thorX < lightX) {
        directionX = "E";
        thorX++;
    }
    if (thorY > lightY) {
        directionY = "N";
        thorY--;
    } else if (thorY < lightY){
        directionY = "S";
        thorY++;
    }
	print(directionY+directionX);
}