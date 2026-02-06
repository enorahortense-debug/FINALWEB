const title = document.querySelector(".twilight-title");
const text = title.textContent;
title.textContent = "";

[...text].forEach((letter, i) => {
    const span = document.createElement("span");
    span.textContent = letter === " " ? "\u00A0" : letter;
    span.style.animationDelay = `${i * 0.08}s`;
    title.appendChild(span);
});
