function finIndex(n, arr) {
    let indexNum = "";
    for (i = 0; i < arr.length; i++) {
        if (arr[i] == n) {
            indexNum += i + ",";
        }
    }
    if (indexNum.length == 0) {
        return false;
    } else {
        return indexNum;
    }
}