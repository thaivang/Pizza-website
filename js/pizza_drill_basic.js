
var total = 0;
var subtotal = " ";
var pizzaSize = " ";
subTotal = 0;
document.getElementById("cart").style.display = "none";

function getSize() {
    if (document.getElementById("personal").checked) {
        total += 6;
        subtotal = total;
        pizzaSize = "Personal";
    } else if (document.getElementById("medium").checked) {       
        total += 10;
        subtotal = total;
        pizzaSize = "Medium";
    } else if (document.getElementById("large").checked) {
        total += 14;
        subtotal = total;
        pizzaSize = "Large";
    } else if (document.getElementById("extralarge").checked) {
        total += 16;
        subtotal = total;
        pizzaSize = "Extra Large";
    }
};

var meatChecked = [];
var meatItem = document.getElementsByClassName("meats");
var countI = 0;
var x = 0;
//how to clear the counter
function getMeat(a, b) {
    var i;
    for (i = 0; i < b.length; ++i) { //if true counter increments by 1
        if (b[i].checked) {
            a.push(b[i].value);
            countI = ++x;   
        }  
    }

    if (a.length === 1) {
        total += countI - 1;
    } else if (a.length >= 2) {
        countI -= 1;
        total += countI;
        subtotal = total;
    } else {
        total;
    }

    if (countI >= 1) {
        countI = 0;
    }
};

var sauce = " ";

function getSauce() {
    if (document.getElementById("flavor1").checked) {
        sauce = "Marinara Sauce";
    } else if (document.getElementById('flavor2').checked) {
        sauce = "White Sauce";       
    } else if (document.getElementById("flavor3").checked) {       
        sauce = "Barbecue Sauce";
    } else if (document.getElementById("flavor4").checked) {     
        sauce = "No Sauce";
    }
};

var cheese = " ";

function getCheese() {
    if (document.getElementById("flavor1").checked) {
        cheese = "No Cheese";        
    } else if (document.getElementById("flavor2").checked) {
        cheese = "Regular";
    } else if (document.getElementById("flavor3").checked) {
        cheese = "Extra Cheese";
    }
};


//function getMeat() {
//    var i;
//    for (i = 0; i < meatItem.length; ++i) { //if true counter increments by 1
//        if (meatItem[i].checked) {
//            meatChecked.push(meatItem[i].value);
//            countI = ++x;
//        }
//    }

//    if (meatChecked.length === 1) {
//        total += countI - 1;
//    } else if (meatChecked.length >= 2) {
//        countI -= 1;
//        total += countI;
//        subtotal = total;
//    } else {
//        total;
//    }
//};

var crust = " ";

function getCrust() {
    if (document.getElementById("crust1").checked) {
        crust = "Plain";
    } else if (document.getElementById("crust2").checked) {
        crust = "Cheese Stuffed";
    } else if (document.getElementById("crust3").checked) {
        crust = "Garlic Butter";
    } else if (document.getElementById("crust4").checked) {
        crust = "Spicy";
    } else if (document.getElementById("crust5").checked) {
        crust = "Cinnamon";
    }
};

function subtotal() {
    document.innerHTML.getElementById("showtext2") = total;
};

function getReceipt() {
    getSize();
    getMeat(meatChecked, meatItem);
    getSauce();
    getCheese();
    getCrust();

    var cart = document.getElementById("cart");
    if (cart.style.display === "none") {
        cart.style.opacity = 1;
        cart.style.display = "block";
    }
    //selected or not 
    //if () {

    //} else {
    //    document.getElementById('showText1').innerHTML = pizzaSize + "<br>" + meatChecked.join(" ") + " " + sauce;
    //}
    document.getElementById("showText1").innerHTML = pizzaSize + "<br>" + meatChecked.join("<br>") + "<br>" + sauce + "<br>" + cheese + "<br>" + "<br>" + crust;
    document.getElementById("totalPrice2").innerHTML = "$" + total;
};

function clearAll() {
    var clear = document.getElementById("cart");
    
    if (clear.style.display === "block") {
        clear.style.opacity = 0;
        clear.style.display = "none";
        meatChecked.length = 0;
        total = 0;
        countI = 0;
        //document.getElementById("totalPrice2").innerHTML = "$" + total;
    }
};


