// fetch('https://reqres.in/api/users?per_page=12')
//   .then(response => response.json())
//   .then((data) => let firstName = data.map(data => data.first_name + ' ')
// // return console.log(firstName));

const url = 'https://reqres.in/api/users?per_page=12';

fetch(url)
  .then((response) => {
    response;
    return response.json();
  })
  .then((result) => {
    const users = result.data;

    console.log('-----------');
    console.log('Пункт №1:');
    console.log('-----------');
    console.log(users);

    console.log('-----------');
    console.log('Пункт №2:');
    console.log('-----------');
    users.forEach(element => {
      console.log(element.last_name);
    });

    console.log('-----------');
    console.log('Пункт №3:');
    console.log('-----------');
    users.filter(item => item.last_name[0].toUpperCase() === 'F').forEach(element => {
      console.log(element);
    });

    console.log('-----------');
    console.log('Пункт №4:');
    console.log('-----------');
console.log(users.reduce((acc, item) => acc + item.first_name + " " + item.last_name +', ',
  "Наша база содержит данные следующих пользователей:"));

    console.log('-----------');
    console.log('Пункт №5:');
    console.log('-----------');
// так как данные однотипны выводим ключи первого пользователя
    const firstUser = users[0]
    Object.keys(firstUser).forEach((keyName) => {
      console.log(keyName);
    });
  });

