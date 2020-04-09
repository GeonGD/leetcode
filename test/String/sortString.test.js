import sortString from "../../code/String/sortString";

test("sortString('aaaabbbbcccc')", () => {
    expect(sortString("aaaabbbbcccc")).toBe("abccbaabccba");
});
