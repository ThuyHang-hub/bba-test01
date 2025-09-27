// Bài 1:
console.log("Moon Kingdom - Level 1")
// Khai báo characters:
let characters = [
    { name: "Mario",  level: 1, health: 200 },
    { name: "Bowser", level: 2, health: 400 },
    { name: "Peach",  level: 3, health: 600 },
    { name: "Toad",   level: 4, health: 800 }
];
// Thử xem đúng không: 
//console.log(characters);

// Map vào array mới với thuộc tính tăng lên
let charactersPowerUp = characters.map (characters => ({
       name: characters.name.toUpperCase(),
       level: characters.level * 2,
       health: characters.health * 3 
    }));
// Gọi lại sau khi map xem đúng không:
// console.log(charactersPowerUp);

// Filter các phần tử thoả mãn sau khi powerup thì health > 1000
let possibleWinners = charactersPowerUp.filter (charactersPowerUp => charactersPowerUp.health > 1000);
console.log("Các nhân vật có khả năng chiến thắng:");
for (i = 0; i < possibleWinners.length; i++){
console.log( i + 1 + ". Character", possibleWinners[i].name, "level", possibleWinners[i].level, "health", possibleWinners[i].health);
};

// Bài 2:
console.log("Moon Kingdom - Level 2")
const player = [
    { name: "Mario",  score: 2800 },
    { name: "Bowser", score: 3100 },
    { name: "Peach",  score: 3500 },
    { name: "Toad",   score: 1200 }
]
// Sắp xếp thứ tự theo điểm:
let rangePlayer = player.sort((a , b) => b.score - a.score);

// Cách 1: In bảng xếp hạng
console.log("Bảng xếp hạng (cách 1):");
console.log("🥇", "1.", rangePlayer[0].name + ":", rangePlayer[0].score);
console.log("🥈", "2.", rangePlayer[1].name + ":", rangePlayer[1].score);
console.log("🥉", "3.", rangePlayer[2].name + ":", rangePlayer[2].score);
console.log("  ", "4.", rangePlayer[3].name + ":", rangePlayer[3].score);

// Cách 2: In bảng xếp hạng dùng for in
console.log("Bảng xếp hạng (cách 2):")
for (i= 0; i < rangePlayer.length; i++ ) {
    if (i === 0) {
        console.log("🥇", i + 1 + ".", rangePlayer[i].name + ":", rangePlayer[i].score);
    } else if ( i === 1) {
        console.log("🥈", i + 1 + ".", rangePlayer[i].name + ":", rangePlayer[i].score);
    } else if ( i === 2) {
        console.log("🥉", i + 1 + ".", rangePlayer[i].name + ":", rangePlayer[i].score);
    } else {
        console.log("  ", i + 1 + ".", rangePlayer[i].name + ":", rangePlayer[i].score);
    }
};





