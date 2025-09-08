
let sentence = "This dinner is bad !"
let wordNot = sentence.indexOf("not")
let wordBad = sentence.indexOf("bad")

if (wordBad > wordNot && wordNot !== -1 && wordBad !== -1){
    let newSentence = sentence.slice(0,wordNot) + "good" + sentence.slice(wordBad+3)
    console.log(newSentence)
}else{
    console.log(sentence)
}




