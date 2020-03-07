import countBinarySubstrings from "../../code/String/countBinarySubstrings";

test("countBinarySubstrings('00110011')", () => {
    expect(countBinarySubstrings("00110011")).toBe(6);
});

test("countBinarySubstrings('10101')", () => {
    expect(countBinarySubstrings("10101")).toBe(4);
});

// test("countBinarySubstrings('10101001110001110000101010010100101')", () => {
//     expect(countBinarySubstrings("10101001110001110000101010010100101")).toBe(29);
// });
