import isMatch from "../../code/RegRex/isMatch";

test("isMatch", () => {
    expect(isMatch("mississippi", "mis*is*p*.")).toBe(false);
});
