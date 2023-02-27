// Define la interfaz de la respuesta de la API
interface Quote {
    author: string;
    quote: string;
    source: string;
    era: string;
    school: string;
  }
  
  // Función para llamar a la API y obtener una frase aleatoria
  async function getRandomQuote(): Promise<Quote> {
    const response = await fetch(
      "https://raw.githubusercontent.com/nicolaskruger/quotes/master/philosophy.json"
    );
    const data = await response.json();
    return data[Math.floor(Math.random() * data.length)];
  }
  
  // Función para mostrar la cita en la página
  function displayQuote(quote: Quote) {
    const quoteEl = document.getElementById("quote");
    quoteEl!.innerHTML = `
      <p><strong>"${quote.quote}"</strong></p>
      <p>- ${quote.author}, ${quote.source} (${quote.era}, ${quote.school})</p>
    `;
  }
  
  // Función para filtrar las citas por autor
  function filterByAuthor(quotes: Quote[], author: string): Quote[] {
    return quotes.filter((quote) => quote.author.toLowerCase().includes(author.toLowerCase()));
  }
  
  // Función para mostrar varias citas en la página
  function displayMultipleQuotes(quotes: Quote[]) {
    const quoteEl = document.getElementById("quote");
    quoteEl!.innerHTML = "";
    quotes.forEach((quote) => {
      quoteEl!.innerHTML += `
        <p><strong>"${quote.quote}"</strong></p>
        <p>- ${quote.author}, ${quote.source} (${quote.era}, ${quote.school})</p>
      `;
    });
  }
  
  // Obtén una cita aleatoria y muéstrala en la página
  getRandomQuote().then(displayQuote);
  
  // Filtro de citas por autor
  const filterBtn = document.getElementById("filterBtn");
  filterBtn!.addEventListener("click", () => {
    const authorInput = document.getElementById("authorInput") as HTMLInputElement;
    const author = authorInput.value;
    getRandomQuote().then((quote) => {
      const filteredQuotes = filterByAuthor([quote], author);
      displayMultipleQuotes(filteredQuotes);
    });
  });
  