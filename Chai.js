//unit testing
//Mocha and Chai
//use NPM (node package manager)
// test line ~67 function
array1 = [1, 2, 3, 4, 5]
var expect = chai.expect
//testing the averageArray function to see if it would throw an error for the array values
describe('MyFunctions', function () {
    describe('#averageArray', function () {
        it('should throw an error if first parameter is a string, or a boolean', function () {
            expect(function () {
                averageArray('Chicken'); //calling function, passing in parameters to throw an error
            }).to.throw(Error);
        })
    });
});

//i tested this by creating an array on line 5 to see if it would throw an error with an array which it doesnt
//i then tested it by entering string and boolean parameters to see if it would throw an error, which it does

