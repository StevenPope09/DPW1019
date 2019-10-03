class Toon {
    constructor(n,type,powers,health,universe) {
        this.name = n
        this.type = type
        this.powers = powers
        this.health = health
        
        this.universe = universe
    }
}

class ToonLineup {
    constructor(arr){
        this.toonLineup = arr
    }
}

class SuperToon {
    constructor() {

    }
}

let formField = document.querySelector("#formField")
if (formField) {
    let formData = "";

    

    formData += '<form id="toonForm>'
    formData += '<div className="form-group">'
    formData += '<label for="universe">Universe</label>'
    formData += '<input type="text" id="staticValue" value="Marvel">'

    formData += '<label for="name">Field Two</label>'
    formData += '<input type="text">'

    formData += '<label for="fieldThree">Field Three</label>'
    formData += '<input type="text">'

    formData += '<label for="fieldFour">Field Four</label>'
    formData += '<input type="text">'

    formData += '<button  id="addHero">'+"Add Hero"+'</button>'
    formData += '<button  id="showHeroes">'+"Show Heroes"+'</button>'
    
    formData += '</div>'
    formData += '</form>'

    formField.innerHTML = formData;
    
}
let addHeroBtn = document.querySelector("#addHero")
let showHeroesBtn = document.querySelector("#showHeroes")

addHeroBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    console.log("Added Hero");
})

showHeroesBtn.addEventListener('click', (e)=> {
    e.preventDefault()
    console.log("Loaded Heroes");
})

// function addHero(e) {
//     e.preventDefault()
//     console.log("Clicked");
// }

console.log(addHeroBtn,showHeroesBtn);


let toonUni = document.querySelector("#staticValue")
let test = new Toon("Steven","Super","Lots",100,toonUni.value)

let displayHeroes = document.querySelector("#displayHeroes");

if(displayHeroes){
    let heroInfo = ""

    heroInfo += '<h2>'+ "Hero Lineup!!"+ '</h2>'
    heroInfo += '<p>'+ "Name: "+ test.name + '</p>'
    heroInfo += '<p>'+ "Type: "+ test.type + '</p>'
    heroInfo += '<p>'+ "Powers: "+ test.powers + '</p>'
    heroInfo += '<p>'+ "Health: "+ test.health + '</p>'
    heroInfo += '<p>'+ "Universe: "+ test.universe + '</p>'

    displayHeroes.innerHTML= heroInfo

}