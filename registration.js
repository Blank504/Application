/** @format */

console.log("This is a registration page");
const userInfoA = localStorage.getItem("userInfo");
if (userInfoA) {
  goTo("home.html");
}
const registrationform = document.getElementById("registration-form");
console.log(registrationform);

function getSelected(select) {
  let selectedValue = [];
  for (optionIndex in select.options) {
    if (select.options[optionIndex].selected) {
      selectedValue.push(select.options[optionIndex].value);
    }
  }
  return selectedValue;
}
registrationform.onsubmit = function (event) {
  event.preventDefault();
  console.log("I am triggered when submit is pressed");
  let name = document.getElementById("exampleInputEmail1").value;
  let interest = getSelected(document.getElementById("select"));
  let dob = document.getElementById("exampleInputEmail1").value;
  let darkmode = document.getElementById("exampleCheck1").checked;
  const data = {
    name: name,
    interest: interest,
    dob: dob,
    darkmode: darkmode,
  };
  console.log(data);
  localStorage.setItem("userInfo", JSON.stringify(data));
  goTo("home.html");
};
