var sha256 = require('js-sha256');
var bignum = require('bignum');

// parent create a random hash

// rand = sha256(Math.random().toString(2))
// r = bignum(rand, 16)

init_hash = bignum('2bdb55e8376b8857bba7f8b9aa1bab0a0c4f1212944fa584308d37f563521141', 16)

// Question template: 0, 1, 2 or 3, only 2 bits/answer.
good_answers = [3, 0, 1, 3]

init_to_answer = (response, hash) => {
    calculated_hash = hash

    for (var i = 0; i < response.length; i++) {
        // console.log(myStringArray[i]);
        calculated_hash = calculated_hash.xor(bignum(response[i]).shiftLeft(i * 2))        
        console.log(calculated_hash)
    }

    return calculated_hash
}

preimage = init_to_answer(good_answers, init_hash)

console.log(init_hash.toString(16))
console.log(preimage.toString(16))