// Get the pizza size price and add it to the running Total
// then pass that running total to the next function so 
// the next function will add a particular total to the running total and so on...
//
// Keep doing this until you get all items added to the running total.
//
// Just remember that the syntax will be text1 = text1 + something + "<br>";
// So you take the orginal value and concetenate to something new and end it with
// an HTML line break so our code will write the next thing one line below instead
// of overwriting the previous print out.

/* NOTE: The comments below are for me to learn and understand how each function works 
in realation to one another */


function getReceipt() {
	text1 = ""; // These initialize as empty strings but get passed from  
	text2 = ""; // function to function, growing line by line into a full receipt
	var runningTotal = 0; //value is zero when order is clicked
	var sizeTotal = 0;
	var sizeArray = document.getElementsByClassName("size"); // gathers all class names totaling 4 
	for (var i = 0; i < sizeArray.length; i++) { //goes through each array of 4 
		if (sizeArray[i].checked) { //checks if the size is selected
			var selectedSize = sizeArray[i].value; //takes value from input
			text1 = text1+selectedSize+"<br>"; // empty text1 = selected size then breaks to new line
		}
	}
	if (selectedSize === "Personal Pizza") {
		sizeTotal = 6;
		text2 = text2+sizeTotal+"<br>";
	} else if (selectedSize === "Medium Pizza") {
		sizeTotal = 10;
		text2 = text2+sizeTotal+"<br>";
	} else if (selectedSize === "Large Pizza") {
		sizeTotal = 14;
		text2 = text2+sizeTotal+"<br>";
	} else if (selectedSize === "Extra Large Pizza") {
		sizeTotal = 16;
		text2 = text2+sizeTotal+"<br>";
	}
	runningTotal = sizeTotal;
	getMeat(runningTotal,text1,text2); // All three of these variables will be passed on to each function
};	//rt = 6, t1 = personal, t2 = 6 

// With both the meat and veggie functions each item in the array will be
// 1 dollar but the first is going to be free so we can count the total
// of items in their array and subtract 1 to get the total item cost
//
// Now we can add the item cost to our running total to get the new
// running total and then pass this new running total to the next function
// Just keep up this process until we've added all items to the running total
function getMeat(runningTotal,text1,text2) {
	var runningTotal = runningTotal;
	var meatTotal = 0;
	var selectedMeat = []; //empty array 
	var meatArray = document.getElementsByClassName("meats");
	for (var j = 0; j < meatArray.length; j++) {
		if (meatArray[j].checked) {
			selectedMeat.push(meatArray[j].value); // adds value of selected meats to an empty array selectedMeat
		}
	}
	var meatCount = selectedMeat.length; //Variable takes on length of array which is 1
	if (meatCount > 1) { 
		meatTotal = (meatCount - 1);
	} else {
		meatTotal = 0;
	}
	runningTotal = (runningTotal + meatTotal); //runningtotal of 6 + meatotal of 0 
	for (var j = 0; j < selectedMeat.length; j++) {
			text1 = text1+selectedMeat[j]+"<br>"; // t1 "" + sM pepperoni
			if (meatCount <= 1) {
				text2 = text2 + 0 + "<br>"; // t2 = "" + 0
				meatCount = meatCount - 1;
			} else if (meatCount == 2) {
				text2 = text2 + 1 + "<br>";
				meatCount = meatCount - 1;
			} else {
				text2 = text2 + 1 + "<br>";
				meatCount = meatCount - 1;
			}
	}
	getVeggie(runningTotal,text1,text2);
};

function getVeggie(runningTotal,text1,text2) {
	var veggieTotal = 0;
	var selectedVeggie = [];
	var veggieArray = document.getElementsByClassName("veggies");
	for (var j = 0; j < veggieArray.length; j++) {
		if (veggieArray[j].checked) {
			selectedVeggie.push(veggieArray[j].value);
		}
	}
	var veggieCount = selectedVeggie.length;
	if (veggieCount >= 2) {
		veggieTotal = (veggieCount - 1);
	} else {
		veggieTotal = 0;
	}
	runningTotal = (runningTotal + veggieTotal);
	for (var j = 0; j < selectedVeggie.length; j++) {
			text1 = text1+selectedVeggie[j]+"<br>";
			if (veggieCount <= 1) {
				text2 = text2 + 0 + "<br>";
				veggieCount = veggieCount - 1;
			} else if (veggieCount == 2) {
				text2 = text2 + 1 + "<br>";
				veggieCount = veggieCount - 1;
			} else {
				text2 = text2 + 1 + "<br>";
				veggieCount = veggieCount - 1;
			}
	}
	getCheese(runningTotal,text1,text2);
};

function getCheese(runningTotal,text1,text2) {
	var cheeseTotal = 0;
	var selectedCheese = [];
	var cheeseArray = document.getElementsByClassName("cheese");
	for (var j = 0; j < cheeseArray.length; j++) {
		if (cheeseArray[j].checked) {
			selectedCheese = cheeseArray[j].value;
		}
		if (selectedCheese === "Extra cheese") {
			cheeseTotal = 3;
		}
	}
	text2 = text2+cheeseTotal+"<br>";
	text1 = text1+selectedCheese+"<br>";
	runningTotal = (runningTotal + cheeseTotal);
	getSauce(runningTotal,text1,text2);
};

function getSauce(runningTotal,text1,text2) {
	var sauceArray = document.getElementsByClassName("sauce");
	for (var j = 0; j < sauceArray.length; j++) {
		if (sauceArray[j].checked) {
			selectedSauce = sauceArray[j].value;
			text1 = text1 + selectedSauce +"<br>";
		}
	}
	text2 = text2 + 0 + "<br>";
	getCrust(runningTotal,text1,text2)
};

function getCrust(runningTotal,text1,text2) {
	var crustTotal = 0;
	var selectedCrust;
	var crustArray = document.getElementsByClassName("crust");
	for (var j = 0; j < crustArray.length; j++) {
		if (crustArray[j].checked) {
			selectedCrust = crustArray[j].value;
			text1 = text1 + selectedCrust + "<br>";
		}
		if (selectedCrust === "Cheese Stuffed Crust") {
			crustTotal = 3;
		}
	}
	runningTotal = (runningTotal + crustTotal);
	text2 = text2 + crustTotal + "<br>";
	document.getElementById("cart").style.opacity=1;
	document.getElementById("showText1").innerHTML=text1;
	document.getElementById("showText2").innerHTML=text2;
	document.getElementById("totalPrice2").innerHTML = "</h3>$"+runningTotal+".00"+"</h3>";
};

// This code clears the form selections to their defaults and then sets the 
// corresponding div's CSS opacity to 0, effectively hiding it from view.
function clearAll() {
	document.getElementById("frmMenu").reset();
	document.getElementById("cart").style.opacity=0;
};