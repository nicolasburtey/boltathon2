var sha256 = require('js-sha256');
var bignum = require('bignum');

// parent create a random hash

// rand = sha256(Math.random().toString(2))
// r = bignum(rand, 16)

init = bignum('2bdb55e8376b8857bba7f8b9aa1bab0a0c4f1212944fa584308d37f563521141', 16)

// Question templace: 0, 1, 2 or 3

good_answers = [3, 0, 1, 3]

console.log(r.toString(16))


init_to_answer = (reponse) => {

}

// r1 = init.xor(bignum('3'))
// r2 = r1.xor(bignum('3').shiftLeft('2'))
