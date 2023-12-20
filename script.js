let plusBtn = document.createElement("button");
let minusBtn = document.createElement("button");
let parag = document.createElement("p");
plusBtn.innerText = "Plus";
minusBtn.innerText = "Minus";
plusBtn.style.borderRadius = "15px";
minusBtn.style.borderRadius = "15px";
plusBtn.style.width = "100px";
minusBtn.style.width = "100px";
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

const changeColor = function (aa, bb) {
  aa.style.background = "none";
  bb.style.background = "none";
  if (a % 2 == 0) {
    aa.style.background = "red";
    bb.style.background = "none";
  } else {
    aa.style.background = "none";
  }
};
