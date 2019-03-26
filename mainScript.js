var outTimes = 0;
var homeTimes = 0;
var dailyCount = 16.66;
var totalSpent = 0;
var selected = 0;
var logP = 0;

var eatout = false;

var ham = document.getElementById("hams");
var home = document.getElementById("homes");
var dayz = document.getElementById("dailies");
var totz = document.getElementById("totalz");

var buttLog = document.getElementById("leftSave");
var noBButt = document.getElementById("rightSave");

var hOne = document.getElementById("holders1");
var hTwo = document.getElementById("holders2");
var hThree = document.getElementById("holders3");

var b1 = document.getElementById("theButts1");
var b2 = document.getElementById("theButts2");

var prize = document.getElementById("ppz");
var foodz = document.getElementById("fud");

hOne.onclick = function() {
    prize.value = "";
    foodz.value = "";
    if(selected == 2) {
        hTwo.style.backgroundColor = "#" + "FFFFFF";
    }
    if(selected == 3) {
        hThree.style.backgroundColor = "#" + "FFFFFF";
    }
    hOne.style.backgroundColor = "#" + "EEEEEE";
    selected = 1;
}

hTwo.onclick = function() {
    prize.value = "";
    foodz.value = "";
    if(selected == 1) {
        hOne.style.backgroundColor = "#" + "FFFFFF";
    }
    if(selected == 3) {
        hThree.style.backgroundColor = "#" + "FFFFFF";
    }
    hTwo.style.backgroundColor = "#" + "EEEEEE";
    selected = 2;
}

hThree.onclick = function() {
    prize.value = "";
    foodz.value = "";
    if(selected == 1) {
        hOne.style.backgroundColor = "#" + "FFFFFF";
    }
    if(selected == 2) {
        hTwo.style.backgroundColor = "#" + "FFFFFF";
    }
    hThree.style.backgroundColor = "#" + "EEEEEE";
    selected = 3;
}

b1.onclick = function () {
    eatout = true;
}

b2.onclick = function () {
    eatout = false;
}

buttLog.onclick = function() {
    if(selected == 1) {
        outTimes++;
        dailyCount -= 12;
        totalSpent += 12;
    }
    if(selected == 2) {
        outTimes++;
        dailyCount -= 4;
        totalSpent += 4;
    }
    if(selected == 3) {
        homeTimes++;
        dailyCount -= 3;
        totalSpent += 3;
    }
    if(selected == 0) {
        totalSpent += logP;
        if(eatout) {
            outTimes++;
        }
        else {
            homeTimes++;
        }
    }
}

prize.oninput = function() {
    logP = Math.floor(prize.value);
    selected = 0;
    hOne.style.backgroundColor = "#" + "FFFFFF";
    hTwo.style.backgroundColor = "#" + "FFFFFF";
    hThree.style.backgroundColor = "#" + "FFFFFF";
}

startIt();

function startIt() {
    setInterval(doing, 100);
}

function doing() {
    ham.innerHTML = outTimes + " Times";
    home.innerHTML = homeTimes + " Times";
    dayz.innerHTML = dailyCount;
    totz.innerHTML = totalSpent;
    
    dailyCount = ((500 - totalSpent) / 30).toFixed(2);

    if(dailyCount <= 0) {
        document.getElementById("maintop").style.backgroundColor = "#" + "dd4b39";
        document.getElementById("track").innerHTML = "Uh Oh!";
        document.getElementById("mess").innerHTML = "Based on your spending, you will not reach your goals...";
    }

    if(eatout) {
        b1.style.border = "1px solid rgba(0, 0, 0, 0.2)";
        b1.style.backgroundColor = "rgba(0, 0, 0, 0)";
        b1.boxShadow = "none";
        b2.style.border = "none";
        b2.style.boxShadow = "2px 2px 8px 0 rgba(0, 0, 0, 0.2)";
        b2.style.backgroundColor = "white";
    } 
    if(!eatout) {
        b2.style.border = "1px solid rgba(0, 0, 0, 0.2)";
        b2.style.backgroundColor = "rgba(0, 0, 0, 0)";
        b2.boxShadow = "none";
        b1.style.border = "none";
        b1.style.boxShadow = "2px 2px 8px 0 rgba(0, 0, 0, 0.2)";
        b1.style.backgroundColor = "white";
    }
}