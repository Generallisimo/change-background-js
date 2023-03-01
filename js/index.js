// даем имя 
const button = document.getElementById("btn");
// так по классу
const color = document.querySelector(".color");
// создаем генератор цветов
const hex = [  
"0",
"1",
"2",
"3",
"4",
"5",
"6",
"7",
"8",
"9",
"A",
"B",
"C",
"D",
"E",
"F",
];
// задаем действие - клик с фун-ией
button.addEventListener("click", () => {
    // создаем переменную с фун-ей рандома
    let changeColor = getHex();
    // обращаемся к бэку боди и приравневаем к массиву с рандомной фун-ей поиска
    document.body.style.backgroundColor = changeColor;
    // меняем содиржимое текста - .color через textContent на тоже значение фун-ии
    color.textContent = changeColor;
});

  



// создаем фун-ию рандоного цвета с циклом набора 6 цифр
function getHex(){
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        // добавляем число или букву hex
        hexColor += hex[getRandomNumber()];
    }
    return hexColor
}



// создаем фун-цию которая получает рандномный индекс из массива
function getRandomNumber() {
    // так мы будем получать не ровное число
    // Math.random()
    // получаем рандом умнажаем на массив(длину) и обворачиваем в флор которое берет нижнее число и выводим
    return Math.floor(Math.random() * hex.length) 
}

