import { channels, contactMeta } from '@/lib/data/social'

export default function ContactSection() {
  return (
    <section id="contact" className="contact" aria-labelledby="contact-heading">
      <div className="contact__inner">

        <div className="contact__tag" aria-hidden="true">
          <span className="contact__tag-line" />
          <span className="contact__tag-label">CONTACT / FINAL LEVEL</span>
        </div>

        <h2 id="contact-heading" className="contact__headline">
          Let's solve <br />something <br />
          <span className="contact__headline-accent">together.</span>
        </h2>

        <p className="contact__sub">
          I&apos;m always open to interesting projects, collaborations,
          or just a good conversation about tech. Pick your channel.
        </p>

        <div className="contact__channels" role="list">
          {channels.map((ch) => (
            <a
              key={ch.id}
              href={ch.href}
              target={ch.id !== 'email' ? '_blank' : undefined}
              rel={ch.id !== 'email' ? 'noopener noreferrer' : undefined}
              className="contact__channel"
              aria-label={`${ch.label}: ${ch.value}`}
              role="listitem"
            >
              <div className="contact__channel-icon" aria-hidden="true">
                <i className={`ti ${ch.icon}`} />
              </div>
              <div className="contact__channel-body">
                <span className="contact__channel-label">{ch.label}</span>
                <span className="contact__channel-value">{ch.value}</span>
              </div>
              <i className="ti ti-arrow-up-right contact__channel-arrow" aria-hidden="true" />
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="contact__divider" aria-hidden="true" />

        {/* Bottom row */}
        <div className="contact__bottom">
          <p className="contact__meta">
            response time:{' '}
            <span className="contact__meta-accent">{contactMeta.responseTime}</span>
            {' '}· based in {contactMeta.location}
          </p>
        </div>

        {/* Puzzle piece decoration — bottom right corner */}
        <div className="contact__deco" aria-hidden="true">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="contact__deco-cell" />
          ))}
        </div>

      </div>
    </section>
  )
}