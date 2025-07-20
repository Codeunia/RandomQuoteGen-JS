const quotes = [
  "The best way to predict the future is to invent it. – Alan Kay",
  "Life is 10% what happens to us and 90% how we react to it. – Charles R. Swindoll",
  "Your time is limited, don’t waste it living someone else’s life. – Steve Jobs",
  "Whether you think you can or you think you can’t, you’re right. – Henry Ford",
  "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
  "Believe you can and you're halfway there. – Theodore Roosevelt",
];

const quoteElement = document.getElementById("quote");
const button = document.getElementById("generate-quote");

button.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteElement.textContent = `${quotes[randomIndex]}`;
});
