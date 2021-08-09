function sum(a, b) {
  return a + b;
}

function sum_version_2(a, b) {
  let _a = typeof a === "string" ? +a : a;
  let _b = typeof b === "string" ? +b : b;
  return _a + _b;
}

describe("sum(int, int)", () => {
  it("should return 5 if given 2 and 3 ", () => {
    expect(sum(2, 3)).toBe(5);
  });
});

describe("sum(int, int)", () => {
  it("should return 5 if given 2 and 3 ", () => {
    expect(sum(2, 1)).toBe(3);
  });
});

describe("Dev sum_version_2(int, string) -> 3", () => {
  it("string should cast to int ", () => {
    expect(sum(2, "1")).toBe(3);
  });
});

describe("sum_version_2(int, string)", () => {
  it("string should cast to int ", () => {
    expect(sum_version_2(2, "3")).toBe(5);
  });
});
