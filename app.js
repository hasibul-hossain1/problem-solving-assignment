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

// =========  problem no 5  ==========

const sumAll=(arr)=>{
    return arr.reduce((acc,curr)=>acc+curr,0)
}





