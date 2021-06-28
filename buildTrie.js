
function buildTrie(...words) {
    var objectTrie = {}
    if (words.length === 0) {
        return objectTrie
    } else if (words.length === 1 && words == "") {
        return objectTrie
    } else {
        for (let i = 0; i < words.length; i++) {

            let currentWord = words[i];
            var objectCurrentWord = {};

            for (let j = currentWord.length; j > 0; j--) {

                if (j >= 1 && j < currentWord.length) {

                    let newWord = currentWord.slice(0, j);
                    objectCurrentWord = { [newWord]: objectCurrentWord }

                } else if (j === currentWord.length) {

                    objectCurrentWord = { [currentWord]: null }
                }
            }
            
        }
        return objectCurrentWord

    }
}


// function buildTrie(...words) {
//     var objectTrie = {}
//     if (words.length === 0) {
//         return objectTrie
//     } else if (words.length === 1 && words == "") {
//         return objectTrie
//     } else {
//         for (let i = 0; i < words.length; i++) {

//             let currentWord = words[i];

//             var objectCurrentWord = {};

//             for (let j = currentWord.length; j > 0; j--) {
//                 console.log(j)
//                 var newWord = currentWord
//                 console.log(currentWord.length)
//                 if (j >= 1 && j < currentWord.length) {

//                     newWord = currentWord.slice(0, j);
//                   if(j!==1){
//                     objectCurrentWord = { [newWord]:objectCurrentWord }
//                   }

//                 } else if (j === currentWord.length) {

//                     objectCurrentWord = { [currentWord]: null }
//                 }
//                 console.log(objectCurrentWord)
//             }
//             if(i === 0 ) {
//               if(objectCurrentWord[newWord] === null) {
//                 objectTrie = objectCurrentWord
//               } else {
//                 objectTrie = objectCurrentWord
//               }
              
//             }else{
//               objectTrie[newWord] = objectCurrentWord
//             }
            
//         }
//         return objectTrie

//     }
// }


