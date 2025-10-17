
export const plus = (a,b) =>{
    return a+b;
}

export const multi = (a,b) =>{
    return a*b
}

export const minus = (a,b) =>{
    return a-b
}

export const divide = (a,b) =>{
    if (b === 0 ) {
        console.log('cannot divide 0'); 
        return null
    }
    return a/b
}

