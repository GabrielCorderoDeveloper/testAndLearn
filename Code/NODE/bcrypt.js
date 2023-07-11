//npm i bcrypt

const bcrypt = require('bcrypt');

const password = '1234safe';

bcrypt.hash(password, 5, function(err, hash) {
    console.log(hash);

    bcrypt.compare('pass67', hash, function(err, res) {
        console.log(res);
    })
})