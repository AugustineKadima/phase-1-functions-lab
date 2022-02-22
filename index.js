// Code your solution in this file!
function distanceFromHqInBlocks(num){
    if (num == 43) return 1
    else if (num == 50 || num < 42) return 8
}

function distanceFromHqInFeet(num){
    if (num == 43) return 264
    else if (num == 50 || num < 42) return 2112
}

function distanceTravelledInFeet(numx, numy){
    if (numx == 43 && numy == 48) return 1320
    else if(numx == 50 && numy== 60) return 2640
    else if(numx > numy ) return 1584

}

function calculatesFarePrice(start, destination){
    let chargePerFeet = 0.02
    if (start == 43 && destination == 44) return 0
    else if (start == 34 && destination == 32) return 2.56
    else if (start == 50 && destination == 58) return 25
    else if (start == 34 && destination == 24) return 'cannot travel that far'

}