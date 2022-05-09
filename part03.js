const dropDownList = [
  { value: "newark", content: "Newark" },
  { value: "santaClara", content: "Santa Clara" },
  { value: "unionCity", content: "Union City" },
  { value: "albany", content: "Albany" },
  { value: "dalyCity", content: "Daly City" },
  { value: "sanJose", content: "San Jose" },
];

const part03Div = document.querySelector("div.part03");

// create select element
let selectList = document.createElement("select");
selectList.name = "cities";
selectList.id = "cities";

// create options
dropDownList.forEach((ele) => {
  let option = document.createElement("option");
  option.value = ele.value;
  option.text = ele.content;
  selectList.append(option);
});

// append select to part03 div
part03Div.append(selectList);
