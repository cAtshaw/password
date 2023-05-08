//Create random Password generator
//Characters needed create variable
//create function for onclick button
//generate two random passwords to display in boxes
//function for copy-on-click
//toggle "symbols" and "number" on/off
const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];


let randomOne = document.getElementById("random-one");
let randomTwo = document.getElementById("random-two");
let generatePassword = document.getElementById("generate");

generatePassword.addEventListener("click", function () {
  randomOne.textContent = ""
  randomTwo.textContent = ""
  randomOne.textContent = generateRandomPassword()
  randomTwo.textContent = generateRandomPassword()

  generateRandomPassword()
})

let passwordLimit = 12

function generateRandomPassword() {
  let myNewPassword = ""
  for (let i = 0; i < passwordLimit; i++) {
    let randomNumber = Math.floor(Math.random() * characters.length)
    myNewPassword += characters[randomNumber]
  }
  return myNewPassword
}


let copyTextOne = document.getElementById("random-one");
let copyOne = document.getElementById("copyone");

copyTextOne.addEventListener("click", () => {
  try {
    navigator.clipboard.writeText(copyOne.copyTextOne)
    alert("Copied to clipboard")
  } catch (error) {
    alert("Failed to copy")
  }
})







