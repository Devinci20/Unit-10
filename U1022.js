function reverseString(str) {

    var strArray = str.split("");
    strArray.reverse();

    var strReverse = strArray.join("");
    
    alert(reverseString())

    return strReverse;
}

reverseString("hello");

