// ========= problem  no 1  ==========

const reverseString=(string)=>{
    return string.split('').reverse().join('')
}


// =========  problem no 2  ==========

const countVowels=(string) => {
    return string.split('').reduce((acc,curr)=>{
        let vowel='aeiou'
        !!vowel.includes(curr.toLowerCase()) && acc++
        return acc
    },0)
}


// =========  problem no 3  ==========

const isPalindrome=(string)=>{
    return string===string.split('').reverse().join('')
}

// =========  problem no 4  ==========

const maxNumber=(arr)=>{
    return Math.max(...arr)
}


// =========  problem no 5  ==========

const removeDuplicate=(arr)=>{
    return [...new Set(arr)]
}

// =========  problem no 6  ==========

const sumAll=(arr)=>{
    return arr.reduce((acc,curr)=>acc+curr,0)
}


// =========  problem no 7  ==========

const allEvenNumber=(arr)=>{
    return arr.reduce((acc,curr)=>{
        !!(curr%2===0) && acc.push(curr)
        return acc
    },[])
}

// =========  problem no 8  ==========

const capitalizeFirstWord=(string) => {
    return string.split(' ').map((word)=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ')
}


