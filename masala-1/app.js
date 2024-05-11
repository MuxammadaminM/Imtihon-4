// Masala : 1
// To'g'ri (IPv4) IP manzili berilgan bo'lsa, ushbu IP manzilning himoyalangan versiyasini qaytaring.
// O'chirilgan IP manzil har bir davr "" o'rnini bosadi. "[.]" bilan.
function defangIPaddr(address) {
    return address.replace(/\./g, "[.]");
}

console.log(defangIPaddr("1.1.1.1"));
console.log(defangIPaddr("255.100.50.0")); 