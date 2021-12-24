/** @format */

const userInfo = localStorage.getItem("userInfo");

console.log(window.location.href);

function goTo(fileName) {
  let link = window.location.href;
  link = link.split("/");
  let x = link.pop();
  if (x === fileName) {
    return;
  }
  let newlink = link.join("/");
  newlink = newlink + "/" + fileName;
  window.location.href = newlink;
}

if (!userInfo) {
  goTo("registration.html");
}

if (userInfo) {
  const logout = document.getElementById("logout");
  logout.innerHTML = '<p class = "nav-link"> logout </p>';
  logout.onclick = function () {
    localStorage.removeItem("userInfo");
    goTo("registration.html");
  };
}
