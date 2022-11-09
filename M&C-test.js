//unit testing
//Mocha and Chai
//use NPM (node package manager)
// test line ~67 function

var expect = chai.expect

describe('MyFunctions', function() {
    describe('#averageArray', function() {
        it('should concatenate the two parameters', function() {
            var x = averageArray('Hello', 5);
            expect(x).to.equal('Hello5');
        });

        it('should throw an error if first parameter is not a string', function(){
            expect(function() {
                averageArray(5, 5);
            }).to.throw(Error);
        })
    });
});