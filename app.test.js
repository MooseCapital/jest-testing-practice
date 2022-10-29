import {capitalize, reverseString, calculator, caeserCipher, analyzeArray} from "./app";

test("capitalize string", () => {
    expect(capitalize("mike")).toBe("Mike")

})

test("reverse the word", () => {
    expect(reverseString("landon")).toBe("nodnal")

})

test("calculate add", () => {
    expect(calculator.add(2,6)).toBe(8);
})

test("calculate add", () => {
    expect(calculator.subtract(6,2)).toBe(4);
})


test("calculate add", () => {
    expect(calculator.divide(6,2)).toBe(3);
})


test("calculate add", () => {
    expect(calculator.multiply(6,2)).toBe(12);
})

test("caeser cipher test, shift 1", () => {
    expect(caeserCipher("zyc !()")).toBe("azd !()")
})

test("analyze the array", () => {
    expect(analyzeArray([5,7,20,2,8])).toEqual({
        average: 8.4,
        min: 2,
        max: 20,
        length: 5
    })
})



