import { findPath } from "./index";

describe("findPath", () => {
  it("should find path 1", () => {
    const maze = ["E##", "   ", "## ", "## ", "   ", " ##", " ##", "S##"];

    expect(findPath({ maze, end: "E", start: "S", wall: "#" })).toEqual([
      { x: 0, y: 0 },
      { x: 0, y: 1 },
      { x: 1, y: 1 },
      { x: 2, y: 1 },
      { x: 2, y: 2 },
      { x: 2, y: 3 },
      { x: 2, y: 4 },
      { x: 1, y: 4 },
      { x: 0, y: 4 },
      { x: 0, y: 5 },
      { x: 0, y: 6 },
      { x: 0, y: 7 },
    ]);
  });

  it("should find path 2", () => {
    const maze = [
      "##########S#",
      "#        # #",
      "#        # #",
      "# ######## #",
      "#          #",
      "#E##########",
    ];

    expect(findPath({ maze, end: "E", start: "S", wall: "#" })).toEqual([
        { x: 1, y: 5 },
        { x: 1, y: 4 },
        { x: 2, y: 4 },
        { x: 3, y: 4 },
        { x: 4, y: 4 },
        { x: 5, y: 4 },
        { x: 6, y: 4 },
        { x: 7, y: 4 },
        { x: 8, y: 4 },
        { x: 9, y: 4 },
        { x: 10, y: 4 },
        { x: 10, y: 3 },
        { x: 10, y: 2 },
        { x: 10, y: 1 },
        { x: 10, y: 0 },
    ]);
  });
});
