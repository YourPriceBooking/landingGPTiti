import type { Metadata } from "next";
import styles from "./page.module.css";
import Image from "next/image";
const LAUNCH_DATE_ISO = "2026-02-10";
const LAUNCH_DATE_HUMAN = "10.02.2026";

export const metadata: Metadata = {
  title: "GPTiti — Premium GPT Models Without Subscriptions (Launch 10.02.2026)",
  description:
    "GPTiti by Your Price Booking: access premium GPT chat models with pay-as-you-go tokens that never expire. Weekly free tokens. Launching 10.02.2026.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "GPTiti — Premium GPT access without subscriptions",
    description:
      "Pay-as-you-go tokens that never expire. Weekly free tokens. Launch 10.02.2026.",
    type: "website",
    // Якщо буде домен:
    // url: "https://gptiti.com/",
    images: [
      {
        url: "/coming-soon.svg",
        width: 1440,
        height: 900,
        alt: "GPTiti Coming Soon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GPTiti — Premium GPT access without subscriptions",
    description:
      "Pay-as-you-go tokens that never expire. Weekly free tokens. Launch 10.02.2026.",
    images: ["/coming-soon.svg"],
  },
};

export default function Page() {
  return (
    <main className={styles.page}>
      {/* HERO with SVG (static) */}
      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={styles.heroMedia} aria-hidden="true">
          <Image
            src="/coming-soon.svg"
            alt=""
            className={styles.heroImg}
            loading="eager"
            width={1440}
            height={900}
          />
          <div className={styles.heroOverlay} />
        </div>

        {/* Real SEO text (indexed) */}
        <div className={styles.heroContent}>
          <p className={styles.kicker}>Your Price Booking presents</p>

          <h1 id="hero-title" className={styles.h1}>
            GPTiti — premium GPT models without subscriptions
          </h1>

          <p className={styles.lead}>
            Pay-as-you-go tokens. No monthly fees. Tokens never expire — use them
            whenever you want.
          </p>

          <div className={styles.metaRow}>
            <div className={styles.metaCard}>
              <p className={styles.metaLabel}>Launch date</p>
              <p className={styles.metaValue}>{LAUNCH_DATE_HUMAN}</p>
              <time dateTime={LAUNCH_DATE_ISO} className={styles.srOnly}>
                {LAUNCH_DATE_HUMAN}
              </time>
            </div>

            <div className={styles.metaCard}>
              <p className={styles.metaLabel}>Weekly reward</p>
              <p className={styles.metaValue}>Free tokens every week</p>
            </div>

            <div className={styles.metaCard}>
              <p className={styles.metaLabel}>Pricing</p>
              <p className={styles.metaValue}>From $4 per package</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO sections */}
      <section className={styles.section} aria-labelledby="what-is">
        <div className={styles.container}>
          <h2 id="what-is" className={styles.h2}>
            What is GPTiti?
          </h2>
          <p className={styles.p}>
            GPTiti is an AI chat platform built by <strong>Your Price Booking</strong>.
            It gives users access to premium GPT chat models through API-based
            token usage — without subscriptions and without monthly lock-ins.
          </p>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="why">
        <div className={styles.container}>
          <h2 id="why" className={styles.h2}>
            Why we built it
          </h2>
          <p className={styles.p}>
            AI has become essential for millions of people worldwide — and the
            number keeps growing. Often, standard models are enough. But sometimes
            even everyday tasks require a premium model for a short time: a quick
            translation, checking a thesis, reviewing a document, or solving a hard
            problem.
          </p>
          <p className={styles.p}>
            Instead of paying every month, GPTiti lets you purchase tokens once and
            use them until they run out. Any remaining balance stays on your account.
          </p>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="features">
        <div className={styles.container}>
          <h2 id="features" className={styles.h2}>
            Key benefits
          </h2>

          <ul className={styles.list}>
            <li className={styles.li}>
              <strong>No subscriptions:</strong> pay only for what you use.
            </li>
            <li className={styles.li}>
              <strong>Tokens never expire:</strong> your balance stays until you spend it.
            </li>
            <li className={styles.li}>
              <strong>Weekly free tokens:</strong> claim a reward and try premium models.
            </li>
            <li className={styles.li}>
              <strong>Premium access:</strong> advanced GPT models available even for casual users.
            </li>
          </ul>

          <p className={styles.note}>
            * We show an approximate request cost based on a typical ~30-word message.
            Actual usage depends on how much you write.
          </p>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.containerFooter}>
          <p className={styles.footerText}>
            © 2025 Your Price Booking. All rights reserved. “GPTiti” is a trademark of
            Your Price Booking.
          </p>
        </div>
      </footer>
    </main>
  );
}