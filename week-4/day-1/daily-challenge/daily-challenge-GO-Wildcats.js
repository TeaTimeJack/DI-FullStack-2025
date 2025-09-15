const gameInfo = [
 {
   username: "john",
   team: "red",
   score: 5,
   items: ["ball", "book", "pen"]
 },
 {
   username: "becky",
   team: "blue",
   score: 10,
   items: ["tape", "backpack", "pen"]
 },
 {
   username: "susy",
   team: "red",
   score: 55,
   items: ["ball", "eraser", "pen"]
 },
 {
   username: "tyson",
   team: "green",
   score: 1,
   items: ["book", "pen"]
 },
];

const usernameArray = []

gameInfo.forEach(user =>{
    usernameArray.push(`${user.username}!`)
})
console.log(usernameArray);

const winners = []
gameInfo.forEach(user =>{
    if(user.score > 5){
        winners.push(user.username)
    }
});
console.log(winners);

const theSum = gameInfo.reduce((sum , user) => sum + user.score,0);
console.log(theSum);
