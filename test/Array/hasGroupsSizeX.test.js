import hasGroupsSizeX from "../../code/Array/hasGroupsSizeX";

test("hasGroupsSizeX([1,2,3,4,4,3,2,1])", () => {
    expect(hasGroupsSizeX([1,2,3,4,4,3,2,1])).toBe(true);
});