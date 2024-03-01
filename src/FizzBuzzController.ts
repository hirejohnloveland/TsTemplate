import DivisibleByFive from "./DivisibleByFive";
import DivisibleByThree from "./DivisibleByThree";

export default class FizzBuzzController {
    private divisibleByThree: DivisibleByThree;
    private divisibleByFive: DivisibleByFive;

    
    constructor(divisibleByThree: DivisibleByThree, divisibleByFive: DivisibleByFive) {
        this.divisibleByThree = divisibleByThree;
        this.divisibleByFive = divisibleByFive;
    }

    public CalculateFizzBuzz(number: number): any {
        if (this.divisibleByThree.isDivisibleByThree(number)) {return 'Fizz'}
        else if (this.divisibleByFive.isDivisibleByFive(number)) {return 'Buzz'}
        else return number;
    }
}