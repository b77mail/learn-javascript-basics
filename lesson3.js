/*
* Задание 1.
* В цикле напечатать степень двойки (степень вводит пользователь).
*/
function outputPow(power=1) {
	function printMessage(message) {
		console.log(message);
	}
	if (power < 1) {
		return printMessage('Number must be positive but given ' + power);
	}
	for(var i = 0; i <= power; i++) {
		printMessage('Task1. ' + '2^' + i + ': ' + Math.pow(2, i));
	}
}

/*
* Задание 2.
* Вывести шахматную доску (задаем: ширину, символ черного и белого).
*/
function outputChessBoard(board) {
	function printMessage(message='') {
		console.log(message);
	}
	function render(line='') {
		console.log(line);
	}
	
	if ((typeof(board) != 'object') || !('length' in board) || !('white' in board) || !('black' in board) || (board.length < 1)) {
		return printMessage('Incorrect input object');
	}
	
	var trigger = false;
	var line = '';
	var aligner = '  ';
	for (var i = 1; i <= board.length; i++) {
		line = '';
		for (var j = 1; j <= board.length; j++) {
			trigger = !trigger;
			if (trigger) {
				line += board.black + aligner;
			} else {
				line += board.white + aligner;
			}
		}
		trigger = !trigger;
		render(line + "\n");
	}
}

outputPow(parseInt(prompt("Task1. Enter power", 3), 10));

var board = {};
board.length = parseInt(prompt("Task2. Enter board`s lenght", 8), 10);
board.white = prompt("Task2. Enter board`s white symbol", '_');
board.black = prompt("Task2. Enter board`s black symbol", '*');
outputChessBoard(board);