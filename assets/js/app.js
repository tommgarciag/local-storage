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
}

function deleteTweet(event) {
    event.preventDefault();
    if (event.target.className === 'borrar-tweet') {
        event.target.parentElement.remove();      
    }    
}