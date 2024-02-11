const user = {
	name: 'Dusty', age: 39,
	name: 'Maria', age: 20,
	name: 'Anna', age: 30,
	name: 'Jon', age: 19,
	name: 'Bob', age: 26,
}

function people (name, age, work) {
	return {
		name,
		age,
		work,
	}
};


console.log(people('dusty', 39, 'frontend developer'));