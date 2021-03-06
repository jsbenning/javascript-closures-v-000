const app = "I don't do much."

unction fatBastard(meal) {
  function whatsForDinner() { // whatsForDinner() is an inner function, a closure
    if (!meal) { // whatsForDinner() uses argument provided to the parent function 
      console.log('My belly is empty. Woe is me.');
    } else if (meal === 'Mini-Me') {
      console.log('The wee man is in my belly!');
    } else {
      console.log(`I'm eatin' a bit of ${meal}! Burp.`);
    }
  }
 
  function digest() { // digest() is an inner function, a closure
    meal = undefined; // digest() uses argument provided to the parent function 
  }
 
  return {
    whatsForDinner,
    digest
  };
}