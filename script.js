let plusBtn = document.createElement("button");
let minusBtn = document.createElement("button");
let parag = document.createElement("p");
plusBtn.innerText = "Plus";
minusBtn.innerText = "Minus";
plusBtn.style.borderRadius = "15px";
plusBtn.style.background = "pink";
minusBtn.style.borderRadius = "15px";
minusBtn.style.background = "pink";
plusBtn.style.width = "100px";
minusBtn.style.width = "100px";
parag.style.fontSize = "30px";
parag.style.fontFamily = "Cursive";
let a = 0;
parag.innerText = a;
document.body.append(plusBtn, minusBtn, parag);

plusBtn.addEventListener("click", () => {
  a++;
  parag.innerText = a;
  changeColor(plusBtn, minusBtn);
});

minusBtn.addEventListener("click", () => {
  a--;
  parag.innerText = a;
  changeColor(minusBtn, plusBtn);
});

const changeColor = function (first, second) {
  first.style.background = "pink";
  second.style.background = "pink";
  if (a % 2 == 0) {
    first.style.background = "red";
    second.style.background = "pink";
  } else {
    first.style.background = "pink";
  }
};
