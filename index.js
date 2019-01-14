(function(){
    'use strict';

    const fs = require('fs');
    const readline = require('readline');    
    const notifier = require('node-notifier');

    const rl = readline.createInterface({
        input: process.stdin,
        crlfDelay: Infinity
    });

    rl
    .on('line', (line) => {
        console.log(`Line from file: ${line}`);
        var attackAttempt=line.match("Failed password");
        console.log("attack attempt detected",attackAttempt);
        notifier.notify('Attack detected!');

    })
    .on('close', () => {
        console.log('Have a great day!');
        process.exit(0);
    });
})();