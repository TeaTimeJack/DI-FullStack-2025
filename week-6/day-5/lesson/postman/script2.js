


function startGame() {
  fetch("http://localhost:3069/emojis")
  .then((res) => res.json())
  .then((data) => {
    // console.log(data);
    const emojiChoices = []
    while (emojiChoices.length < 4) {
      let newEmoji = getRandomEmoji(data);
      while(emojiChoices.includes(newEmoji)){
        newEmoji = getRandomEmoji(data);
      }
      emojiChoices.push(newEmoji)
    }
    const realEmojiIndex = Math.floor(Math.random() * emojiChoices.length);
    // console.log(emojiChoices);
    fetch("http://localhost:3069/score")
    .then((res) => res.json())
    .then((score) => {
        render(emojiChoices,realEmojiIndex,score);
    })
    
  });
}

function getRandomEmoji(emojiArr) {
  const randomIndex = Math.floor(Math.random() * emojiArr.length);
  return emojiArr[randomIndex] 
}

const render = (emojiChoices,realIndex,score) => {
  document.getElementById("score").innerHTML = `Score: ${score}`
  document.getElementById("startGameBtn").style.display = "none"
  let html = ''
  for (let i = 0; i < emojiChoices.length; i++) {
    const item = emojiChoices[i]
    if(i === realIndex){
      html += `<button onclick="pickEmoji(${true})">${item.name}</button>`
    }else{
      html += `<button onclick="pickEmoji(${false})">${item.name}</button>`
    }
  }

  document.getElementById("choiceBtnDiv").innerHTML =
   `<h2>Click the right name of this Emoji:${emojiChoices[realIndex].emoji}</h2>`
    + html;

  
};

function pickEmoji(bool) {
  if (bool) {
    const correctSound = new Audio("./correct-6033.mp3")
    correctSound.play();
      ++score
    // console.log("Correct");
  }else{
    const worngSound = new Audio("./wrong-47985.mp3")
    worngSound.play();
    score = 0
    // console.log("Wrong");
  }
  startGame()
}




function addScore(e) {
  e.preventDefault();

  const name = e.target.name.value;

  console.log(email, username, name);

  fetch("http://localhost:3001/users", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ name, username, email }),
  })
    .then((res) => res.json())
    .then((data) => {
      render(data);
    });
}