const alphabet = [
  "a",
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
];

let res = document.getElementById("result");

const btn = document.getElementById("button");
// window.addEventListener("load", function () {
//   if (document.getElementById("button") != null) {
//     document.getElementById("button").addEventListener("click", function () {
//       let randomNumber = Math.floor(Math.random() * 24 + 1);
//       let newAlphabet = alphabet[randomNumber];
//       //   alert("Neuer Buchstabe: " + newAlphabet);
//       res.innerText += `<p>${newAlphabet}</p>`;
//       console.log(newAlphabet);
//     });
//   }
// });

btn.addEventListener("click", () => {
  let randomNumber = Math.floor(Math.random() * 26 + 1);
  let newAlphabet = alphabet[randomNumber];
  // alert("Neuer Buchstabe: " + newAlphabet);
  res.innerHTML += `<p>${newAlphabet}</p>`;
});
