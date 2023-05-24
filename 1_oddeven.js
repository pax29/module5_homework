let answer;
let number;
let result;

answer = prompt('введите число');
number = Number(answer);

if (Boolean(number) == false) {
    result = "не"
} else { result = (number % 2 == 0) ? "чётное" : "нечётное"
}

alert(`${answer} это ${result} число`);