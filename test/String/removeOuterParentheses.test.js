import removeOuterParentheses from "../../code/String/removeOuterParentheses";

test("removeOuterParentheses('(()())(())')", () => {
    // expect(removeOuterParentheses("(()())(())")).toBe("()()()");

    expect(removeOuterParentheses("(()())(())(()(()))")).toBe("()()()()(())");
});
