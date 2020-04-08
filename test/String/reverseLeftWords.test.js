import reverseLeftWords from "../../code/String/reverseLeftWords";

test("reverseLeftWords('abcdefg', 2)", () => {
    expect(reverseLeftWords("abcdefg", 2)).toBe("cdefgab");
});