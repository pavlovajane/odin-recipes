function multiply(a, b) {
return Number(a) + Number(b)
}

function capitalize(str) {
    capitalized = str.charAt(0).toUpperCase() + str.slice(1)
    return capitalized
}

function lastletter(str) {
    // returns the very last letter of the string
    length = str.length
    return(str.slice(length-1))
}

console.log(lastletter("hohohoh"))