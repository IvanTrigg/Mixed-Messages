// Mixed Messages   // What should we do tonight?

const toDo = ['Do some Coding', 'Study on CodeCademy', 'Play Guitar', 'Learn Music', 'Chill and watch a movie'];

const time = ['30 min', '60 min', '90 min', 'All Night'];

const randomToDo = Math.floor(Math.random() * toDo.length);
const randomTime = Math.floor(Math.random() * time.length);

console.log(randomToDo, randomTime);
// generate toDo

const toDoMsg = () => {
  console.log(`You should ${toDo[randomToDo]} for about ${time[randomTime]}`);
};

toDoMsg();