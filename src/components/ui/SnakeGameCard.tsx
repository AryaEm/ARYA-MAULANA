"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const GRID = 12;
type Point = { x: number; y: number };

const START_SNAKE: Point[] = [
  { x: 5, y: 6 },
  { x: 4, y: 6 },
  { x: 3, y: 6 },
];

const START_FOOD: Point = { x: 8, y: 6 };

function randomFood(snake: Point[]): Point {
  let p: Point;
  do {
    p = { x: Math.floor(Math.random() * GRID), y: Math.floor(Math.random() * GRID) };
  } while (snake.some((s) => s.x === p.x && s.y === p.y));
  return p;
}

export default function SnakeGameCard() {
  const [snake, setSnake] = useState<Point[]>(START_SNAKE);
  const [food, setFood] = useState<Point>(START_FOOD);
  const [dir, setDir] = useState<Point>({ x: 1, y: 0 });
  const [score, setScore] = useState(0);
  const [logs, setLogs] = useState<string[]>(["Bot active"]);

  const dirRef = useRef(dir);
  dirRef.current = dir;

  // Helper log ringkas (maksimal 2 log terbaru)
  const addLog = (msg: string) => {
    setLogs((prev) => [msg, ...prev.slice(0, 1)]);
  };

  // Algoritma Autopilot / AI Pathfinding Safety
  const getNextDirection = useCallback(
    (head: Point, currentSnake: Point[], targetFood: Point): Point => {
      const moves: Point[] = [
        { x: 0, y: -1 }, // UP
        { x: 0, y: 1 },  // DOWN
        { x: -1, y: 0 }, // LEFT
        { x: 1, y: 0 },  // RIGHT
      ];

      // Filter pergerakan aman
      const safeMoves = moves.filter((m) => {
        const next = { x: head.x + m.x, y: head.y + m.y };
        const hitWall = next.x < 0 || next.x >= GRID || next.y < 0 || next.y >= GRID;
        const hitSelf = currentSnake.some((s) => s.x === next.x && s.y === next.y);
        return !hitWall && !hitSelf;
      });

      if (safeMoves.length === 0) return dirRef.current;

      // Pilih langkah paling dekat ke makanan
      safeMoves.sort((a, b) => {
        const distA = Math.abs(head.x + a.x - targetFood.x) + Math.abs(head.y + a.y - targetFood.y);
        const distB = Math.abs(head.x + b.x - targetFood.x) + Math.abs(head.y + b.y - targetFood.y);
        return distA - distB;
      });

      return safeMoves[0];
    },
    []
  );

  useEffect(() => {
    const id = setInterval(() => {
      setSnake((prev) => {
        const head = prev[0];
        const nextDir = getNextDirection(head, prev, food);
        setDir(nextDir);

        const newHead = { x: head.x + nextDir.x, y: head.y + nextDir.y };

        const hitWall = newHead.x < 0 || newHead.x >= GRID || newHead.y < 0 || newHead.y >= GRID;
        const hitSelf = prev.some((s) => s.x === newHead.x && s.y === newHead.y);

        // Crash -> Respawn otomatis
        if (hitWall || hitSelf) {
          addLog("Crash! Respawning...");
          setScore(0);
          setFood(START_FOOD);
          return START_SNAKE;
        }

        const nextSnake = [newHead, ...prev];
        const ateFood = newHead.x === food.x && newHead.y === food.y;

        if (ateFood) {
          setScore((s) => s + 1);
          const nextFood = randomFood(nextSnake);
          setFood(nextFood);
          addLog(`Target eaten (+1)`);
        } else {
          nextSnake.pop();
        }

        return nextSnake;
      });
    }, 150);

    return () => clearInterval(id);
  }, [food, getNextDirection]);

  return (
    <div className="flex flex-col gap-3 overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/70 p-4 transition-colors hover:border-[var(--color-accent)]/30">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5 font-mono text-[11px]">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-accent)] opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
          </span>
          <span className="text-[var(--color-accent)] uppercase text-[9px] tracking-wider font-semibold">
            AUTOPILOT
          </span>
        </div>
        <span className="font-mono text-[11px] text-[var(--color-ink-dim)]">
          Score <span className="text-[var(--color-ink)] font-semibold">{score}</span>
        </span>
      </div>

      {/* Grid Canvas */}
      <div className="relative grid aspect-square w-full touch-none grid-cols-12 gap-[2px] rounded-xl border border-[var(--color-border-soft)] bg-[var(--color-bg)]/60 p-1.5">
        {Array.from({ length: GRID * GRID }).map((_, i) => {
          const x = i % GRID;
          const y = Math.floor(i / GRID);
          const isHead = snake[0].x === x && snake[0].y === y;
          const isBody = !isHead && snake.some((s) => s.x === x && s.y === y);
          const isFood = food.x === x && food.y === y;
          return (
            <div
              key={i}
              className={`rounded-[2px] transition-colors duration-100 ${isHead
                  ? "bg-[var(--color-accent)] shadow-[0_0_6px_var(--color-accent)]"
                  : isBody
                    ? "bg-[var(--color-ink-faint)]"
                    : isFood
                      ? "bg-[var(--color-ink)] animate-pulse"
                      : "bg-[var(--color-border-soft)]"
                }`}
            />
          );
        })}
      </div>

      {/* Ultra-compact Log Footer (Cuma 1 Baris Teks) */}
      <div className="flex items-center justify-between rounded-md bg-[var(--color-bg)]/50 px-2.5 py-1 font-mono text-[10px] text-[var(--color-ink-faint)]">
        <span className="truncate text-[var(--color-ink-dim)]">&gt; {logs[0]}</span>
        <span className="text-[9px] opacity-60 uppercase shrink-0">AI MODE</span>
      </div>
    </div>
  );
}