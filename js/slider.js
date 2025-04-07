let isSwapped = false;

function swapCards() {
  const card1 = document.getElementById("card1");
  const card2 = document.getElementById("card2");

  if (isSwapped) {
    card1.style.transform = "translateX(0)";
    card1.style.height = "450px";
    card2.style.height = "400px";
    card2.style.transform = "translateX(0)";
  } else {
    card1.style.transform = "translateX(350px)";
    card1.style.height = "400px";
    card2.style.height = "450px";
    card2.style.transform = "translateX(-350px)";
  }

  isSwapped = !isSwapped;
}

document.getElementById("leftBtn").addEventListener("click", swapCards);
document.getElementById("rightBtn").addEventListener("click", swapCards);
