const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? YOu can provide a nickname:) ", (name) => {
  rl.question("What's an activity you like doing? ", (favAct) => {
    rl.question(`What do you listen to while doing ${favAct}? `, (favSong) => {
      rl.question("Which meal is your favourite? (eg. dinner, brunch, etc) ", (favMeal) => {
        rl.question("What's your favourite thing to eat for that meal? ", (favFood) => {
          rl.question("Which sport is your absolute favourite? ", (favSport) => {
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (superpower) => {

              console.log(`${name} loves listening to ${favSong} while ${favAct}, eating ${favFood} for ${favMeal}. ${name} prefers ${favSport} over any other sport, and is amazing at ${superpower}.`);

              rl.close();

            });

          });

        });

      });

    });

  });

});