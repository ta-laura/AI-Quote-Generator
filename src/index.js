function displayQuote(response) {
    new Typewriter("#quote", {
      strings: response.data.answer,
      autoStart: true,
      delay: 1,
      cursor: "",
    });
  }
  
  function generateQuote(event) {
    event.preventDefault();
  
    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "4b795e0a6901bo31b30c34079f3af3t6";
    let context =
      "You are a quote expert and love to write inspiring and fresh quotes. Please generate short quotes in basic HTML and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the quote. Sign the quote with 'SheCodes AI' inside a <strong> element at the end of the quote and NOT at the beginning and in the next line.";
    let prompt = `User instructions: Generate a quote about ${instructionsInput.value}`;
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  
    let quoteElement = document.querySelector("#quote");
    quoteElement.classList.remove("hidden");
    quoteElement.innerHTML = `<div class="generating">⏳ Generating a quote about ${instructionsInput.value}</div>`;
  
    axios.get(apiURL).then(displayQuote);
  }
  
  let quoteFormElement = document.querySelector("#quote-generator-form");
    quoteFormElement.addEventListener("submit", generateQuote);