//Work in Document Object Model
/*const counter = document.querySelector('.counter');
const counterDisplay = document.querySelector('.counter_display');
const counterPlus = document.querySelector('.counter_plus');
const counterReset = document.querySelector('.counter_reset');

counterPlus.addEventListener('click', function() {
	counterDisplay.textContent = +counterDisplay.textContent + 1;
});

counterReset.addEventListener('click', function() {
	counterDisplay.textContent = 0;
});
*/
const counters = document.querySelectorAll('.counter');

for (const counter of counters) {
	const counterDisplay = counter.querySelector('.counter_display');
  const counterPlus = counter.querySelector('.counter_plus');
  const counterReset = counter.querySelector('.counter_reset');

	counterPlus.addEventListener('click', function() {
		counterDisplay.textContent = +counterDisplay.textContent + 1;
	});
	
	counterReset.addEventListener('click', function() {
		counterDisplay.textContent = 0;
	});
};


function calculateAndLogNumbers () {
	let x = 10;
	x = x + 90;
	x = x / 2;

	console.log(x);
}

calculateAndLogNumbers();

function calculateNumber() {
	let b = 10;
	b = b + 100;
	b = b / 2;

	return b;
}

const resultNumber = calculateNumber();

console.log(resultNumber);



function summNumber(a, b) {
	const resultNumbers = a + b;

	return resultNumbers;
};

const vallueOne = +prompt('Введите первое число');
const vallueTwo = +prompt('Введите второе число');

const summNum = summNumber(vallueOne, vallueTwo);

alert('Сумма этих двух чисел: '+ summNum);

