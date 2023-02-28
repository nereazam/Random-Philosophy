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
function getRandomQuote() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("https://philosophy-quotes-api.glitch.me/quotes");
        const data = yield response.json();
        return data[Math.floor(Math.random() * data.length)];
    });
}
function displayQuote(quote) {
    const quoteEl = document.getElementById("quote");
    quoteEl.innerHTML = `
    <p><strong>"${quote.quote}"</strong></p>
    <p>- ${quote.source}, ${quote.philosophy}</p>
  `;
}
const quoteBtn = document.getElementById("quoteBtn");
quoteBtn.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
    const quote = yield getRandomQuote();
    displayQuote(quote);
}));
