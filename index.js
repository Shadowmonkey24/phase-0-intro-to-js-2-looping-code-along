// Code your solutions in this file
for (let age = 30; age < 40; age++) {

    console.log(`I'm ${age} years old. Happy birthday to me!`);

  } 

const gifts = ["teddy bear", "drone", 'doll'];

  function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {

        console.log(`Wrapped ${gifts [i]} and add a bow!`);

    }

    return gifts;
  }

  wrapGifts(gifts);

  function writeCards(names, event) {
    const messagesArray = []
    for (let i = 0; i < names.length; i++) {
        let greeting = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        messagesArray[i] = greeting;
    }
    return messagesArray;
}
const names = ["Ada", "Brendan", "Ali"];
const avent = "birthday";

function countDown(integer) {
    let counter = integer
    while (counter >= 0) {
        console.log(counter);
        counter--
    }
}