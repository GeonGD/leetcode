import reverseWords from "../../code/String/reverseWords1";

test("reverseWords('  hello world!  ')", () => {
    expect(reverseWords("  hello world!  ")).toBe("world! hello");
});