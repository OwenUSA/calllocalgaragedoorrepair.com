import Link from 'next/link';
import TopBar from '../components/TopBar';
import Header from '../components/Header';
import Footer, { CallBar } from '../components/Footer';
import { Icon } from '../components/Icons';
import {
  site,
  cities,
  mainCity,
  homeServices,
  trustItems,
  heroPoints,
  heroCardItems,
  aboutChecklist,
  steps,
  whatBreaks,
  areaTags,
  faq,
  offerCatalog,
  mapEmbed,
} from '../data/site';

const title = `${site.brand} | 24/7 Garage Door Service in Miami, FL`;
const description =
  'Call Local Garage Door Repair covers all of Miami: 24/7 emergency repair, springs, openers, cables and new doors. Same-day service, we come to you. Call (305) 614-2870.';

export const metadata = {
  title: { absolute: title },
  description,
  keywords: [
    'garage door repair Miami',
    'garage door spring replacement',
    'garage door opener repair',
    'Miami garage door service',
    'Biscayne Blvd garage door',
    'South Florida garage door repair',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    title,
    description:
      'Same-day garage door repair, spring replacement, opener service and installation across all of Miami. The technician comes to your door, 24/7.',
    url: '/',
    images: [
      {
        url: '/img/hero-garage.jpg',
        width: 1920,
        height: 1072,
        alt: 'Garage door of a Miami home at golden hour',
      },
    ],
  },
  twitter: {
    title,
    description:
      'Same-day garage door repair across all of Miami. We come to you, 24/7 emergency dispatch.',
    images: ['/img/hero-garage.jpg'],
  },
  other: {
    'geo.region': 'US-FL',
    'geo.placename': mainCity.name,
    'geo.position': `${mainCity.lat};${mainCity.lon}`,
    ICBM: `${mainCity.lat}, ${mainCity.lon}`,
  },
};

const businessLd = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  '@id': `${site.url}/#business`,
  name: site.brand,
  url: `${site.url}/`,
  telephone: site.phone.schema,
  email: site.email,
  description:
    '24/7 mobile garage door repair, spring replacement, opener service and new door installation across Miami and the rest of South Florida.',
  image: `${site.url}/img/hero-garage.jpg`,
  logo: `${site.url}/img/logo.png`,
  geo: { '@type': 'GeoCoordinates', latitude: mainCity.lat, longitude: mainCity.lon },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Garage door services',
    itemListElement: offerCatalog.map((name) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name },
    })),
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: mainCity.addr1,
    addressLocality: mainCity.name,
    addressRegion: 'FL',
    postalCode: mainCity.zip,
    addressCountry: 'US',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '07:00',
      closes: '21:00',
    },
  ],
  areaServed: [
    { '@type': 'City', name: 'Miami' },
    ...cities.map((c) => ({ '@type': 'City', name: c.name })),
  ],
  department: cities
    .filter((c) => !c.main)
    .map((c) => ({
      '@type': 'LocalBusiness',
      name: `${site.brand} - ${c.name}`,
      telephone: site.phone.schema,
      url: `${site.url}/${c.slug}`,
      address: {
        '@type': 'PostalAddress',
        streetAddress: c.addr1,
        addressLocality: c.name,
        addressRegion: 'FL',
        postalCode: c.zip,
        addressCountry: 'US',
      },
    })),
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function HomePage() {
  return (
    <>
      <link rel="preload" as="image" href={site.heroHome} fetchPriority="high" />
      <TopBar />
      <Header variant="home" />

      {/* ============ HERO ============ */}
      <section className="hero">
        <div className="container hero__inner">
          <div>
            <span className="hero__badge">
              <span className="dot" /> Miami technicians on call right now
            </span>
            <h1>
              One Call and a Local Tech Is <span>on the Way</span> in Miami
            </h1>
            <p className="hero__lead">
              Spring snapped, door stuck halfway, opener dead in the middle of the night?{' '}
              {site.brand} covers every corner of Miami from our {mainCity.street} dispatch point
              &mdash; a stocked truck pulls into your driveway, usually the same day.
            </p>

            <div className="hero__actions">
              <a className="btn btn--primary btn--lg" href={site.phone.href}>
                <Icon name="phone" />
                Call {site.phone.display}
              </a>
              <a className="btn btn--ghost btn--lg" href="#services">
                See Our Services
              </a>
            </div>

            <ul className="hero__points">
              {heroPoints.map((p) => (
                <li key={p}>
                  <Icon name="check" /> {p}
                </li>
              ))}
            </ul>
          </div>

          <aside className="hero-card">
            <h3>Need help right now?</h3>
            <p className="hero-card__note">
              The line rings a technician, not a call center queue.
            </p>
            <ul className="hero-card__list">
              {heroCardItems.map((i) => (
                <li key={i.strong}>
                  <Icon name={i.icon} />
                  <span>
                    <strong>{i.strong}</strong>
                    {i.text}
                  </span>
                </li>
              ))}
            </ul>
            <a className="hero-card__phone" href={site.phone.href}>
              {site.phone.display}
            </a>
            <a className="btn btn--primary btn--block" href="#contact">
              Request a Visit
            </a>
          </aside>
        </div>
      </section>

      {/* ============ TRUST STRIP ============ */}
      <section className="trust">
        <div className="container trust__grid">
          {trustItems.map((t) => (
            <div className="trust__item" key={t.title}>
              <span className="trust__icon">
                <Icon name={t.icon} />
              </span>
              <div>
                <strong>{t.title}</strong>
                <span>{t.text}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section className="section" id="services">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Our Services</span>
            <h2>Complete Garage Door Repair &amp; Installation</h2>
            <p>
              From a torsion spring that let go at 2 a.m. to a brand-new impact-rated door approved
              for Miami-Dade, our technicians handle every residential and commercial garage door job
              in the city.
            </p>
          </div>

          <div className="grid grid--3">
            {homeServices.map((s) => (
              <article className="card" id={s.id} key={s.id}>
                <span className="card__icon">
                  <Icon name={s.icon} />
                </span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <ul className="card__list">
                  {s.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ ABOUT US ============ */}
      <section className="section section--soft" id="about">
        <div className="container split">
          <div className="split__media">
            <div className="split__stat">
              <strong>5,200+</strong>
              <span>Garage doors serviced across South Florida</span>
            </div>
          </div>
          <div>
            <span className="eyebrow">About {site.brandFirst}</span>
            <h2>The Crew That Picks Up the Phone</h2>
            <p>
              {site.brand} is a Miami company staffed by technicians who live in the neighborhoods
              they serve. We are a mobile operation: the trucks start the day at our{' '}
              {mainCity.street} dispatch point and every repair happens in your driveway. No
              subcontractors, no handoffs, no waiting on a second crew to finish the job.
            </p>
            <ul className="checklist">
              {aboutChecklist.map((c) => (
                <li key={c.strong}>
                  <Icon name="check" />
                  <div>
                    <strong>{c.strong}</strong>
                    <span>{c.text}</span>
                  </div>
                </li>
              ))}
            </ul>
            <a className="btn btn--primary" href={site.phone.href}>
              Speak With a Technician
            </a>
          </div>
        </div>
      </section>

      {/* ============ PROCESS ============ */}
      <section className="section section--dark" id="process">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">How It Works</span>
            <h2>Four Steps From Your Call to a Working Door</h2>
            <p>From the first ring to the final safety test, you always know what happens next.</p>
          </div>
          <div className="steps">
            {steps.map((s) => (
              <div className="step" key={s.n}>
                <span className="step__num">{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA BAND ============ */}
      <section className="cta-band">
        <div className="container cta-band__inner">
          <div>
            <h2>
              Garage Door Emergency? <span>We&rsquo;re Awake.</span>
            </h2>
            <p>
              Our dispatch line runs 24 hours a day, every day of the year &mdash; weekends and
              holidays included. One call and a technician is on the way to you.
            </p>
          </div>
          <div className="cta-band__actions">
            <a className="btn btn--primary btn--lg" href={site.phone.href}>
              <Icon name="phone" />
              {site.phone.display}
            </a>
          </div>
        </div>
      </section>

      {/* ============ WHAT BREAKS ============ */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What We Fix Most</span>
            <h2>The Three Calls We Get Every Day in Miami</h2>
            <p>
              Bay air, afternoon storms and doors that cycle a dozen times a day: the failures here
              are predictable, and the parts are already on the truck.
            </p>
          </div>
          <div className="grid grid--3">
            {whatBreaks.map((w) => (
              <article className="card" key={w.title}>
                <span className="card__icon">
                  <Icon name={w.icon} />
                </span>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ COVERAGE AREAS ============ */}
      <section className="section section--soft" id="areas">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Coverage Areas</span>
            <h2>All of Miami, Covered From Five Dispatch Points</h2>
            <p>
              Our main dispatch point sits on {mainCity.street} in {mainCity.name}, and four more
              locations keep a truck close to every corner of the coverage area. Pick the one nearest
              you for local details &mdash; wherever you are, the technician drives to your door.
            </p>
          </div>

          <div className="grid grid--3">
            {cities.map((c) => (
              <article className={`area-card${c.main ? ' area-card--main' : ''}`} key={c.slug}>
                <span className="area-card__tag">{c.tag}</span>
                <h3>{c.name}, FL</h3>
                <address>
                  <Icon name="pin" />
                  <span>
                    {c.addr1}
                    <br />
                    {c.name}, FL {c.zip}
                  </span>
                </address>
                <p className="area-card__meta">{c.coverageMeta}</p>
                <Link className="area-card__link" href={`/${c.slug}`}>
                  View {c.name} service
                  <Icon name="arrowRight" />
                </Link>
              </article>
            ))}

            <article
              className="area-card"
              style={{
                justifyContent: 'center',
                alignItems: 'flex-start',
                background: 'var(--deep-900)',
                borderColor: 'var(--deep-900)',
              }}
            >
              <h3 style={{ color: '#fff' }}>Not sure which crew covers you?</h3>
              <p style={{ color: '#d3b2aa', fontSize: '.96rem' }}>
                Call the dispatch line and we send the closest available technician &mdash; anywhere
                from Kendall to West Palm Beach.
              </p>
              <a className="btn btn--primary" href={site.phone.href} style={{ marginTop: 'auto' }}>
                Call {site.phone.display}
              </a>
            </article>
          </div>

          <div className="area-tags">
            {areaTags.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="section" id="faq">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">FAQ</span>
            <h2>Garage Door Questions, Answered</h2>
            <p>The questions our technicians hear most often in Miami homes.</p>
          </div>

          <div className="faq">
            {faq.map((f, i) => (
              <details key={f.q} open={i === 0}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CONTACT ============ */}
      <section className="section section--soft" id="contact">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Contact Us</span>
            <h2>Book a Visit With a {site.brandFirst} Technician</h2>
            <p>
              Call or text any hour of the day. Tell us what the door is doing and we will put a
              truck on the way.
            </p>
          </div>

          <div className="contact-grid">
            <div className="panel">
              <ul className="info-list">
                <li>
                  <span className="info-icon">
                    <Icon name="phone" />
                  </span>
                  <div>
                    <strong>Phone &mdash; 24/7 Dispatch</strong>
                    <a href={site.phone.href}>+{site.phone.long}</a>
                  </div>
                </li>
                <li>
                  <span className="info-icon">
                    <Icon name="mailSquare" />
                  </span>
                  <div>
                    <strong>Email</strong>
                    <a href={`mailto:${site.email}`}>{site.email}</a>
                  </div>
                </li>
                <li>
                  <span className="info-icon">
                    <Icon name="pin" />
                  </span>
                  <div>
                    <strong>Main dispatch point</strong>
                    <span>
                      {mainCity.addr1}, {mainCity.name}, FL {mainCity.zip}
                    </span>
                  </div>
                </li>
                <li>
                  <span className="info-icon">
                    <Icon name="clock" />
                  </span>
                  <div>
                    <strong>Hours</strong>
                    <span>
                      {site.hoursLong} &mdash; {site.hoursSunday}
                    </span>
                  </div>
                </li>
              </ul>

              <h3 style={{ marginTop: 30 }}>Dispatch Hours</h3>
              <ul className="hours">
                <li>
                  <strong>Monday &ndash; Friday</strong> <span>7:00 AM &ndash; 9:00 PM</span>
                </li>
                <li>
                  <strong>Saturday</strong> <span>7:00 AM &ndash; 9:00 PM</span>
                </li>
                <li>
                  <strong>Sunday &amp; holidays</strong> <span>Emergency dispatch</span>
                </li>
                <li>
                  <strong>Emergency calls</strong> <span>Answered 24/7</span>
                </li>
              </ul>

              <a
                className="btn btn--primary btn--block"
                href={site.phone.href}
                style={{ marginTop: 26 }}
              >
                <Icon name="phone" />
                Call Now &mdash; {site.phone.display}
              </a>
            </div>

            <div>
              <div className="map-embed">
                <iframe
                  title={`${site.brand} - ${mainCity.name} dispatch point`}
                  src={mapEmbed(mainCity.mapQuery)}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="panel" style={{ marginTop: 26 }}>
                <h3>Coverage, not a counter</h3>
                <p>
                  The map shows where our trucks are based, not a place to bring your door. Every
                  repair, measurement and installation happens at your address &mdash; we come to
                  you, anywhere in Miami.
                </p>
                <h3 style={{ marginTop: 26 }}>Service Guarantee</h3>
                <p style={{ marginBottom: 0 }}>
                  If a repair we performed fails within the warranty period, we come back and make it
                  right at no charge. That is the whole policy &mdash; no fine print, no arguing
                  about who is responsible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer variant="home" />
      <CallBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
    </>
  );
}
