describe("My whatCanIDrink function", function() {
    // A test suite begins with a call to the global Jasmine function describe with two parameters: a string and a function.
    beforeEach(function() {
        drink = new whatCanIDrink();
    });

    describe("Checks age", function() {
        // Specs are defined by calling the global Jasmine function it
        it("should exist", function() {
            // Expectations are built with the function expect which takes a value, called the actual.
            // Each matcher implements a boolean comparison between the actual value and the expected value.
            // Any matcher can evaluate to a negative assertion by chaining the call to expect with a not before calling the matcher.
            expect(whatCanIDrink).toBeDefined();
        });

        it("should return drink toddy when called as whatCanIDrink(12)", function() {
            let result = whatCanIDrink(12)
            expect(result).toBe("Drink Toddy");
        });


        it("should return drink coke when called as whatCanIDrink(15)", function() {
            let result = whatCanIDrink(15)
            expect(result).toBe("Drink Coke");
        });

        it("should return drink beer when called as whatCanIDrink(18)", function() {
            let result = whatCanIDrink(18)
            expect(result).toBe("Drink Beer");
        });

        it("should return drink beer when called as whatCanIDrink(19)", function() {
            let result = whatCanIDrink(19)
            expect(result).toBe("Drink Beer");
        });

        it("should return drink whisky when called as whatCanIDrink(22)", function() {
            let result = whatCanIDrink(22)
            expect(result).toBe("Drink Whisky");
        });

        it("should be unable to return a drink when called as whatCanIDrink(131)", function() {
            let result = whatCanIDrink(131)
            expect(result).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });

        it("should contain Drink when called as whatCanIDrink(17)", function() {
            let result = whatCanIDrink(17).indexOf("Drink");
            expect(result).not.toEqual(-1);
        });
    });
});