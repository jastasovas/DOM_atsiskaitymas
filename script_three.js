// const makeTable = () => {
//   const info = JSON.parse(localStorage.getItem("mySaving"));
//   const tbody = document.createElement("tbody");
//   const tasky = document.createElement("td");
//   tasky.textContent = info.myTask;

//   const prior = document.createElement("td");
//   prior.textContent = info.myPriority;

//   const tr = document.createElement("tr");
//   tr.append(tasky, prior);
//   tbody.append(tr);
//   document.body.append(tbody);
// };

document.querySelector("form").addEventListener("submit", myFunc);
function myFunc(event) {
  event.preventDefault();
  const myTask = document.getElementById("tasks").value;
  const myPriority = document.getElementById("selection").value;
  const savingTask = [
    {
      task: "",
      priority: "",
    },
  ];

  savingTask.push({ task: myTask, priority: myPriority });
  localStorage.setItem("mySaving", JSON.stringify(savingTask));
}

// makeTable();
