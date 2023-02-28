interface Quote {
  source: string;
  quote: string;
  philosophy: string;
}

async function getRandomQuote(): Promise<Quote> {
  const response = await fetch("https://philosophy-quotes-api.glitch.me/quotes");
  const data = await response.json();
  return data[Math.floor(Math.random() * data.length)];
}

function displayQuote(quote: Quote) {
  const quoteEl = document.getElementById("quote");
  quoteEl!.innerHTML = `
    <p><strong>"${quote.quote}"</strong></p>
    <p>- ${quote.source}, ${quote.philosophy}</p>
  `;
}

const quoteBtn = document.getElementById("quoteBtn");
quoteBtn!.addEventListener("click", async () => {
  const quote = await getRandomQuote();
  displayQuote(quote);
});


