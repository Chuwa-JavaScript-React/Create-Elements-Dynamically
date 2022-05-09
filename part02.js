const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];

//===================================================================

const part02Div = document.querySelector("div.part02");

// create order list and unorder list
let orderList = document.createElement("ol");
orderList.className = "orderedList";
let unorderList = document.createElement("ul");
unorderList.className = "unorderedList";

// create list elements
list.forEach((element) => {
  let listElement1 = document.createElement("li");
  listElement1.innerText = element;
  let listElement2 = document.createElement("li");
  listElement2.innerText = element;
  orderList.append(listElement1);
  unorderList.append(listElement2);
});

// create the title
let listTitle1 = document.createElement("p");
listTitle1.textContent = "An ordered technologies list";
let listTitle2 = document.createElement("p");
listTitle2.textContent = "An unordered technologies list";

// append the order list and unorder list to part 2 div
part02Div.append(listTitle1, orderList, listTitle2, unorderList);
