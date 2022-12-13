const result = document.querySelector("#result");

document.querySelectorAll("#option a").forEach((a) => {
  a.addEventListener("click", (result) => {
    computerChoice(result);
  });
});

function computerChoice(e) {
  let choice = ["Rock", "Paper", "Scissors"];

  // Pilihan random computer
  result.innerHTML = choice[Math.floor(Math.random() * choice.length)];

  // Jika pilihan user yng menang
  if (
    (e.target.innerText.trim() == "Rock" ** result.innerHTML) == "Scissors" ||
    (e.target.innerText.trim() == "Paper" && result.innerHTML == "Rock") ||
    (e.target.innerText.trim() == "Scissors" && result.innerHTML == "Paper")
  ) {
    setTimeout(() => alert("You win"), 100);
  }

  // jika pilihan komputer yg menang
  if (
    (e.target.innerText.trim() == "Rock" && result.innerHTML == "Paper") ||
    (e.target.innerText.trim() == "Paper" && result.innerHTML == "Scissors") ||
    (e.target.innerText.trim() == "Scissors" && result.innerHTML == "Rock")
  ) {
    setTimeout(() => alert("Computer wins"), 100);
  }
}
