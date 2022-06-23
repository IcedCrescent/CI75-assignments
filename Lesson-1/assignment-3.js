console.log("Assignment 3: Find the number with the most occurence");
const input = [1, 2, 3, 5, 6, 4, 2, 1, 6, 3, 5, 3];

/**
 * Find the number with the highest occurence in an array
 * @param {Number[]} arr The array to be checked
 * @returns {Object} an object containing the number occurring the most and its occurence
 */
function highestFrequency(arr) {
    const frequency = {};
    for (const num of arr) {
        if (frequency.hasOwnProperty(num)) {
            frequency[num]++;
        } else {
            frequency[num] = 1;
        }
    }
    let highestOccurringNumber = arr[0];
    let occurence = frequency[highestOccurringNumber];
    for (const [key, value] of Object.entries(frequency)) {
        if (value > occurence) {
            highestOccurringNumber = key;
            occurence = value;
        }
    }
    return {
        value: highestOccurringNumber,
        count: occurence
    }
}

console.log(highestFrequency(input));