/**

Given an array of strings words, return the first palindromic string in the array. If there is no such string, return an empty string "".

A string is palindromic if it reads the same forward and backward.  
*/

/**
 * @param {string[]} words
 * @return {string}
 */

 //using helper function
var firstPalindrome = function(words) {
    let l = 0;
    while(l < words.length){
        if(words[l] === helper(words[l])){
            return words[l];
        } 
        l++;
    }
    
    // helper function
    function helper(word){
        let rev = '';
        for(let i  = word.length - 1; i >= 0; i--){
            rev += word[i];
        }
        return rev;
    }

    return '';
};

// using reverse
var firstPalindrome = function(words) {
    for (const word of words) {
        if (word === word.split('').reverse().join('')) return word;
    }
    
    return '';
};

//two pointer method
var firstPalindrome = function(words) {
    for(let i = 0; i < words.length; i++){
        let l = 0;
        let r = words[i].length - 1;

        while(l <= r + 1){
            if(words[i][l] !== words[i][r]){
                break;
            }
            else if(l >= r){
                return words[i]
            }
            else{
                l++;
                r--;
            }

        }

    }
    return '';
}
