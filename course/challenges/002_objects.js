// En este desafío debes convertir las llaves y valores de un objeto en propiedades (id y name) de un objeto dentro de un array.

// Input

// const obj = {
//   123: 'Juanito Alcachofa',
//   456: 'Juanita Alcaparra',
// };

// solution(obj);

// Output

// [
//   {
//     id: "123",
//     name: 'Juanito Alcachofa',
//   },
//   {
//     id: "456",
//     name: 'Juanita Alcaparra',
//   },
// ]

// console.log(obj_array.length, obj_array[0].length);
// array.push({id: obj_array[0][0],name: obj_array[0][1]});
// array.push({id: obj_array[1][0],name: obj_array[1][1]});

const obj = {
    123: 'Juanito Alcachofa',
    456: 'Juanita Alcaparra',
};

const obj_array = Object.entries(obj);

const array = obj_array.map(item => {
    return {id: item[0],name: item[1]};
});  

console.log(array);