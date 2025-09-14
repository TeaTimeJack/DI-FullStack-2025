// first - time

for (let i = 1; i <= 6; i++) {
    starString="* "
    console.log(starString.repeat(i))
}

// second time
for (let i = 0; i <= 6; i++) {
    let stars = ""
    for (let j =1; j <=i; j++) {
        stars += '* '
    }
    console.log(stars)
}