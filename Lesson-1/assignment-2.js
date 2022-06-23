console.log("Assingment 2: Remove duplicate in array");

const testArr = [1, 2, 3, 5, 4, 2, 6, 4];

/**
 * Remove duplicate elements from an array  
 * @param {Array} arr the array that need to remove the duplicate
 * @returns {Array} the new array with unique elements only
 */
function removeDuplicate(arr) {
    if (!arr && !Array.isArray(arr)) {
        return arr;
    }
    const set = new Set(arr);
    return Array.from(set);
}

/**
 * Remove duplicate elements from an array  
 * @param {Array} arr the array that need to remove the duplicate
 * @returns {Array} the new array with unique elements only
 */
function removeDuplicateV2(arr) {
    if (!arr && !Array.isArray(arr)) {
        return arr;
    }
    const uniqueArray = [];
    for (const item of arr) {
        if (!uniqueArray.includes(item)) {
            uniqueArray.push(item);
        }
    }
    return uniqueArray;
}

console.log(removeDuplicate(testArr));
console.log(removeDuplicateV2(testArr));