// Masala: 4
// Bo'sh joy ajratilgan so'zlar qatori berilgan bo'lsa, eng uzun so'zni qaytaring.
// Agar bir nechta eng uzun so'z bo'lsa, eng o'ngdagi eng uzun so'zni qaytaring
function longestWordRightmost(str) {
    const words = str.split(" ");

    let maxLength = 0;
    let longestWordIndex = -1;

    words.forEach((word, index) => {
        if (word.length >= maxLength) {
            maxLength = word.length;
            longestWordIndex = index;
        }
    });

    return words[longestWordIndex];
}

console.log(longestWordRightmost("red white blue"));
console.log(longestWordRightmost("red blue gold")); 