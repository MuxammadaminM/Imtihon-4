// Masala-2
// Maqsad 2 ga teng bo'lgan berilgan butun sonlar qatoridan barcha juft juftlarni qaytarishdir.
// Natijalar qatori qiymatlarning o'sish tartibida tartiblanishi kerak.
// Massivda takroriy butun sonlar yo'q deb faraz qiling. 
// Kirish massividagi butun sonlarning tartibi muhim bo'lmasligi kerak.
function findPairsWithDifferenceOfTwo(arr) {
    arr.sort((a, b) => a - b); 

    let result = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] - arr[i] === 2) {
            result.push([arr[i], arr[i + 1]]);
        }
    }

    return result;
}

console.log(findPairsWithDifferenceOfTwo([1, 2, 3, 4])); 
console.log(findPairsWithDifferenceOfTwo([4, 1, 2, 3])); 
console.log(findPairsWithDifferenceOfTwo([1, 23, 3, 4, 7]));
console.log(findPairsWithDifferenceOfTwo([4, 3, 1, 5, 6]));