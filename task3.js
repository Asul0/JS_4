// Задание 3
console.log("\nЗадание 3:");
let randomArray = [];
for (let i = 0; i < 5; i++) {
    randomArray.push(Math.floor(Math.random() * 10));
}
console.log("Сгенерированный массив:", randomArray);

let sum = randomArray.reduce((acc, val) => acc + val, 0);
console.log("Сумма элементов массива:", sum);

let min = Math.min(...randomArray);
console.log("Минимальное число в массиве:", min);

let includes3 = randomArray.includes(3);
if (includes3) {
    console.log("В массиве есть число 3.");
} else {
    console.log("В массиве нет числа 3.");
}
