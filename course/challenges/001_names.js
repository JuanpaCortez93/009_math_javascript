// En este desafío vas a recibir un array de objetos. Cada objeto representa a un usuario. 
// Debes encontrar al usuario con cierto ID y retornar su nombre. En caso de no existir, debes retornar false.

// Input

// const users = [];
// users.push({ id: 123, name: 'Juanito Alcachofa' });
// users.push({ id: 456, name: 'Juanita Alcaparra' });

// solution(users, 456);
// solution(users, 999);

// Output

// Juanita Alcaparra
// false

const users = [];
users.push({id: 123, name: 'Juanito Alcachofa' });
users.push({id: 456, name: 'Juanita Alcaparra' });

// const user = users.find(user => {
//     return user.id === 123;
// });

// console.log(user.name);

export function solution(users, id) {
    // Tu código aquí
  
    const user = users.find(user => {
      return user.id === id;
    });
  
    if (user) {
      return user.name;
    } else {
      return false;
    }
  }
  