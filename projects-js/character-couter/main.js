const textarea = document.querySelector("textarea");
const count = document.querySelector(".count");

function countLetters() {
  count.innerText = `${textarea.value.length}`;
}
// textarea.onkeyup = function () {
//   countLetters();
// };

// textarea.addEventListener("keyup", countLetters);

textarea.addEventListener("keyup", () => {
  count.innerText = `${textarea.value.length}`;
});
