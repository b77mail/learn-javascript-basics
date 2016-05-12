var userObj = {};
userObj['name'] = prompt('What is yout name?');
userObj['surname'] = prompt('What is your surname?');
userObj['age'] = parseInt(prompt('What is your age?'), 10);


if (!isNaN(userObj['age'])) {
	alert(userObj['name'] + ' ' + userObj['surname'] + ' ' + userObj['age']);
} else {
	alert('You age is not valid');
}