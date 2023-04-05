const btn = document.getElementById("btn");

function handleBtn(e) {
  console.log(this);
}

btn.addEventListener("click", handleBtn);
