// 10 Random Functions

// Function 1: Returns a random number between min and max
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function 2: Returns a random element from an array
function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Function 3: Returns a random boolean value
function getRandomBoolean() {
  return Math.random() < 0.5;
}

// Function 4: Returns a random color in hex format
function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

// Function 5: Generates a random string of specified length
function getRandomString(length) {
  const characters = 
'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * 
characters.length));
  }
  return result;
}

// Function 6: Returns a random date within a range
function getRandomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - 
start.getTime()));
}

// Function 7: Returns a random sentence from an array of sentences
function getRandomSentence(sentences) {
  return getRandomElement(sentences);
}

// Function 8: Returns a random object from an array of objects
function getRandomObject(objects) {
  return getRandomElement(objects);
}

// Function 9: Generates a random UUID (Universally Unique Identifier)
function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, 
function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

// Function 10: Executes a random console log message
function randomConsoleLog() {
  const messages = [
    'Hello!',
    'Random Message',
    'Testing 123',
    'This is a log',
    'JS Rocks!'
  ];
  console.log(getRandomElement(messages));
}

