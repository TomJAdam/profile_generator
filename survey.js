// Survey app using the Node / command line
// ask users for input to questions to create a profile description


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`what is your name?`, (name) => {
  rl.question('What is your an activity you like doing?', (activity) => {
    rl.question('What music do you like?', (music) => {
      rl.question('What is your favourite food?', (food) => {
        rl.question('What is your super power?', (superPower) => {
      
          console.log(`Hi! My name is ${name} and I love to go ${activity}. My favourite music is ${music} and I would eat ${food} for every meal if I could! My official superpower is ${superPower} and if you don't watch out I'll use it on you!!`);
          rl.close();
        });
      });
    });
  });
});