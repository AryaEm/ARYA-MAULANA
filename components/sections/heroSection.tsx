import PuzzleBackground from '@/components/ui/puzzleBackground'
import PuzzleBoard from '@/components/ui/puzzleBoard'

const STATS = [
    { value: '3', label: 'PROJECTS DONE' },
    { value: '∞', label: 'PUZZLES' },
]

export default function HeroSection() {
    return (
        <section id="hero" className="hero" aria-label="Introduction">
            <PuzzleBackground cols={10} rows={7} />

            <div className="hero__inner">
                <div className="hero__left">
                    <div className="hero__badge" aria-label="Level 1 unlocked">
                        <i className="ti ti-puzzle" aria-hidden="true" />
                        LEVEL 01 — UNLOCKED
                    </div>

                    <h1 className="hero__headline">
                        Building<br />
                        <span className="hero__headline-strike">boring</span>{' '}
                        <span className="hero__headline-accent">digital</span><br />
                        experiences
                        <span className="hero__cursor" aria-hidden="true" />
                    </h1>

                    <p className="hero__sub">
                        Hi, I&apos;m <span className="hero__sub-name">[Arya Maulana]</span>, a
                        frontend developer who treats every project like a{' '}
                        <span className="hero__sub-em">puzzle worth solving.</span>
                    </p>

                    <div className="hero__actions">
                        <a href="#about" className="btn btn--primary">
                            <i className="ti ti-player-play" aria-hidden="true" />
                            Start Challenge
                        </a>
                        <a href="#projects" className="btn btn--ghost">
                            View Work →
                        </a>
                    </div>

                    <div className="hero__stats" role="list">
                        {STATS.map(({ value, label }) => (
                            <div key={label} className="hero__stat" role="listitem">
                                <span className="hero__stat-num">{value}</span>
                                <span className="hero__stat-label">{label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="hero__right">
                    <PuzzleBoard />
                </div>
            </div>

        </section>
    )
}