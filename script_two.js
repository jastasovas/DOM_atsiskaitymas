let myForm = document.createElement("form");
let firstInpt = document.createElement("input");
firstInpt.id = "firstInpt";
let secondInpt = document.createElement("input");
secondInpt.id = "secondInpt";
let submitBtn = document.createElement("button");
submitBtn.type = "submit";
submitBtn.id = "subm";
submitBtn.innerText = "Create LIST";
let results = document.createElement("div");
document.body.append(myForm, results);
myForm.append(firstInpt, secondInpt, submitBtn);

myForm.style.display = "flex";
myForm.style.flexDirection = "column";
myForm.style.width = "300px";
myForm.style.gap = "5px";
submitBtn.style.color = "purple";

document.querySelector("form").addEventListener("submit", myFunction);
function myFunction(event) {
  event.preventDefault();

  let inputForUnordered = firstInpt.value;
  let inputForOrdered = secondInpt.value;
  results.innerHTML = "";
  for (let i = 1; i <= inputForUnordered; i++) {
    let ulis = document.createElement("ul");
    ulis.innerText = "Unordered";
    results.append(ulis);
    for (let j = 1; j <= inputForOrdered; j++) {
      let olis = document.createElement("ol");
      olis.innerText = "ordered";
      ulis.append(olis);
    }
  }
  myForm.reset(); //Ar teisinga sitaip naudoti nuresetinti formos inputus????
}
