let inputNumber = document.getElementById("input-number")
let lengthelconversion = document.getElementById("length-conversion")
let convertel = document.getElementById("convert-el")
let volumeconversion = document.getElementById("volume-conversion")
let massconversion = document.getElementById("mass-conversion")

convertel.addEventListener("click", function () {
    let value = inputNumber.value
    let firstvalue = value * 3.28084
    let secondvaule = value / 3.28084
    console.log(`${value} meters = ${firstvalue.toFixed(2)}feets | ${value}feet = ${secondvaule.toFixed(2)} meters`)
    let convertedvalue = `${value} meters = ${firstvalue.toFixed(2)}feets | ${value}feet = ${secondvaule.toFixed(2)} meters`
    lengthelconversion.innerHTML = `<div> ${convertedvalue} </div>`
})

convertel.addEventListener("click", function () {
    let value = inputNumber.value
    let firstvalue = value / 3.785
    let secondvaule = value * 3.785
    console.log(`${value} liter = ${firstvalue.toFixed(2)}gallons | ${value}gallon = ${secondvaule.toFixed(2)} liters`)
    let convertedvalue = `${value} liters = ${firstvalue.toFixed(2)}gallons | ${value}gallon = ${secondvaule.toFixed(2)} liters`
    volumeconversion.innerHTML = `<div> ${convertedvalue} </div>`
})

convertel.addEventListener("click", function () {
    let value = inputNumber.value
    let firstvalue = value * 2.205
    let secondvaule = value / 2.205
    console.log(`${value} Mass = ${firstvalue.toFixed(2)}pounds | ${value}pounds = ${secondvaule.toFixed(2)} kilos`)
    let convertedvalue = `${value} kilos = ${firstvalue.toFixed(2)}pounds | ${value}pounds = ${secondvaule.toFixed(2)} kilos`
    massconversion.innerHTML = `<div> ${convertedvalue} </div>`
})


// * another way to create div inside massconversion instead of innerhtml
// !  function anotherway() {
//!   let convert = document.createElement("div")
//!   convert.innerHTML = convertedvalue
//!   massconversion.append(convert)
//! hello
//!}
// * these is my first change on my first github project