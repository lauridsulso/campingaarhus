//maja og pernille, skjuler madmenu/barmenu

function madMenu() {
    document.getElementById('forsvind').style.display = "block";
    document.getElementById('menuKort').style.display = "none";
    document.getElementById('barmenu-knap').classList.add("activeButton");
    document.getElementById('madmenu-knap').classList.remove("activeButton");
}



function barMenu() {
    document.getElementById('forsvind').style.display = "none";
    document.getElementById('menuKort').style.display = "block";
    document.getElementById('madmenu-knap').classList.add("activeButton");
    document.getElementById('barmenu-knap').classList.remove("activeButton");

}

barMenu();



//navigationsmenuen (tine)
function hidemenu() {
    document.querySelector("#menuButton").checked = false;
}



// antal spillere (maja, laurids, pernille, tine)

function createPlayers() {
    let userInput = parseInt(document.getElementById("numberofplayers").value);
    for (let i = 0; i <= userInput - 1; i++) {
        document.getElementById("indtast-navn").innerHTML += "<input placeholder='Spillernavn' type='text' />"
    }
    navigateTo("indtastjeresnavne")
}


// exit knap i spillet (maja, tine)

function exit() {
    let page = (confirm("Er du sikker på, at du vil afslutte spillet?")); 
      if (page) {
          window.location.hash = 'home';
    } else {
        window.history.go('#onboard1');
    }
    
  }


  
function createGame() {
    //få spillernes navne fra input
    let userInputs = document.querySelectorAll("#indtast-navn input");

    //opret array med spiller objects 
    let newPlayers = [];
    for (const userInput of userInputs) {
        console.log(userInput.value);
        let newPlayer = {
            name: userInput.value
        }
        newPlayers.push(newPlayer);
    }

    //opret nyt spil object
    let newGame = {
        numberOfPlayers: newPlayers.length,
        players: newPlayers
    };
    console.log(newGame);

    _gamesRef.add(newGame);
}



// antal bokse ved hul 1, udfra hvor mange spillere de er (maja, laurids, pernille, tine)

function createPlayersHoles() {
    let userInput = parseInt(document.getElementById("numberofplayers").value);
    for (let i = 0; i <= userInput - 1; i++) {
        document.getElementById("indtast-slag").innerHTML += "<input placeholder='indtast slag' type='text' />"
    }
    navigateTo("hul1")
}




// ========== GLOBAL VARIABLES ========== //
const _dataRef = _db.collection("carbonData");
let _carbonData;

// 1: data from firebase
// listen for changes on _dataRef
_dataRef.orderBy("quarter").onSnapshot(snapshotData => {
    _carbonData = []; // reset _carbonData
    snapshotData.forEach(doc => { // loop through snapshotData - like for of loop
        let data = doc.data(); // save the data in a variable
        data.id = doc.id; // add the id to the data variable
        _carbonData.push(data); // push the data object to the global array _carbonData
    });
    console.log(_carbonData);
    //call appendMilkProduction with _carbonData as function argument
    carbonFootprint();

});

// MILKPRODUCTION //

// 2: preparing the data carbonFootprint
function prepareMilkProductionData(carbonData) {
    let quarters = [];
    let yourCarbon = [];
    let nationalCarbon = [];
    carbonData.forEach(data => {
        if (data.dataType === 'yourData') { // condition testing whether the dataType is 'yourData' og 'nationalData'
            yourCarbon.push(data.carbonFootprint);
            quarters.push(data.quarter);
        } else if (data.dataType === 'nationalData') {
            nationalCarbon.push(data.carbonFootprint);
        }
    });
    return {
        quarters,
        yourCarbon,
        nationalCarbon
    }
}

//3: appending the chart
function appendMilkProduction(carbonData) {
    let data = prepareMilkProductionData(carbonData);
    console.log(data);