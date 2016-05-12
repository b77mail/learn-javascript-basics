/* 1. min max 5 значений */
var num = [];
var numbersToGet = 5;

for (var i = 1; i <= numbersToGet; i++) {
	num[i-1] =  parseInt(prompt('Task 1. Enter number ' + i + ' of ' + numbersToGet + ' to find min and max', 7), 10);
}

console.log('Task 1. Maximum: ' + Math.max.apply(null, num));
console.log('Task 1. Minimum: ' + Math.min.apply(null, num));


/* 2. полидром 13431 (определить является ли введенное число на 5 разрядов полиндроном) / % */
var polindromeStr = prompt('Task 2. Enter 5-digit number to check if it is a polindrome', 56765);
var polindromeNum = parseInt(polindromeStr, 10);
var isPolindrome = true; // using marker to halt the loop and speed up execution

if (isNaN(polindromeNum) || polindromeStr.length < 3) {
	isPolindrome = false;
}

var strMiddle = polindromeStr.length / 2;
for (var i = 0; i < strMiddle; i++) {
	if ( polindromeStr.charAt(i) != polindromeStr.charAt(polindromeStr.length - 1 - i)) {
		isPolindrome = false;
		break;
	}
}

if (isPolindrome) {
	console.log('Task 2 (solution with strings). Number ' + polindromeStr + ' is polindrome');
} else {
	console.log('Task 2 (solution with strings). Number ' + polindromeStr + ' is NOT polindrome');
}

var isPolindrome = true;
var polindromeNumCopy = polindromeNum;
var polindromeNumReversed = 0;
for(; polindromeNumCopy; polindromeNumCopy = Math.floor(polindromeNumCopy / 10)) {
		if (polindromeNumCopy < 0) {
			break;
		}
    polindromeNumReversed *= 10;
    polindromeNumReversed += polindromeNumCopy % 10;
}

if (polindromeNumReversed === polindromeNum) {
	console.log('Task 2 (solution with numbers). Number ' + polindromeNum + ' is polindrome');
} else {
	console.log('Task 2 (solution with numbers). Number ' + polindromeNum + ' is NOT polindrome');
}


/* 3. 10 людей в классе, оценка каждого от 1 до 100, вывести среднюю оценкку по классу */
var studetsScoresSum = 0;
var classSize = 10;
var currentScore = 0;
var minScoreAllowed = 10;
var maxScoreAllowed = 100;

for (var i = 1; i <= classSize; i++) {
	currentScore = 0;
	do {
		currentScore = parseInt(prompt('Task 3. Enter score for student ' + i + ' of ' + classSize + ' to find avg score in class', 77), 10);
	} while ((currentScore < minScoreAllowed) || (currentScore > maxScoreAllowed))
	studetsScoresSum += currentScore;
}

console.log('Task 3. Average class score: ' + studetsScoresSum / classSize);


/*  4. обратный треугольник
    *
   **
  ***
 ****
*/
console.log('Task 4. Drawing triangle')
var triangleHeigh = parseInt(prompt('Task 4. Enter number to determine triangle`s heigh', 4), 10);
var line = '';
for (var i = 1; i <= triangleHeigh; i++){
	for(var j = triangleHeigh; j >= 1; j--) {
		if (j - i <= 0) {
			line += '*';
		} else {
			line += ' ';
		}
	}

	console.log(line);
	line = '';
}
