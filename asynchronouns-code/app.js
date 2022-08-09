let favNumber = 7;
let baseURL = "http://numbersapi.com";


async function getAFact() {
  let data = await $.getJSON(`${baseURL}/${favNumber}?json`);
}
getAFact();


const favNumbers = [7, 11, 22];
async function getMult() {
  let data = await $.getJSON(`${baseURL}/${favNumbers}?json`);
}
getMult();


async function displayFacts() {
  let facts = await Promise.all(
    Array.from({ length: 4 }, () => $.getJSON(`${baseURL}/${favNumber}?json`))
  );
  facts.forEach(data => {
    $('body').append(`<p>${data.text}</p>`);
  });
}
displayFacts();
