function analyzeSentence(sentence) {
    // Initialize counters
    let length = 0;
    let wordCount = 0;
    let vowelCount = 0;
    const vowels = "aeiouAEIOU";
    
    // Flag to track if we're inside a word
    let inWord = false;
    
    // Loop through each character in the sentence
    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i];
        
        if (char === ".") {
            // End of sentence; no need to count the period
            break;
        }
        
        // Count the length (excluding the period at the end)
        length++;
        
        // Count vowels
        if (vowels.indexOf(char) !== -1) {
            vowelCount++;
        }
        
        // Count words (words are separated by spaces)
        if (char !== " ") {
            inWord = true;
        } else {
            if (inWord) {
                wordCount++;
                inWord = false;
            }
        }
    }
    
    // If the last word does not end with a space, count it
    if (inWord) {
        wordCount++;
    }
    
    // Return the results
    return { length, wordCount, vowelCount };
}

// Example usage
const sentence = prompt("Enter a sentence ending with a period: ");
const result = analyzeSentence(sentence);

console.log(`Length of the sentence: ${result.length}`);
console.log(`Number of words: ${result.wordCount}`);
console.log(`Number of vowels: ${result.vowelCount}`);
