const addBtn = document.querySelector(".add-btn");

const mainDiv = document.querySelector(".main-div");
const innerItem = document.querySelector(".item1");
const inp = document.querySelector(".inputTodo");
const removeAllBtn = document.querySelector(".removeAll");
let removeBtnEl = document.querySelectorAll(".removebtn");
let items = null;
let itemCount = 1;

let itemDivs = [];
let removeButtons = [];
let checkButtons = [];

addBtn.addEventListener("click", addFunc);

function addFunc() {
  if (inp.value == "") return;

  let item = document.createElement("div");
  item.classList.add("item");

  item.innerHTML = `<button class="removebtn item-btn">
    <i class="fas fa-minus-circle"></i></button>
    <span class="toDoText">${inp.value}</span>
    <button class="fa-checkBtn"><i class="fas fa-check">
    </i></button>
    `;
  itemCount++;
  inp.value = "";
  mainDiv.appendChild(item);

  items = document.querySelectorAll(".item");
  itemDivs = [...items];
  checkButtons.push(itemDivs[itemDivs.length - 1].children[2]);
  removeButtons.push(itemDivs[itemDivs.length - 1].children[0]);
  //
  removeButtons.forEach((el) =>
    el.addEventListener("click", (e) => {
      e.target.parentElement.parentElement.remove();
    })
  );
  checkButtons.forEach((el) => {
    el.addEventListener("click", (e) => {
      if (
        e.target.parentElement.parentElement.style.textDecoration ===
        "line-through"
      ) {
        e.target.parentElement.parentElement.style.textDecoration = "none";
      } else {
        e.target.parentElement.parentElement.style.textDecoration =
          "line-through";
      }
    });
  });
}

removeAllBtn.addEventListener("click", () => items.forEach((e) => e.remove()));
