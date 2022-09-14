// Activity 1

// 1.a
// Declare a function called testAverage
function testAverage(...arguments) {
    //    Accepts a single parameter that can accept an infinite amount of arguments
    //    Inside the function, add the parameters together using the forEach method
    array.forEach(element => {
        sum += arguments;
    });
    //    The function will print the result in the following string: `The <number of scores> scores resulted in an average of <result>`
    return `The ${numberOfScores} scores resulted in an average of ${resultScore}`
}

//  These are the requirements of the function:

//    Divide the sum by the number of parameters that were passed in

//    The function will output the result
// Hints: Remember how a rest parameter represents arguments and what methods that can allow us to use

//Code below this line

// Invoke testAverage with the following parameters: 92, 71, 85, 83
testAverage(92, 71, 85, 83);