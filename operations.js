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

module.exports = operations;


console.log(operations.division(10, 5))