function buildTrie(...words) {
    let objectTrie = {}
    console.log('array', words)
    if (words.length === 0) {
        return objectTrie
    } else if (words.length === 1 && words == "") {
        return objectTrie
    } else {
        let a = words.map(item => constructorTrie(item, null))
        console.log('a', a)
    }
}

const constructorTrie = (word, object) => {
    console.log(object)

    if (word.length >= 1) {
        let newWord = word.slice(0, word.length - 1)
        constructorTrie(newWord, { [word]: object })

    } else {
        console.log('final', object)
        return object
    }
}


