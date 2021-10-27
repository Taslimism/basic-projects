const URL = `https://type.fit/api/quotes`;
const container = document.querySelector('.container');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author')
const button = document.querySelector('.btn');
const span = document.querySelector('span');
let Quotes = [];

window.addEventListener('load', () => {
    console.log('0l0oad');
    createCard();
})

span.addEventListener('click', () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote.innerText} ${author.innerText}`
    window.open(twitterUrl, '_blank');
})

button.addEventListener('click', () => {
    createCard();
})

const getQuotes = async () => {
    try {
        const { data } = await axios(URL);
        data.forEach(quote => Quotes.push({
            author: quote.author,
            quote: quote.text,
        }))
    } catch (error) {
        console.log(error);
    }
}

const createCard = async () => {
    if (Quotes.length == 0)
        await getQuotes();

    const p = document.createElement('p');
    const index = Math.floor(Math.random() * Quotes.length);

    quote.innerText = Quotes[index].quote;
    author.innerText = `-${Quotes[index].author || 'Unknown'}`;

}






