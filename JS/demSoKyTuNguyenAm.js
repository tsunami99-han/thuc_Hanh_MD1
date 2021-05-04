function demSoNguyenAm(str) {
    let count = 0
    for (i = 0; i < str.length; i++) {
        if (str[i] == "a" || str[i] == "o" || str[i] == "e" || str[i] == "u" || str[i] == "i") {
            count++
        }
    }
    if (count == 0) {
        return false
    } else {
        return count;
    }
}