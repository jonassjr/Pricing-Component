// Pega o elemento de input de alternância
const switchInput = document.getElementById("switch");

// Pega os elementos de preço mensal e anual
const month = document.querySelector(".monthly");
const anual = document.querySelector(".annually");

// Altera as cores dos elementos com base na alternância
switchInput.addEventListener("change", function () {
  // Altera a cor do texto do preço mensal e anual
  month.style.color = this.checked ? "var(--title-color)" : "var(--body-color)";
  anual.style.color = this.checked ? "var(--body-color)" : "var(--title-color)";

  // Altera os valores de preço com base na alternância
  const price1 = document.querySelector(".price1");
  const price2 = document.querySelector(".price2");
  const price3 = document.querySelector(".price3");

  price2.textContent = this.checked ? "60" : "5";
  price3.textContent = this.checked ? "120" : "10";

  // Altera o texto de cada plano com base na alternância
  const plans = document.querySelectorAll(".plan span");

  plans.forEach((plan) => {
    plan.textContent = this.checked ? "YEAR" : "MONTH";
  });
});

// Scroll Reveal Animation
const sr = ScrollReveal();

sr.reveal(".header", { origin: "top", distance: "30px", duration: 3000 });
sr.reveal(".wrapper", {
  origin: "bottom",
  distance: "20px",
  duration: 3000,
  delay: 400,
  interval: 200,
});
