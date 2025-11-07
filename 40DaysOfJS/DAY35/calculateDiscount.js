function calculateDiscount(total) {

    let discount = 0;

    if(total >= 100) {
        discount = 0.1;
    } else if(total >= 300) {
        discount = 0.15;
    } else if(total >= 500) {
        discount = 0.2;
    }

    return total - total * discount;
}

console.log(calculateDiscount(50)); // 50
console.log(calculateDiscount(200)); // 180
console.log(calculateDiscount(350)); // 297.5
console.log(calculateDiscount(600)); // 480

// The above one wont give expected output - because
// total >= 100 is true for any number above 100 (including 300 or 600), the later conditions never get checked.
// That’s why you always get only the 0.1 (10%) discount, even for larger totals.

function fixCalculateDiscount(total) {

    let discount = 0;

    if(total >= 100) {
        discount = 0.1;
    } else if(total >= 300) {
        discount = 0.15;
    } else if(total >= 500) {
        discount = 0.2;
    }

    return total - total * discount;
}

console.log(fixCalculateDiscount(50)); // 50
console.log(fixCalculateDiscount(200)); // 180
console.log(fixCalculateDiscount(350)); // 297.5
console.log(fixCalculateDiscount(600)); // 480


// ✅ Final tip:
// When using chained if…else if… conditions that depend on numeric thresholds (like discounts, ranks, or scores) — always check from the highest threshold to the lowest.
// Otherwise, smaller conditions will match first and block larger ones from ever running.
