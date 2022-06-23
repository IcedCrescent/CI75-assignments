console.log("Assingment 1: Reverse a string");
const originalString = "abcdef";

/**
 * Reverse an input string
 * @param {String} str the original string
 * @returns {String} The reversed string
 */
function reverseString(str) {
    return str ? 
        str.split("").reverse().join("") : 
        null;
}

/**
 * Reverse an input string
 * @param {String} str the original string
 * @returns {String} The reversed string
 */
function reverseStringV2(str) {
    if (!str) {
        return str;
    }
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

console.log(reverseString(originalString));
console.log(reverseStringV2(originalString));