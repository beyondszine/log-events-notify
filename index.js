(function(){
    'use strict';

    const fs = require('fs');
    const readline = require('readline');    
    const notifier = require('node-notifier');
    const path = require('path');

    const rl = readline.createInterface({
        input: process.stdin,
        crlfDelay: Infinity
    });

    rl
    .on('line', (line) => {
        console.log(`Line from file: ${line}`);
        var attackAttempt=line.match("Failed password");
        console.log("attack attempt detected",attackAttempt);
        notifier.notify(
            {
              title: 'Attack Detected!',
              message: 'Unsuccessfull login attempt, Mr. User!',
              icon: path.join(__dirname, 'thuglife.jpg'), // Absolute path (doesn't work on balloons)
              sound: true, // Only Notification Center or Windows Toasters
              wait: false // Wait with callback, until user action is taken against notification
            },
            function(err, response) {
              // Response is response from notification
            }
          );
           
          notifier.on('click', function(notifierObject, options) {
            // Triggers if `wait: true` and user clicks notification
            console.log('clicked!');  
          });
           
          notifier.on('timeout', function(notifierObject, options) {
            // Triggers if `wait: true` and notification closes
            console.log('time out!');
        });

        // notifier.notify('Attack detected!');

    })
    .on('close', () => {
        console.log('Have a great day!');
        process.exit(0);
    });
})();