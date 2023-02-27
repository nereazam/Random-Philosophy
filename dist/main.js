"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Función para llamar a la API y obtener una frase aleatoria
function getRandomQuote() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("https://raw.githubusercontent.com/nicolaskruger/quotes/master/philosophy.json");
        const data = yield response.json();
        return data[Math.floor(Math.random() * data.length)];
    });
}
// Función para mostrar la cita en la página
function displayQuote(quote) {
    const quoteEl = document.getElementById("quote");
    quoteEl.innerHTML = `
      <p><strong>"${quote.quote}"</strong></p>
      <p>- ${quote.author}, ${quote.source} (${quote.era}, ${quote.school})</p>
    `;
}
// Función para filtrar las citas por autor
function filterByAuthor(quotes, author) {
    return quotes.filter((quote) => quote.author.toLowerCase().includes(author.toLowerCase()));
}
// Función para mostrar varias citas en la página
function displayMultipleQuotes(quotes) {
    const quoteEl = document.getElementById("quote");
    quoteEl.innerHTML = "";
    quotes.forEach((quote) => {
        quoteEl.innerHTML += `
        <p><strong>"${quote.quote}"</strong></p>
        <p>- ${quote.author}, ${quote.source} (${quote.era}, ${quote.school})</p>
      `;
    });
}
// Obtén una cita aleatoria y muéstrala en la página
getRandomQuote().then(displayQuote);
// Filtro de citas por autor
const filterBtn = document.getElementById("filterBtn");
filterBtn.addEventListener("click", () => {
    const authorInput = document.getElementById("authorInput");
    const author = authorInput.value;
    getRandomQuote().then((quote) => {
        const filteredQuotes = filterByAuthor([quote], author);
        displayMultipleQuotes(filteredQuotes);
    });
});
