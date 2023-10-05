const directions = [
  { x: 0, y: -1 },
  { x: 1, y: 0 },
  { x: 0, y: 1 },
  { x: -1, y: 0 },
];

export type Point = {
  x: number;
  y: number;
};

function walk({
  curr,
  end,
  maze,
  path,
  seen,
  wall,
}: {
  curr: Point;
  end: string;
  maze: string[];
  path: Point[];
  seen: boolean[][];
  wall: string;
}): boolean {
  const { x, y } = curr;
  if (x < 0 || y < 0 || x > maze[y]!.length - 1 || y > maze.length - 1) {
    return false;
  }

  if (maze[y]![x] === end) {
    return true;
  }

  if (seen[y]![x]) {
    return false;
  }

  if (maze[y]![x] === wall) {
    return false;
  }

  seen[y]![x] = true;

  for (const direction of directions) {
    const curr = {
      x: x + direction.x,
      y: y + direction.y,
    };

    if (
      walk({
        maze,
        curr,
        end,
        path,
        seen,
        wall,
      })
    ) {
      path.push(curr);
      return true;
    }
  }

  return false;
}

export function findPath({
  end,
  maze,
  start,
  wall,
}: {
  end: string;
  maze: string[];
  start: string;
  wall: string;
}) {
  let curr: Point | undefined;

  for (let y = 0; y <= maze.length - 1; y++) {
    for (let x = 0; x <= maze[y]!.length - 1; x++) {
      if (maze[y]![x] === start) {
        curr = {
          x,
          y,
        };
      }
    }
  }

  if (!curr) {
    return [];
  }

  const path: Point[] = [];

  let seen: boolean[][] = [];

  for (let y = 0; y <= maze.length - 1; y++) {
    seen.push(new Array(maze[y]!.length).fill(false));
  }

  walk({ curr, end, maze, path, seen, wall });

  path.push(curr);

  return path;
}
