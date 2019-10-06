//grab the different elements of HTML 
let addHeroBtn = document.querySelector("#addToon")
let showHeroesBtn = document.querySelector("#showToons")
let toonForm = document.querySelector("#toonForm")
let toonUni = document.querySelector("#universeSelect")
let toonRole = document.querySelector("#roleSelect")
let toonName = document.querySelector("#toonName")
let powers = document.querySelector("#attackPowers")
let stoneName = document.querySelector("#stoneName")
//create a new array to hold all of the heroes/toons
let toonLineup = [];

//addHero function to create new objects and store them in the array from above
addHeroBtn.addEventListener('click', (e) => {
    e.preventDefault()
    if(toonName.value == "" || powers.value == "" || stoneName.value == ""){
        alert("Please fill out all fields before adding toon")
        return
    }else
    //check which "sort" of toon/hero to create
    if (toonRole.value == "God") {
        console.log("God Created");

        let superToon = new SuperToon(toonName.value, stoneName.value);
        console.log(superToon.toString());

        toonLineup.push(superToon)
        toonForm.reset()
        return
    } else
        console.log("Added Toon");

    let newToon = new Toon(toonName.value, powers.value, toonRole.value, toonUni.value, stoneName.value)
    console.log(newToon.toString());
    toonLineup.push(newToon)

    toonForm.reset()
})

showHeroesBtn.addEventListener('click', (e) => {
    e.preventDefault()
    console.log("Loaded Toons");
    console.log(toonLineup);

    displayInfo();

})

function displayInfo() {
    let heroDiv = document.getElementById("displayHeroes");
    heroDiv.innerHTML = "";
    let heroInfo = "";
    for (let person of toonLineup) {

        heroInfo += '<div class="container">'
        heroInfo += '<div class="row">'
        heroInfo += '<div id="heroInfo" class="col-12">'
        heroInfo += '<h3>' + person.getName() + '</h3>'
        heroInfo += '<p>' + "Universe: " + person.getUniverse() + '</p>'
        heroInfo += '<p>' + "Attack Powers: " + person.getPowers() + '</p>'
        heroInfo += '<p>' + "Average Attack Power: " + person.getAverage() + '</p>'
        heroInfo += '<p>' + "Role: " + person.getRole() + '</p>'
        heroInfo += '<p>' + "Stone Name: " + person.getStoneName() + '</p>'
        heroInfo += '<p>' + "Movie Host: " + person.getMovie() + '</p>'
        heroInfo += '</div>' //
        heroInfo += '</div>'//
        heroInfo += '</div>'//

        heroDiv.innerHTML = heroInfo;
        // let personDiv = document.createElement("div");
        // personDiv.className = "abc";

        // let personStr = person.toString();
        // let personDivContent = document.createTextNode(personStr);
        // personDiv.appendChild(personDivContent);
        // heroDiv.appendChild(personDiv);
    }

}
//console.log(addHeroBtn, showHeroesBtn);


