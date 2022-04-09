let inputM = document.getElementById("input")
let length = document.getElementById("inFeet")
let volume = document.getElementById("inliter")
let mass = document.getElementById("inkilo")

let num = 20;

inputM.addEventListener("keyup", ()=> {
    num = inputM.value;
    Length()
    Volume()
    Mass()
})
function Length(){
    let factor = 3.2808399
    let feet = (Math.round((num * factor) * 1000) / 1000)
    let meter = num / factor 
    length.innerText =  num +" meters = " + feet+ " feet | " + num + " feet = " + (Math.round(meter * 1000) / 1000) + " meters"
}

function Volume(){
    let factor = 0.264172052
    let liter = (Math.round((num * factor) * 1000) / 1000)
    let gallon = num / factor 
    volume.innerText =  num +" liters = " + liter+ " gallons | " + num + " gallons = " + (Math.round(gallon * 1000) / 1000) + " liters"  
}

function Mass(){
    let factor = 2.20462262
    let kilo = (Math.round((num * factor) * 1000) / 1000)
    let pound = num / factor 
    mass.innerText =  num +" kilos = " + kilo+ " pounds | " + num + " pounds = " + (Math.round(pound * 1000) / 1000) + " kilos"  
}
 Length()
 Volume()
 Mass()