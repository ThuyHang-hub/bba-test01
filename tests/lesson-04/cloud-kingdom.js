// Bài 1: 
console.log("Cloud Kingdom 01:")
let playerName = "Mario";
let currentLives = 3;
const coins = {
    Level1: 25,
    Level2: 30,
    Level3: 45,
};
// Tính và in giá trị trung bình của 3 level
const sumCoins = coins.Level1 + coins.Level2 + coins.Level3;
console.log("Giá trị trung bình của 03 levels là:", sumCoins / 3 );
// In số coin dư khi chia cho 3
console.log("Số coin dư khi chia 3 của Level 1:", coins.Level1 % 3);
console.log("Số coin dư khi chia 3 của Level 2:", coins.Level2 % 3);
console.log("Số coin dư khi chia 3 của Level 3:", coins.Level3 % 3);

// Bài 2: 
console.log("Cloud Kingdom 02:")
function printPower(powerUp) {
if (powerUp === 'mushroom') {
    effect = 'Mario becomes Super!'
} else if (powerUp === 'flower') {
    effect = 'Mario can shoot fireballs!'
} else if (powerUp === 'star') {
    effect = 'Mario is invincible!'
} else if (powerUp === 'none') {
    effect = 'Mario is normal'
} else {
    effect = 'Unkown power-up'
}
console.log(powerUp + ":" , effect);
}
printPower('mushroom');
printPower('flower');
printPower('star'); 
printPower('none');
printPower('others');


