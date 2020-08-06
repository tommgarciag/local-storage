// Variables

const form = document.querySelector('#formulario');
const tweetsList = document.querySelector('#lista-tweets');

// Event Listeners

eventListeners();

function eventListeners() {
    // when submit form
    form.addEventListener('submit', addTweet);
    // delete tweet (w/delegation)
    tweetsList.addEventListener('click', deleteTweet);
    // load local storage
    document.addEventListener('DOMContentLoaded' , loadTweet);
}

// Functions

function addTweet(event) {
    event.preventDefault();
    // read textarea value
    const tweet = document.querySelector('#tweet').value;
    // create delete btn
    const deleteBtn = document.createElement('a');
    deleteBtn.classList = 'borrar-tweet';
    deleteBtn.innerText = 'X';
    // create element and add content to list
    const li = document.createElement('li');
    li.innerText = tweet;
    li.appendChild(deleteBtn);
    // add li to DOM
    tweetsList.appendChild(li);  
    // add tweet to local storage
    addTweetLocalStorage(tweet);  
}

function deleteTweet(event) {
    event.preventDefault();
    if (event.target.className === 'borrar-tweet') {
        event.target.parentElement.remove(); 
        deleteTweetLocalStorage(event.target.parentElement.innerText);    
    }    
}

function loadTweet() {
    let tweets;
    tweets = getTweetsLocalStorage();
    
    tweets.forEach((tweet) => {
        // create delete btn
        const deleteBtn = document.createElement('a');
        deleteBtn.classList = 'borrar-tweet';
        deleteBtn.innerText = 'X';
        // create element and add content to list
        const li = document.createElement('li');
        li.innerText = tweet;
        li.appendChild(deleteBtn);
        // add li to DOM
        tweetsList.appendChild(li);
    });
}

function addTweetLocalStorage(tweet) {
    let tweets;
    tweets = getTweetsLocalStorage();
    // add new tweets
    tweets.push(tweet);    
    // convert array to string
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

function getTweetsLocalStorage() {
    let tweets;
    // check local storage values
    if (localStorage.getItem('tweets') === null) {
        tweets = [];
    } else {
        tweets = JSON.parse(localStorage.getItem('tweets'));
    }
    return tweets;
}

function deleteTweetLocalStorage(tweet) {
    let tweets;
    // delete X from tweet
    let tweetToDelete = tweet.substring(0, tweet.length -1);

    tweets = getTweetsLocalStorage();
    tweets.forEach((tweet, index) => {
        if (tweet === tweetToDelete) {
            tweets.splice(index, 1);
        }
    })

    localStorage.setItem('tweets', JSON.stringify(tweets));
}
