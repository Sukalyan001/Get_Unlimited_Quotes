const quotes = document.getElementById("quotes");
const author = document.getElementById("author");
const getnew = document.getElementById("getnew");
const tweeter = document.getElementById("tweeter");

let realData = "";
let speechData = "";
const tweetNow = () => {
    let postTweet = `https://twitter.com/intent/tweet?text=${speechData.text} ${speechData.author}`;
    window.open(postTweet);
}

const getNewSpeech = () => {
    let number = Math.floor(Math.random() * 200);
    speechData = realData[number];
    quotes.innerText = `${speechData.text}`;
    speechData.author == null
        ? (author.innerText = "Unknown")
        : (author.innerText = `-${speechData.author}`);
};
const getQuotes = async () => {
    const api = "https://type.fit/api/quotes";
    try {
        let data = await fetch(api);
        realData = await data.json();
        getNewSpeech();
        // console.log(realData[0].text);
        // console.log(realData[0].author);
    } catch (error) {
    }
};
tweeter.addEventListener("click", tweetNow)
getnew.addEventListener("click", getNewSpeech);
getQuotes();
