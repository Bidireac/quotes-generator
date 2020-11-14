const button = document.querySelector('button');
const quote = document.getElementById('display');
const author = document.getElementById('author');
let apiData;

fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    apiData = data;
  })
  .catch((err) => {
      console.log('Something went wrong with fetch!');
      console.log(err);
  });

const randomQuote = () => {
    const min = 0;
    const max = 1643;
    return Math.floor(Math.random() * (max - min) + min);
}

button.addEventListener('click', () => {
    let pairDisplay = randomQuote();
    let autor = (apiData[pairDisplay].author == null ? 'Unknown Author' : apiData[pairDisplay].author);
    quote.innerHTML = `
    <i class="fas fa-quote-left quote"></i>${apiData[pairDisplay].text}
    `;
    author.innerHTML = `<i class="fas fa-pen-nib pen"></i>${autor}`;
});
