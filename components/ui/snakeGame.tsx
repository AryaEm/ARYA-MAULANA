'use client'

import { useEffect, useRef, useState } from 'react'

const SKILLS = [
  'Next.js', 'TypeScript', 'React', 'Node.js',
  'Git', 'Firebase', 'Tailwind', 'CSS', 'Figma', 'REST API',
]

const CELL   = 16
const SPEED  = 105
const PINK   = '#e91e8c'

interface Vec { x: number; y: number }
interface Food extends Vec { label: string }

export default function SnakeGame() {
  const canvasRef  = useRef<HTMLCanvasElement>(null)
  const stateRef   = useRef({
    snake: [] as Vec[],
    dir:   { x: 1, y: 0 } as Vec,
    food:  null as Food | null,
    score: 0,
    collected: [] as string[],
    frame: 0,
    skillIdx: 0,
    lastTime: 0,
    rafId: 0,
  })

  const [score,     setScore]     = useState(0)
  const [collected, setCollected] = useState<string[]>([])

  // helpers
  const cols = (w: number) => Math.floor(w / CELL)
  const rows = (h: number) => Math.floor(h / CELL)

  function rndCell(w: number, h: number, exc: Vec[]): Vec {
    let c: Vec, tries = 0
    do {
      c = { x: Math.floor(Math.random() * cols(w)), y: Math.floor(Math.random() * rows(h)) }
      tries++
    } while (tries < 300 && exc.some(s => s.x === c.x && s.y === c.y))
    return c
  }

  function initGame(w: number, h: number) {
    const s = stateRef.current
    const sx = Math.floor(cols(w) / 2)
    const sy = Math.floor(rows(h) / 2)
    s.snake      = [{ x: sx, y: sy }, { x: sx-1, y: sy }, { x: sx-2, y: sy }, { x: sx-3, y: sy }]
    s.dir        = { x: 1, y: 0 }
    s.score      = 0
    s.collected  = []
    s.frame      = 0
    s.skillIdx   = 0
    s.lastTime   = 0
    spawnFood(w, h)
    setScore(0)
    setCollected([])
  }

  function spawnFood(w: number, h: number) {
    const s = stateRef.current
    const cell = rndCell(w, h, s.snake) as Food
    cell.label  = SKILLS[s.skillIdx % SKILLS.length]
    s.skillIdx++
    s.food = cell
  }

  function steer(w: number, h: number) {
    const s    = stateRef.current
    const head = s.snake[0]
    if (!s.food) return
    const dx = s.food.x - head.x
    const dy = s.food.y - head.y
    const C  = cols(w), R = rows(h)
    const d  = s.dir

    const opts: Vec[] = []
    if (Math.abs(dx) >= Math.abs(dy)) {
      if (dx > 0) opts.push({ x: 1, y: 0 }); if (dx < 0) opts.push({ x: -1, y: 0 })
      if (dy > 0) opts.push({ x: 0, y: 1 }); if (dy < 0) opts.push({ x: 0, y: -1 })
    } else {
      if (dy > 0) opts.push({ x: 0, y: 1 }); if (dy < 0) opts.push({ x: 0, y: -1 })
      if (dx > 0) opts.push({ x: 1, y: 0 }); if (dx < 0) opts.push({ x: -1, y: 0 })
    }
    opts.push(d, { x: -d.y, y: d.x }, { x: d.y, y: -d.x })

    for (const o of opts) {
      if (!o.x && !o.y) continue
      if (o.x === -d.x && o.y === -d.y) continue
      const nx = (head.x + o.x + C) % C
      const ny = (head.y + o.y + R) % R
      if (!s.snake.slice(0, -1).some(seg => seg.x === nx && seg.y === ny)) {
        s.dir = o
        return
      }
    }
  }

  function step(w: number, h: number) {
    const s = stateRef.current
    steer(w, h)
    const head = s.snake[0]
    const C = cols(w), R = rows(h)
    const nx = (head.x + s.dir.x + C) % C
    const ny = (head.y + s.dir.y + R) % R

    if (s.snake.slice(1).some(seg => seg.x === nx && seg.y === ny)) {
      initGame(w, h)
      return
    }

    s.snake.unshift({ x: nx, y: ny })

    if (s.food && nx === s.food.x && ny === s.food.y) {
      s.score++
      s.collected = [...s.collected.slice(-2), s.food.label]
      setScore(s.score)
      setCollected([...s.collected])
      spawnFood(w, h)
    } else {
      s.snake.pop()
    }
  }

  function draw(ctx: CanvasRenderingContext2D, w: number, h: number) {
    const s = stateRef.current
    const C = cols(w), R = rows(h)

    ctx.fillStyle = 'rgba(13,13,15,0.97)'
    ctx.fillRect(0, 0, w, h)

    // grid
    ctx.strokeStyle = 'rgba(233,30,140,0.055)'
    ctx.lineWidth = 0.5
    for (let x = 0; x < C; x++)
      for (let y = 0; y < R; y++)
        ctx.strokeRect(x * CELL, y * CELL, CELL, CELL)

    // snake
    s.snake.forEach((seg, i) => {
      const isHead = i === 0
      const fade   = 1 - (i / s.snake.length) * 0.72
      ctx.fillStyle = isHead ? PINK : `rgba(233,30,140,${(fade * 0.78).toFixed(2)})`

      const pad = isHead ? 1 : 2
      const r   = isHead ? 4 : 2.5
      const x = seg.x * CELL + pad
      const y = seg.y * CELL + pad
      const bw = CELL - pad * 2
      const bh = CELL - pad * 2

      ctx.beginPath()
      ctx.moveTo(x + r, y)
      ctx.lineTo(x + bw - r, y)
      ctx.quadraticCurveTo(x + bw, y, x + bw, y + r)
      ctx.lineTo(x + bw, y + bh - r)
      ctx.quadraticCurveTo(x + bw, y + bh, x + bw - r, y + bh)
      ctx.lineTo(x + r, y + bh)
      ctx.quadraticCurveTo(x, y + bh, x, y + bh - r)
      ctx.lineTo(x, y + r)
      ctx.quadraticCurveTo(x, y, x + r, y)
      ctx.closePath()
      ctx.fill()

      // eyes
      if (isHead) {
        const d  = s.dir
        const cx = seg.x * CELL + CELL / 2
        const cy = seg.y * CELL + CELL / 2
        ctx.fillStyle = 'rgba(13,13,15,0.9)'
        ctx.beginPath()
        ctx.arc(cx + d.x * 2.5 - d.y * 2, cy + d.y * 2.5 + d.x * 2, 1.3, 0, Math.PI * 2)
        ctx.fill()
        ctx.beginPath()
        ctx.arc(cx + d.x * 2.5 + d.y * 2, cy + d.y * 2.5 - d.x * 2, 1.3, 0, Math.PI * 2)
        ctx.fill()
      }
    })

    // food
    if (s.food) {
      const fx = s.food.x * CELL
      const fy = s.food.y * CELL
      const pulse = 0.5 + 0.5 * Math.sin(s.frame * 0.15)

      ctx.strokeStyle = `rgba(233,30,140,${0.4 + pulse * 0.45})`
      ctx.lineWidth   = 0.75
      ctx.strokeRect(fx + 1.5, fy + 1.5, CELL - 3, CELL - 3)

      ctx.fillStyle = `rgba(233,30,140,${0.06 + pulse * 0.1})`
      ctx.fillRect(fx + 1.5, fy + 1.5, CELL - 3, CELL - 3)

      ctx.fillStyle = `rgba(233,30,140,${0.6 + pulse * 0.35})`
      ctx.font      = "bold 6px 'Space Mono', monospace"
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      const lbl = s.food.label.length > 6 ? s.food.label.slice(0, 5) + '.' : s.food.label
      ctx.fillText(lbl, fx + CELL / 2, fy + CELL / 2)
    }

    s.frame++
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = canvas.parentElement?.clientWidth ?? 280
      initGame(canvas.width, canvas.height)
    }
    resize()
    window.addEventListener('resize', resize)

    const loop = (ts: number) => {
      const s = stateRef.current
      stateRef.current.rafId = requestAnimationFrame(loop)
      if (ts - s.lastTime < SPEED) return
      s.lastTime = ts
      step(canvas.width, canvas.height)
      draw(ctx, canvas.width, canvas.height)
    }

    stateRef.current.rafId = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(stateRef.current.rafId)
    }
  }, [])

  return (
    <div className="sg">
      {/* header bar */}
      <div className="sg__bar">
        <span className="sg__title">// skill_collector.exe</span>
        <span className="sg__score">
          score: <span className="sg__score-val">{score}</span>
        </span>
      </div>

      {/* canvas */}
      <canvas
        ref={canvasRef}
        height={190}
        className="sg__canvas"
        aria-label="Decorative snake game collecting tech skill names"
      />

      {/* footer */}
      <div className="sg__foot">
        <span className="sg__hint">auto-pilot mode</span>
        <span className="sg__collected" aria-live="polite">
          {collected.join(' · ')}
        </span>
      </div>

      <style jsx>{`
        .sg {
          display: flex;
          flex-direction: column;
          overflow: hidden;
          border-radius: 10px;
          border: 0.5px solid rgba(233, 30, 140, 0.2);
          background: rgba(255, 255, 255, 0.01);
        }

        .sg__bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 7px 12px;
          border-bottom: 0.5px solid rgba(233, 30, 140, 0.1);
          background: rgba(233, 30, 140, 0.04);
          flex-shrink: 0;
        }

        .sg__title {
          font-size: 9px;
          font-family: var(--font-mono);
          color: rgba(233, 30, 140, 0.5);
          letter-spacing: 0.1em;
        }

        .sg__score {
          font-size: 9px;
          font-family: var(--font-mono);
          color: rgba(240, 232, 240, 0.28);
        }

        .sg__score-val { color: #e91e8c; }

        .sg__canvas {
          display: block;
          width: 100%;
          flex: 1;
        }

        .sg__foot {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 5px 12px;
          border-top: 0.5px solid rgba(255, 255, 255, 0.05);
          flex-shrink: 0;
        }

        .sg__hint {
          font-size: 9px;
          font-family: var(--font-mono);
          color: rgba(240, 232, 240, 0.18);
        }

        .sg__collected {
          font-size: 9px;
          font-family: var(--font-mono);
          color: rgba(233, 30, 140, 0.5);
        }
      `}</style>
    </div>
  )
}