function SavedButton() {
  let wet = document.querySelector(".inputBox1").innerHTML;
  let set = document.querySelector(".inputBox2").innerHTML;
  localStorage.setItem(wet, set);
  console.log(localStorage.getItem(wet));
  set++;
}

let hcount = 0;
function historyButton() {
  hcount++;
  if (hcount % 2 === 1) {
    document.querySelector(".historycon").style.display = "block";
    let data = document.querySelector(".historycon"); // Added dot before "historycon"

    for (let p in localStorage) {
      let ans = localStorage.getItem(p);
      if (ans != null) {
        let h3 = document.createElement("h3");
        h3.setAttribute("class", "remove");
        h3.innerHTML = `${p} => Result = ${ans}`;
        console.log(h3);
        data.appendChild(h3);
      }
    }
  } else {
    document.querySelector(".historycon").style.display = "none";
    let rem = document.querySelectorAll(".remove"); // Changed querySelector to querySelectorAll
    for (let i = 0; i < rem.length; i++) {
      rem[i].remove();
    }
  }
}

function SearchButton() {
  event.preventDefault();
  let problem = document.getElementById("problemBar").value;
  let category = document.getElementById("categoryBar").value;

  let pro = fetch(`https://newton.vercel.app/api/v2/${category}/${problem}`); // Removed extra space after v2/
  pro
    .then((response) => {
      console.log(response.status);
      console.log(response.ok);
      return response.json();
    })
    .then((value) => {
      console.log(value);
      let input2 = value.result;
      document.querySelector(".inputBox2").innerHTML = input2;
    });
  document.querySelector(".inputBox1").innerHTML = category + ": " + problem; // Added colon (:) between category and problem
  let set = document.querySelector(".inputBox1").innerHTML; // Changed .value to .innerHTML
  let wet = document.querySelector(".inputBox2").innerHTML;
  localStorage.setItem(set, wet); // Corrected the order of parameters in localStorage.setItem
}

function delBtn() {
  document.querySelector(".inputBox1").innerHTML = "";
  document.querySelector(".inputBox2").innerHTML = "";
}
