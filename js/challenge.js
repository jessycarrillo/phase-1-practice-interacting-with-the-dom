//Leave comments and show it in the "Comment" section

document.querySelector("#comment-form").addEventListener('submit', (e) => {
    e.preventDefault()
    const commentForm = e.target
    handleLeaveComment(commentForm)
});

function handleLeaveComment(commentForm) {
    const newComment = document.createElement("p"); 
    newComment.textContent = commentForm.elements["comment-input"].value; 
    document.querySelector("#list").appendChild(newComment); 
}
// This is the timer that updates every second   
let counter = 0;
function displayCounter(){
  document.querySelector("#counter").textContent = counter; 
}
function incrementCounter() {
  counter++;
  displayCounter();
}
let intervalID = setInterval(incrementCounter, 1000);

function displayCounter(){
  document.querySelector("#counter").textContent = counter
}
// Manually increment the counter using the plus button.
document.querySelector("#plus").addEventListener('click', () => {
  incrementCounter();
});

// Manually decrement the counter using the minus button.
function decrementCounter() {
  counter--;
  displayCounter();
}

document.querySelector("#minus").addEventListener('click', () => {
    decrementCounter(); 
  });

//   "Like" an individual number of the counter. I should see the count of the number of "likes" associated with that number displayed.
let likes = {};
document.querySelector("#heart").addEventListener('click', () => {
  let liId = `counter-${counter}`
  if (likes[counter] === undefined) {
    likes[counter] = 1;
    const currentLikes = likes[counter];
    let printLikes = document.createElement("li");
    printLikes.setAttribute("id", liId)
    printLikes.textContent = `${counter} has been liked ${currentLikes} time`;document.querySelector(".likes").appendChild(printLikes);
  } else {
    likes[counter]++;
    const currentLikes = likes[counter];
    let printLikes = document.getElementById(liId)
    printLikes.textContent = `${counter} has been liked ${currentLikes} times`;
    document.querySelector(".likes").appendChild(printLikes);
  }
});
// // pause the counter/switch the label on the button from "pause" to "resume"/disable all buttons except the pause button
//Click the "resume" button to restart the counter and re-enable the buttons.

document.querySelector("#pause").addEventListener('click', () => {
    const pauseButton = document.querySelector("#pause")
    if (pauseButton.textContent === " pause "){
      pauseButton.textContent = " resume "
      document.querySelectorAll('button').forEach((el) => el.disabled = true);
      pauseButton.disabled = false;
      clearInterval(intervalID);
    } else {
      pauseButton.textContent = " pause "
      document.querySelectorAll('button').forEach((el) => el.disabled = false);
      intervalID = setInterval(incrementCounter, 1000);
    }
});