// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const modal = document.querySelector("#modal")
modal.className = "hidden"

document.body.addEventListener ('click', event => {
  if (event.target.matches('.like-glyph') && !event.target.matches('.activated-heart')) {
    const heart = event.target
    mimicServerCall()
    .then(obj => {
      heart.textContent = FULL_HEART
      heart.classList.add('activated-heart')
    })
    .catch(err => {
      modal.classList.toggle('hidden')
      setTimeout(() => {
        modal.classList.toggle('hidden')
      }, 5000)
    })
  } else if (event.target.textContent == FULL_HEART) {
    const heart = event.target
    heart.classList.toggle('activated-heart')
    heart.textContent = EMPTY_HEART
  }
})

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
