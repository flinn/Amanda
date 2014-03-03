function printSixes() { 
    var currentNum = 1;
    while (currentNum < 100) {
        if (currentNum % 6 == 0) {
            console.log(currentNum);
        }
        currentNum++;       
    }
}