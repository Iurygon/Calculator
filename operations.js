const operations = {
    sum: function(value1, value2){
        return parseInt(value1) + parseInt(value2)
    },
    subtraction: function(value1, value2){
        return parseInt(value1) - parseInt(value2)
    },
    multiplication: function(value1, value2){
        return parseInt(value1) * parseInt(value2)
    },
    division: function(value1, value2){
        return parseInt(value1) / parseInt(value2)
    }
};

export default operations;

let t1 = '10';
let t2 = '10';

console.log(operations.sum(t1, t2));
console.log(operations.subtraction(t1, t2));
console.log(operations.division(t1, t2));
console.log(operations.multiplication(t1, t2));
