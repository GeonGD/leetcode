import canPlaceFlowers from "../../code/Array/canPlaceFlowers";

test("canPlaceFlowers([1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1])", () => {
    expect(canPlaceFlowers([1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1])).toBe(false);
});
