//Targeting variable declarations for html
var timeEl = $('#currentDay');
var timeBlocksEl = $('#timeBlocks');
var containerEl = $('#container');

//rows on chart
var nineAM = $('#9');
var tenAM = $('#10');
var elevenAM = $('#11');
var twelveAM = $('#12');
var onePM = $('#1');
var twoPM = $('#2');
var threePM = $('#3');
var fourPM = $('#4');
var fivePM = $('#5');

//save buttons for each row
var btnNineEl = $('#button9');
var btnTenEl = $('#button10');
var btnElevenEl = $('#button11');
var btnTwelveEl = $('#button12');
var btnOneEl = $('#button1');
var btnTwoEl = $('#button2');
var btnThreeEl = $('#button3');
var btnFourEl = $('#button4');
var btnFiveEl = $('#button5');

//moment used to find time of day
var timer = moment().format("H");

//Default specifications. If toDo is empty, nothing is fetched from local storage. Otherwise, brings up
//previous entries. NOTE: flag is used to signal that toDo was filled with data. By default, its false
var toDo = [];
toDo = JSON.parse(localStorage.getItem(toDo));
var flag = false;


//Retrieving last data from local storage and updating
if (!JSON.parse(localStorage.getItem("flag"))) {
    toDo = ["", "", "", "", "", "", "", "", ""];
}
else{
    //if toDo's flag is true, enters this else statememt
    flag = true;
}

//tempArray needs to be used as cannot directly manipulate toDo
var tempArray = toDo;

//Putting calander date on html
timeEl.text(moment().format("dddd, MMMM Do"));

//Uses local storage data to fill out todays toDos
function scheduleFiller(){

    tempArray = JSON.parse(localStorage.getItem("toDo"));

    for (let i = 0; i < tempArray.length; i++) {

        if (i == 0) {
            nineAM.val(tempArray[0]);
        }

        else if(i==1){
            
            tenAM.val(tempArray[1]);
        }

        else if(i == 2){
            elevenAM.val(tempArray[2]);
        }

        else if(i == 3){
            twelveAM.val(tempArray[3]);
        }

        else if(i == 4){
            onePM.val(tempArray[4]);
        }

        else if(i == 5){
            twoPM.val(tempArray[5]);
        }

        else if(i == 6){
            threePM.val(tempArray[6]);
        }

        else if(i == 7){
            fourPM.val(tempArray[7]);
        }

        else if(i == 8){
            fivePM.val(tempArray[8]);
        }   
    }
}

//Function that puts the coloured bars in depending on tome of day
function colourChanger() {

    //Variable used for targeting the html elements 1 by 1
    var colorChange;

    if (timer > 17) {
        //all blocks grey
        colorChange = $(document.getElementsByClassName('inputBox'));
        colorChange.css("background-color", "grey");
    }

    else if (timer < 9) {
        //all blocks green 
        colorChange = $(document.getElementsByClassName('inputBox'));
        colorChange.css("background-color", "green");
    }

    else if(9 < timer < 17 ) {
        //Enters if statement thats appropriate for the hour of the day...
            //sets particular timeblock to red, everything before green, and everything after grey
        if (timer == 9) {
            colorChange = $(document.getElementsByClassName('nine'));
            colorChange.css("background-color", "red");
        }

        else if(timer == 10){
            
            colorChange = $(document.getElementsByClassName('ten'));
            colorChange.css("background-color", "red");

            colorChange = $(document.getElementsByClassName('nine'));
            colorChange.css("background-color", "green");
        }

        else if(timer == 11){
            colorChange = $(document.getElementsByClassName('eleven'));
            colorChange.css("background-color", "red");

            colorChange = $(document.getElementsByClassName('ten'));
            colorChange.css("background-color", "green");
            colorChange = $(document.getElementsByClassName('nine'));
            colorChange.css("background-color", "green");

        }

        else if(timer == 12){
            colorChange = $(document.getElementsByClassName('twelve'));
            colorChange.css("background-color", "red");

            colorChange = $(document.getElementsByClassName('eleven'));
            colorChange.css("background-color", "green");
            colorChange = $(document.getElementsByClassName('ten'));
            colorChange.css("background-color", "green");
            colorChange = $(document.getElementsByClassName('nine'));
            colorChange.css("background-color", "green");

        }

        else if(timer == 13){
            colorChange = $(document.getElementsByClassName('one'));
            colorChange.css("background-color", "red");

            colorChange = $(document.getElementsByClassName('twelve'));
            colorChange.css("background-color", "green");
            colorChange = $(document.getElementsByClassName('eleven'));
            colorChange.css("background-color", "green");
            colorChange = $(document.getElementsByClassName('ten'));
            colorChange.css("background-color", "green");
            colorChange = $(document.getElementsByClassName('nine'));
            colorChange.css("background-color", "green");

        }

        else if(timer == 14){
            colorChange = $(document.getElementsByClassName('two'));
            colorChange.css("background-color", "red");

            colorChange = $(document.getElementsByClassName('one'));
            colorChange.css("background-color", "green");
            colorChange = $(document.getElementsByClassName('twelve'));
            colorChange.css("background-color", "green");
            colorChange = $(document.getElementsByClassName('eleven'));
            colorChange.css("background-color", "green");
            colorChange = $(document.getElementsByClassName('ten'));
            colorChange.css("background-color", "green");
            colorChange = $(document.getElementsByClassName('nine'));
            colorChange.css("background-color", "green");

        }

        else if(timer == 15){
            colorChange = $(document.getElementsByClassName('three'));
            colorChange.css("background-color", "red");

            colorChange = $(document.getElementsByClassName('two'));
            colorChange.css("background-color", "green");
            colorChange = $(document.getElementsByClassName('one'));
            colorChange.css("background-color", "green");
            colorChange = $(document.getElementsByClassName('twelve'));
            colorChange.css("background-color", "green");
            colorChange = $(document.getElementsByClassName('eleven'));
            colorChange.css("background-color", "green");
            colorChange = $(document.getElementsByClassName('ten'));
            colorChange.css("background-color", "green");
            colorChange = $(document.getElementsByClassName('nine'));
            colorChange.css("background-color", "green");

        }

        else if(timer == 16){
            colorChange = $(document.getElementsByClassName('four'));
            colorChange.css("background-color", "red");

            colorChange = $(document.getElementsByClassName('three'));
            colorChange.css("background-color", "green");
            colorChange = $(document.getElementsByClassName('two'));
            colorChange.css("background-color", "green");
            colorChange = $(document.getElementsByClassName('one'));
            colorChange.css("background-color", "green");
            colorChange = $(document.getElementsByClassName('twelve'));
            colorChange.css("background-color", "green");
            colorChange = $(document.getElementsByClassName('eleven'));
            colorChange.css("background-color", "green");
            colorChange = $(document.getElementsByClassName('ten'));
            colorChange.css("background-color", "green");
            colorChange = $(document.getElementsByClassName('nine'));
            colorChange.css("background-color", "green");

        }

        else if(timer == 17){
            colorChange = $(document.getElementsByClassName('five'));
            colorChange.css("background-color", "red");

            colorChange = $(document.getElementsByClassName('four'));
            colorChange.css("background-color", "green");
            colorChange = $(document.getElementsByClassName('three'));
            colorChange.css("background-color", "green");
            colorChange = $(document.getElementsByClassName('two'));
            colorChange.css("background-color", "green");
            colorChange = $(document.getElementsByClassName('one'));
            colorChange.css("background-color", "green");
            colorChange = $(document.getElementsByClassName('twelve'));
            colorChange.css("background-color", "green");
            colorChange = $(document.getElementsByClassName('eleven'));
            colorChange.css("background-color", "green");
            colorChange = $(document.getElementsByClassName('ten'));
            colorChange.css("background-color", "green");
            colorChange = $(document.getElementsByClassName('nine'));
            colorChange.css("background-color", "green");

        }
        //The error catch
        else{
            console.log("error timer isnt within range");
        }
    }
}

//Function calls
colourChanger();

//Only calls to fill times if toDo flag is true (localstorage has items in it)
if (flag) {
    scheduleFiller();
}


//The btn click functions to save items to local storage
btnNineEl.on('click', function(event){
    tempArray[0] = nineAM.val();
    toDo[0] = (tempArray[0]);
    localStorage.setItem("toDo", JSON.stringify(toDo));
    flag = true;
    localStorage.setItem("flag", JSON.stringify(flag));
})

btnTenEl.on('click', function(event){
    tempArray[1] = tenAM.val()
    toDo[1] = (tempArray[1]);
    localStorage.setItem("toDo", JSON.stringify(toDo));
    flag = true;
    localStorage.setItem("flag", JSON.stringify(flag));
})

btnElevenEl.on('click', function(event){
    tempArray[2] = elevenAM.val()
    toDo[2] = (tempArray[2]);
    localStorage.setItem("toDo", JSON.stringify(toDo));
    flag = true;
    localStorage.setItem("flag", JSON.stringify(flag));
})

btnTwelveEl.on('click', function(event){
    tempArray[3] = twelveAM.val()
    toDo[3] = (tempArray[3]);
    localStorage.setItem("toDo", JSON.stringify(toDo));
    flag = true;
    localStorage.setItem("flag", JSON.stringify(flag));
})

btnOneEl.on('click', function(event){
    tempArray[4] = onePM.val()
    toDo[4] = (tempArray[4]);
    localStorage.setItem("toDo", JSON.stringify(toDo));
    flag = true;
    localStorage.setItem("flag", JSON.stringify(flag));
})

btnTwoEl.on('click', function(event){
    tempArray[5] = twoPM.val()
    toDo[5] = (tempArray[5]);
    localStorage.setItem("toDo", JSON.stringify(toDo));
    flag = true;
    localStorage.setItem("flag", JSON.stringify(flag));
})

btnThreeEl.on('click', function(event){
    tempArray[6] = threePM.val()
    toDo[6] = (tempArray[6]);
    localStorage.setItem("toDo", JSON.stringify(toDo));
    flag = true;
    localStorage.setItem("flag", JSON.stringify(flag));
})

btnFourEl.on('click', function(event){
    tempArray[7] = fourPM.val()
    toDo[7] = (tempArray[7]);
    localStorage.setItem("toDo", JSON.stringify(toDo));
    flag = true;
    localStorage.setItem("flag", JSON.stringify(flag));
})

btnFiveEl.on('click', function(event){
    tempArray[8] = fivePM.val()
    toDo[8] = (tempArray[8]);
    localStorage.setItem("toDo", JSON.stringify(toDo));
    flag = true;
    localStorage.setItem("flag", JSON.stringify(flag));
})