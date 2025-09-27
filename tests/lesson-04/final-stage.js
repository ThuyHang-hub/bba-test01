
console.log("Final State")
function findPairsDivisibleBy17 () {
    let n = 0;
    for (let c = 1; c <= 100; c++) {
        for (let d = 100; d >= 1; d--) {
            let sum = c + d;
            if (sum % 17 === 0 && c !== d) {
                console.log("Cặp số thứ", n, ":", c ,"và", d);
                n++;
            }
        }
    }
    console.log("Tổng số:", n, "cặp");
};
findPairsDivisibleBy17();


