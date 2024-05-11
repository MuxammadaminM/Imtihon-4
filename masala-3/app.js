// Masala: 3
// So'z va bo'shliqlardan iborat s qatori berilgan bo'lsa, 
// satrdagi oxirgi so'zning uzunligini qaytaring.
// So'z - bu maksimal
function lengthOfLastWord(s) {
    s = s.trim();
    
    const words = s.split(" ");
    
    return words[words.length - 3].length;
}

console.log(lengthOfLastWord("Hello World")); 
console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("luffy is still joyboy"));     