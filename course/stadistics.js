const BasicStadistics = {};

//MEAN
BasicStadistics.mean = (array) => {
    const number = array.length;
    const suma = array.reduce((valorAcumulado, nuevoValor) => valorAcumulado + nuevoValor);
    return suma/number;
};

// numbers = [1,3,5,7,9];
// console.log(mean(numbers));

//MEDIAN
BasicStadistics.isEven = (array) => {
    
    if(array.length % 2 === 0){
        return true;
    }else{
        return false;
    }
}

BasicStadistics.median = (array) => {

    const even = BasicStadistics.isEven(array);
    const number_items_array = array.length;

    array.sort((a, b) => a - b);
    console.log(array);

    if(!even) {

        middle = Math.ceil(number_items_array / 2);
        return array[middle - 1];

    }else{

        const middle_down = (number_items_array/2) - 1;
        const middle_up = (number_items_array/2);

        console.log(middle_down)

        return (array[middle_down] + array[middle_up]) / 2
    }

}

// numbers = [1,9,7,7,5];
// console.log(median(numbers));

BasicStadistics.fashion = (array) => {
    const list_count = {};

    for(let i = 0; i < array.length; i++){
        const item = array[i];

        if(list_count[item]){
            list_count[item] += 1;
        }else{
            list_count[item] = 1;
        }

    }

    const array_list = Object.entries(list_count);

    array_list.sort((a,b) => {
        return b[1] - a[1];
    });

    return array_list[0][0];

}

// numbers = [1,9,7,7,5,5,7,5,5]
// console.log(fashion(numbers));