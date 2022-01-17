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

//Default specifications
var toDo = ["", "", "", "", "", "", "", "", ""];
toDo = JSON.parse(localStorage.getItem(toDo));

//Retrieving last data from local storage and updating
if (!toDo.length) {
    //not working
    console.log("toDo is empty");
}
else{

    console.log("toDo is being brought in with value " + toDO);
}

if (JSON.parse(localStorage.getItem("index")) > 0) {
    index = JSON.parse(localStorage.getItem("index"));
    console.log("index is " + index);
}

//tempArray needs to be used as cannot directly manipulate toDo
var tempArray = toDo;


//Putting calander date on html
timeEl.text(moment().format("dddd, MMMM Do"));

//So each row has its own block
containerEl.children().css("display", "block");

//Uses local storage data to fill out todays toDos
function scheduleFiller(){

    console.log("toDo takes values " + toDo);
    tempArray = JSON.parse(localStorage.getItem("toDo"));

    for (let i = 0; i < tempArray.length; i++) {
        console.log("tempArray["+i+"] takes value " + tempArray[i]);
    }
    //Maybe only fill if date is the same (????)
    for (let i = 0; i < index; i++) {

        if (i == 0) {
            nineAM.val(tempArray[0]);
            console.log("toDo[0] takes value " + tempArray[0]);
        }

        else if(i==1){
            
            tenAM.val(tempArray[1]);
            console.log("toDo[0] takes value " + tempArray[1]);
        }

        else if(i == 2){
            elevenAM.val(tempArray[2]);
            console.log("toDo[0] takes value " + tempArray[2]);

        }

        else if(i == 3){
            twelveAM.val(tempArray[3]);
            console.log("toDo[0] takes value " + tempArray[3]);

        }

        else if(i == 4){
            onePM.val(tempArray[4]);
            console.log("toDo[0] takes value " + tempArray[4]);

        }

        else if(i == 5){
            twoPM.val(tempArray[5]);
            console.log("toDo[0] takes value " + tempArray[5]);

        }

        else if(i == 6){
            threePM.val(tempArray[6]);
            console.log("toDo[0] takes value " + tempArray[6]);

        }

        else if(i == 7){
            fourPM.val(tempArray[7]);
            console.log("toDo[0] takes value " + tempArray[7]);

        }

        else if(i == 8){
            fivePM.val(tempArray[8]);
            console.log("toDo[0] takes value " + tempArray[8]);

        }
        
    }
}

//Function that puts the coloured bars in depending on tome of day
function colourChanger() {

    //Variable used for targeting the html elements 1 by 1
    var colorChange;

    if (timer > 21) {
        //all blocks grey
        colorChange = $(document.getElementsByClassName('inputBox'));
        colorChange.css("background-color", "grey");
    }

    else if (timer < 9) {
        //all blocks green 
        colorChange = $(document.getElementsByClassName('inputBox'));
        colorChange.css("background-color", "green");
    }

    else if(9 < timer < 21 ) {
        // console.log('entering final elseif');
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

        else{
            //console.log("error timer isnt within range");
        }
    }
}

//Function calls
colourChanger();
scheduleFiller();


//The btn click functions to save items to local storage
btnNineEl.on('click', function(event){
    tempArray[0] = nineAM.val();
    //console.log(temp);
    toDo[0] = (tempArray[0]);
    localStorage.setItem("toDo", JSON.stringify(temp));
    index++;
    console.log("index is " + index);
    localStorage.setItem("index", index);
})

btnTenEl.on('click', function(event){
    tempArray[1] = tenAM.val()
    toDo[1] = (tempArray[1]);
    localStorage.setItem("toDo", JSON.stringify(toDo));
    //console.log(temp);
    index++;
    console.log("index is " + index);
    localStorage.setItem("index", index);
})

btnElevenEl.on('click', function(event){
    tempArray[2] = elevenAM.val()
    toDo[2] = (tempArray[2]);
    localStorage.setItem("toDo", JSON.stringify(toDo));
    //console.log(temp);
    index++;
    localStorage.setItem("index", index);
})

btnTwelveEl.on('click', function(event){
    tempArray[3] = twelveAM.val()
    toDo[3] = (tempArray[3]);
    localStorage.setItem("toDo", JSON.stringify(toDo));
    //console.log(temp);
    index++;
    localStorage.setItem("index", index);
})

btnOneEl.on('click', function(event){
    tempArray[4] = onePM.val()
    toDo[4] = (tempArray[4]);
    localStorage.setItem("toDo", JSON.stringify(toDo));
    //console.log(temp);
    index++;
    localStorage.setItem("index", index);
})

btnTwoEl.on('click', function(event){
    tempArray[5] = twoPM.val()
    toDo[5] = (tempArray[5]);
    localStorage.setItem("toDo", JSON.stringify(toDo));
    //console.log(temp);
    index++;
    localStorage.setItem("index", index);
})

btnThreeEl.on('click', function(event){
    tempArray[6] = threePM.val()
    toDo[6] = (tempArray[6]);
    localStorage.setItem("toDo", JSON.stringify(toDo));
    //console.log(temp);
    index++;
    localStorage.setItem("index", index);
})

btnFourEl.on('click', function(event){
    tempArray[7] = fourPM.val()
    toDo[7] = (tempArray[7]);
    localStorage.setItem("toDo", JSON.stringify(toDo));
    //console.log(temp);
    index++;
    localStorage.setItem("index", index);
})

btnFiveEl.on('click', function(event){
    tempArray[8] = fivePM.val()
    toDo[8] = (tempArray[8]);
    localStorage.setItem("toDo", JSON.stringify(toDo));
    //console.log(temp);
    index++;
    localStorage.setItem("index", index);
})