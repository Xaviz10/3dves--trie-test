
function buildTrie(...words) {
    var objectTrie = {}
    if (words.length === 0) {
        return objectTrie
    } else if (words.length === 1 && words == "") {
        return objectTrie
    } else {
        for (let i = 0; i < words.length; i++) {

            let actualWord = words[i];
            var objectTest = {};

            for (let j = actualWord.length; j > 0; j--) {
                if (j >= 1 && j < actualWord.length) {
                    let newWord = actualWord.slice(0, j);
                    console.log("NewWord", newWord)
                    console.log('objevBefore', objectTest)
                    objectTest = { [newWord]: objectTest }
                    console.log('objevAfter', objectTest)

                } else if (j === actualWord.length) {
                    objectTest = { [actualWord]: null }
                }

            }

        }
        return objectTest

    }
}

function constructorTrie(word, object) {
    console.log(object)

    if (word.length >= 1) {
        let newWord = word.slice(0, word.length - 1)
        constructorTrie(newWord, { [word]: object })

    } else {
        console.log('final', object)
        return "object"
    }
}


