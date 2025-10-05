const result = document.getElementById("result");

function calculateMinCost() {
	const input = document.getElementById("rope-lengths");
	const arr = input.value.split(",").map(Number);
	arr.sort((a,b) => a-b);
	console.log(arr);

	let totalCost = 0;

	while(arr.length > 1) {
		let firstValue = arr.shift();
		let secondValue = arr.shift();

		arr.push(firstValue + secondValue);
		totalCost += firstValue + secondValue;

		arr.sort((a,b) => a-b);
	}

	result.innerText = totalCost;
}  
