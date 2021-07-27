function myFunction3() {
  const myNodelist = document.querySelectorAll("img");
  for (let i = 0; i < myNodelist.length; i++) {
    myNodelist[i].style.display = "none";
  }
}
