

usersInput = "Hello, World, in, a, frame"
// usersInput = prompt("Type any sentece and seperat each word with a comma")
usersArray = usersInput.split(", ")

frameSring = ""
for (let i = 0; i < usersArray.length+4; i++) {
    frameSring +="*"
}
console.log(frameSring)
for (let i = 0; i < usersArray.length; i++) {
    const word = usersArray[i];
    wordInFrame = "* "
    wordInFrame +=word
    while (wordInFrame.length !== usersArray.length+3) { 
        wordInFrame+=" "
    }
    wordInFrame+="*"
    console.log(wordInFrame)
}
console.log(frameSring)