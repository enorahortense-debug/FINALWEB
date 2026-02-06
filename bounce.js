

const title = document.querySelector(".bounce-title");
const words = title.textContent.split(" ");

title.textContent = "";

words.forEach((word, wIndex) => {
  const wordSpan = document.createElement("span");
  wordSpan.style.whiteSpace = "nowrap"; // keeps letters of a word together

  [...word].forEach((letter, i) => {
    const span = document.createElement("span");
    span.textContent = letter;
    span.style.display = "inline-block";
    span.style.animationDelay = (i * 0.08 + wIndex * 0.2) + "s";
    span.classList.add("bounce-letter");
    wordSpan.appendChild(span);
  });

  title.appendChild(wordSpan);
  title.appendChild(document.createTextNode(" "));
});



