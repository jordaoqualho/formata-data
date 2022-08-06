const { getDateDiff } = require("../index");

describe("\nTesting getDateDiff function", () => {
  test("Returns the diference in days", () => {
    const result = getDateDiff("03/10/1997", "05/08/2022");
    expect(result).toBe(9072);
  });

  test("Returns type number", () => {
    const result = getDateDiff("03/10/1997");
    expect(typeof result).toBe("number");
  });

  test("Needs at least one date", () => {
    expect(() => getDateDiff()).toThrow("Requires at least one date");
  });

  test("Aceppts only valid dates", () => {
    expect(() => getDateDiff("30/30/2020")).toThrow("Invalid date inserted!");
    expect(() => getDateDiff("/10")).toThrow("Invalid date inserted!");
    expect(() => getDateDiff(30)).toThrow("Invalid date inserted!");
  });

  test("Aceppts only valid dates", () => {
    expect(() => getDateDiff("30/30/2020")).toThrow("Invalid date inserted!");
    expect(() => getDateDiff("/10")).toThrow("Invalid date inserted!");
    expect(() => getDateDiff(30)).toThrow("Invalid date inserted!");
  });
});
