import longestCommonPrefix from "../../code/String/longestCommonPrefix";

test("longestCommonPrefix(['flower','flow','flight'])", () => {
    expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl");
});
