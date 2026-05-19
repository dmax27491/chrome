const year = document.querySelector("#year");
const helloButton = document.querySelector("#helloButton");
const statusMessage = document.querySelector("#statusMessage");

year.textContent = new Date().getFullYear();

helloButton.addEventListener("click", () => {
  const messages = [
    "Hello, I am Chaudhary Nabin.",
    "I enjoy building clean frontend pages.",
    "HTML, CSS, and JavaScript are my current focus."
  ];

  const currentMessage = statusMessage.textContent.trim();
  const currentIndex = messages.indexOf(currentMessage);
  const nextIndex = currentIndex === -1 ? 0 : (currentIndex + 1) % messages.length;

  statusMessage.textContent = messages[nextIndex];
});
