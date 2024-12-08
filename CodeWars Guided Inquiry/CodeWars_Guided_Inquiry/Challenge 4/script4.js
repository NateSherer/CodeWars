//You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

function middleNumber(string) {
    let middleNumber = string.length / 2;
    if (string.length % 2 === 0) {
    return string.slice(middleNumber - 1, middleNumber + 1);
    } else {
    return string.charAt(middleNumber);
    }
}