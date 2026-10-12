function firstNonRepeatedChar(str) {
	 let freq = new Array(26).fill(0);

    // Count occurrences
    for (let i = 0; i < str.length; i++) {
        let index = str.charCodeAt(i) - 'a'.charCodeAt(0);
        freq[index]++;
    }

    // Find the first non-repeated character
    for (let i = 0; i < str.length; i++) {
        let index = str.charCodeAt(i) - 'a'.charCodeAt(0);

        if (freq[index] === 1) {
            return str[i];
        }
    }

    return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
