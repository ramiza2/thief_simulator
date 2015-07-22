//TODO : Finish the safe timer!

var bankBalance = randNumberBetween(10000,30000); 
var thief = {money : 0, maxMoney : 10000};
var safe = {isBroken: false, amount: 0, moneyMin: 3000, moneyMax: 5000, refillTimer: 30000};

var container1 = {isOwned: false, maxMoney : 7000, currentMoney: 0, buyPrice : 5000, sellPrice: 1500, currentUpgrade : 0};
var container2 = {isOwned: false, maxMoney : 12000, currentMoney: 0, buyPrice : 7000, sellPrice: 2500, currentUpgrade : 0};
var container3 = {isOwned: false, maxMoney : 19000, currentMoney: 0, buyPrice : 10000, sellPrice: 3500, currentUpgrade : 0};

var upgrade1 = {buyPrice: 3500, capacity: 5000};
var upgrade2 = {buyPrice: 5000, capacity: 7000};

balanceDisplay(bankBalance); 
thiefBalanceDisplay(thief.money);

function randomNum(maxNumber){
    return Math.floor((Math.random() * maxNumber) + 1);
}
function balanceDisplay(balance){
	document.getElementById("bank_balance").innerHTML = "$" + balance;
	if(balance <= 500){
		document.getElementById("bank_balance").style.color = "red";
	}
	else if(balance >= 500){
		document.getElementById("bank_balance").style.color = "lime";
	}
	
}
function steal(amount){
	if(thief.money + amount > thief.maxMoney){
		alert("You cannot carry that much money!");
	}
	else{
		if(amount >= bankBalance){
			alert("The bank doesn't have that much money!")
		}
		else if(amount <= bankBalance ){
		bankBalance -= amount;
		thief.money += amount;
		balanceDisplay(bankBalance);
		thiefBalanceDisplay(thief.money);
	}
	}
}
function stealExact(){
	var amount = parseInt(prompt("Enter the amount that you want to steal!"));
	if(thief.money + amount> thief.maxMoney){
		alert("You cannot carry that much money!");
	}
	else{
		if(amount > bankBalance){
			alert("The bank doesn't have that much money!")
		}
		else if(amount <= bankBalance ){
		bankBalance -= amount;
		thief.money += amount;
		balanceDisplay(bankBalance);
		thiefBalanceDisplay(thief.money);
	}
	}
	
}
function bankDonate(){
	var amount = parseInt(prompt("Enter the amount that you want to donate!"));
	if(amount > thief.money){
		alert("You do not have that much money!");
	}
	else{
	thief.money -= amount;
	bankBalance += amount;
	balanceDisplay(bankBalance);
	thiefBalanceDisplay(thief.money);
	}
	
}
function thiefBalanceDisplay(balance){
	
	document.getElementById("thief_balance").innerHTML = "$" + balance;
	
}
function safeBreak(){
	safe.amount = randNumberBetween(safe.moneyMin,safe.moneyMax);
	
	if(safe.isBroken == true){
		alert("You already broke the safe! It's empty! Refilling in " + safe.refillTimer/1000 + " seconds!");
	}
	else{
		if(thief.money + safe.amount > thief.maxMoney){
			alert("You cannot carry that much money!");
		}
		else{
			thief.money += safe.amount;
			safe.isBroken = true;
			thiefBalanceDisplay(thief.money);
            setTimeout(function(){safe.isBroken=false}, safe.refillTimer);
            safeTimerDisplay(safe.refillTimer);
		}	
	}
	
}
function safeTimerDisplay(time){
    var sec = time / 1000;
    var timer = setInterval(function(){
        if(sec >= 10){
        document.getElementById("safeTimerDisplay").innerHTML = "00:" + sec;
            sec--;
            }
        else if(sec < 10){
            document.getElementById("safeTimerDisplay").innerHTML = "00:0" + sec;
            sec--;
        }
        if(sec <= 0){
            document.getElementById("safeTimerDisplay").innerHTML = "Safe Full!";
            clearInterval(timer); 
        }
        
        var sound = document.getElementById("beepSound").play();
        
    }, 1000); 
}
function randNumberBetween(minNumber, maxNumber){
	
	
	var maxMinusMin = maxNumber - minNumber;
	
	var finalNumber = minNumber + randomNum(maxMinusMin);
	return finalNumber;
}
function buyContainer(container){
		if(thief.money < container.buyPrice){
			alert("You do not have enough money to buy that container!");
		}
		else{
		container.isOwned = true;
		thief.money -= container.buyPrice;
		thiefBalanceDisplay(thief.money);
		updateContainerDisplay(container);
		
		}
    
		
}
function updateContainerDisplay(container){
	if(container == container1){
		if(container1.isOwned == false){
			document.getElementById("container1_owned").innerHTML="You do not own this container!";
			document.getElementById("container1_owned").style.color="Red";
			document.getElementById("container1_money").style.display = "none";
			document.getElementById("container1_money").style.display = "none";
			document.getElementById("container1_buy").style.display = "inline";
			document.getElementById("container1_sell").style.display = "none";
			document.getElementById("container1_upgrade").style.display = "none";
			document.getElementById("container1_store10").style.display = "none";
			document.getElementById("container1_store100").style.display = "none";
			document.getElementById("container1_store1000").style.display = "none";
			document.getElementById("container1_storeExact").style.display = "none";
			document.getElementById("container1_take").style.display = "none";
		}
		else{
			document.getElementById("container1_owned").innerHTML="Owned";
			document.getElementById("container1_owned").style.color="Lime";
			document.getElementById("container1_money").style.display = "inline";
			document.getElementById("container1_money").innerHTML= " - " + "$" + container.currentMoney + "/" + "$" + container.maxMoney;
			document.getElementById("container1_buy").style.display = "none";
			document.getElementById("container1_sell").style.display = "inline";
			document.getElementById("container1_upgrade").style.display = "inline";
			document.getElementById("container1_store10").style.display = "inline";
			document.getElementById("container1_store100").style.display = "inline";
			document.getElementById("container1_store1000").style.display = "inline";
			document.getElementById("container1_storeExact").style.display = "inline";
			document.getElementById("container1_take").style.display = "inline";
			
		}
	}
	else if(container == container2){
		if(container2.isOwned == false){
			document.getElementById("container2_owned").innerHTML="You do not own this container!";
			document.getElementById("container2_owned").style.color="Red";
			document.getElementById("container2_money").style.display = "none";
			document.getElementById("container2_buy").style.display = "inline";
			document.getElementById("container2_sell").style.display = "none";
			document.getElementById("container2_upgrade").style.display = "none";
			document.getElementById("container2_store10").style.display = "none";
			document.getElementById("container2_store100").style.display = "none";
			document.getElementById("container2_store1000").style.display = "none";
			document.getElementById("container2_storeExact").style.display = "none";
			document.getElementById("container2_take").style.display = "none";
		}
		else{
			document.getElementById("container2_owned").innerHTML="Owned";
			document.getElementById("container2_owned").style.color="Lime";
			document.getElementById("container2_money").style.display = "inline";
			document.getElementById("container2_money").innerHTML= " - " + "$" + container.currentMoney + "/" + "$" + container.maxMoney;
			document.getElementById("container2_buy").style.display = "none";
			document.getElementById("container2_sell").style.display = "inline";
			document.getElementById("container2_upgrade").style.display = "inline";
			document.getElementById("container2_store10").style.display = "inline";
			document.getElementById("container2_store100").style.display = "inline";
			document.getElementById("container2_store1000").style.display = "inline";
			document.getElementById("container2_storeExact").style.display = "inline";
			document.getElementById("container2_take").style.display = "inline";
			
		}
		
	}
	else if(container == container3){
		if(container3.isOwned == false){
			document.getElementById("container3_owned").innerHTML="You do not own this container!";
			document.getElementById("container3_owned").style.color="Red";
			document.getElementById("container3_money").style.display = "none";
			document.getElementById("container3_buy").style.display = "inline";
			document.getElementById("container3_sell").style.display = "none";
			document.getElementById("container3_upgrade").style.display = "none";
			document.getElementById("container3_store10").style.display = "none";
			document.getElementById("container3_store100").style.display = "none";
			document.getElementById("container3_store1000").style.display = "none";
			document.getElementById("container3_storeExact").style.display = "none";
			document.getElementById("container3_take").style.display = "none";
		}
		else{
			document.getElementById("container3_owned").innerHTML="Owned";
			document.getElementById("container3_owned").style.color="Lime";
			document.getElementById("container3_money").style.display = "inline";
			document.getElementById("container3_money").innerHTML= " - " + "$" + container.currentMoney + "/" + "$" + container.maxMoney;
			document.getElementById("container3_buy").style.display = "none";
			document.getElementById("container3_sell").style.display = "inline";
			document.getElementById("container3_upgrade").style.display = "inline";
			document.getElementById("container3_store10").style.display = "inline";
			document.getElementById("container3_store100").style.display = "inline";
			document.getElementById("container3_store1000").style.display = "inline";
			document.getElementById("container3_storeExact").style.display = "inline";
			document.getElementById("container3_take").style.display = "inline";
			
		}
	}
}
function sellContainer(container){
	container.isOwned = false;
	thief.money += container.sellPrice;
	thiefBalanceDisplay(thief.money);
	updateContainerDisplay(container);
	
}
function containerStore(amount, container){
	if(amount > thief.money){
		alert("You do not have that much money to store!");
	}
	else if(amount + container.currentMoney > container.maxMoney){
		alert("That container is full!");
	}
	else{
		container.currentMoney += amount;
		thief.money -= amount;
		thiefBalanceDisplay(thief.money);
		updateContainerDisplay(container);
	}
}
function containerExactStore(container){
	var amount = parseInt(prompt("Enter the amount of money that you want to store!"));
	if(amount > thief.money){
		alert("You do not have that much money to store!");
	}
	else if(amount + container.currentMoney > container.maxMoney){
		alert("That container is full!");
	}
	else{
		container.currentMoney += amount;
		thief.money -= amount;
		thiefBalanceDisplay(thief.money);
		updateContainerDisplay(container);
	}
}
function containerTake(container){
	var amount = parseInt(prompt("Enter the amount that you want to take!"));
	if(amount > container.currentMoney){
		alert("The container doesn't have that much money!");
	}
	else if(amount + thief.money > thief.maxMoney){
		alert("You cannot hold that much money!");
	}
	else{
		container.currentMoney -= amount;
		thief.money += amount;
		thiefBalanceDisplay(thief.money);
		updateContainerDisplay(container);
	}
}
function upgradeContainer(container){
    if(container.currentUpgrade == 0){
        if(thief.money < upgrade1.buyPrice){
            alert("You do not have enough money to buy this upgrade!");
        }
        else{
            thief.money -= upgrade1.buyPrice;
            container.maxMoney += upgrade1.capacity;
            container.currentUpgrade = 1;
            updateContainerDisplay(container);
            thiefBalanceDisplay(thief.money);
        }
    }
    else if(container.currentUpgrade == 1){
        if(thief.money < upgrade2.buyPrice){
            alert("You do not have enough money to buy this upgrade!");
        }
        else{
            thief.money -= upgrade2.buyPrice;
            container.maxMoney += upgrade2.capacity;
            container.currentUpgrade = 2;
            updateContainerDisplay(container);
            thiefBalanceDisplay(thief.money);
            
        }
    }
    else{
        alert("The container is already upgraded to the max!")
    }
}
