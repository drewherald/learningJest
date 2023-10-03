module.exports = {
    capitalize: function(string){    return string.charAt(0).toUpperCase() + string.slice(1);
    },
    reverseString: function(string){   let newString = ""
    for(let i = string.length-1; i>=0; i-- ){
        newString+= string.charAt(i)
    }
    return newString},
    calcAdd: function(num1, num2){    return num1+num2},
    calcSubtract: function(num1, num2){    return num1-num2},
    calcMultiply: function(num1, num2){    return num1*num2},
    calcDivide: function(num1, num2){    return num1/num2},
}