import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "GPTiti — Premium AI on your terms | Launching in 2027",
  description: "Meet GPTiti: premium AI without a monthly subscription. Work with files, explore the links you share, and pay as you go. Launching in 2027.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "GPTiti — Premium AI on your terms",
    description: "Premium AI without a monthly subscription. Launching in 2027.",
    type: "website",
    images: [{ url: "/social-preview.svg", width: 1200, height: 630, alt: "GPTiti — Premium AI on your terms. Launching in 2027." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GPTiti — Premium AI on your terms",
    description: "Premium AI without a monthly subscription. Launching in 2027.",
    images: ["/social-preview.svg"],
  },
};

const readFormats = ["TXT", "MD", "LOG", "CSV", "TSV", "JSON", "XML", "YAML", "CODE", "DOCX", "XLSX", "PDF", "PNG", "JPG", "WEBP", "ZIP"];
const createFormats = ["TXT", "MD", "CSV", "TSV", "JSON", "CODE", "SVG", "PDF", "DOCX", "XLSX", "ZIP"];

function FormatList({ formats }: { formats: string[] }) {
  return <ul className={styles.formats}>{formats.map((format, index) => <li key={format}><span className={`${styles.fileIcon} ${styles[`color${index % 6}`]}`} aria-hidden="true">{format === "CODE" ? "</>" : format}</span><span>{format}</span></li>)}</ul>;
}

export default function Page() {
  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={styles.heroCopy}>
          <p className={styles.brand}>GPT<span>iti</span><small> by Your Price Booking</small></p>
          <h1 id="hero-title">Premium AI.<br /><em>On your terms.</em></h1>
          <p className={styles.lead}>Powerful GPT models, no monthly subscription. Pay as you go and use your tokens when you need them.</p>
          <p className={styles.launch}>Launching in 2027 <span aria-hidden="true">↗</span></p>
          <p className={styles.hint}>Good things are worth getting ready for.</p>
          <div className={styles.heroDoodle} aria-hidden="true"><span>✦</span><span>Good ideas<br />welcome.</span><span>✳</span></div>
        </div>
        <div className={styles.chat} aria-label="Illustration of a GPTiti conversation">
          <div className={styles.chatTop}><strong>GPT<span>iti</span></strong><span>New chat</span><span aria-hidden="true">•••</span></div>
          <div className={styles.chatBody}>
            <div className={styles.chatUser}><div className={styles.attachment}><span>PDF</span><div><strong>Project_report.pdf</strong><small>Document · PDF</small></div></div><p>Can you summarize this report and highlight the key points?</p></div>
            <div className={styles.chatAnswer}><div className={styles.spark}>✦</div><div><strong>Here’s a quick summary.</strong><p>I’ve pulled out the main points from your document so you can get straight to what matters.</p><div className={styles.answerLines} aria-hidden="true"><i /><i /><i /></div></div></div>
          </div>
          <div className={styles.chatInput}><span aria-hidden="true">＋</span> Ask anything... <b aria-hidden="true">↑</b></div>
        </div>
      </section>

      <section className={styles.cards} aria-label="What GPTiti can do">
        <article className={styles.card}><span className={`${styles.featureIcon} ${styles.red}`}>▤</span><h2>Your files, understood</h2><p>Bring documents, spreadsheets, images and more. Get summaries, answers and insights from the files you share.</p></article>
        <article className={styles.card}><span className={`${styles.featureIcon} ${styles.blue}`}>✎</span><h2>Create files in a chat</h2><p>Ask for documents, spreadsheets, text files and more. Your result is ready to preview or download.</p></article>
        <article className={styles.card}><span className={`${styles.featureIcon} ${styles.green}`}>◎</span><h2>Read links you share</h2><p>Share a URL and explore its content with GPTiti, with web sources saved for your conversation.</p></article>
      </section>

      <section className={styles.fileSection} aria-labelledby="file-title">
        <div className={styles.sectionHeading}><p className={styles.eyebrow}>A LITTLE FILE FLEXIBILITY</p><h2 id="file-title">Supported file formats</h2><p>Bring the files you already use. Ask for the ones you need.</p></div>
        <div className={styles.fileGrid}>
          <div className={styles.formatCard}><div className={styles.formatHeader}><span className={`${styles.featureIcon} ${styles.red}`}>↗</span><div><h3>Read</h3><p>Upload and analyze supported files.</p></div></div><FormatList formats={readFormats} /><p className={styles.detail}>Also supports JPEG and YML. Code includes HTML, CSS, JavaScript, TypeScript, Python, SQL and more. Images in ZIP files are read using OCR.</p></div>
          <div className={styles.formatCard}><div className={styles.formatHeader}><span className={`${styles.featureIcon} ${styles.blue}`}>✎</span><div><h3>Create</h3><p>Ask for a file right in your chat.</p></div></div><FormatList formats={createFormats} /><p className={styles.detail}>Create text-based code files, static SVGs, documents, spreadsheets and ZIP archives.</p></div>
        </div>
        <p className={styles.fileNote}>OCR can make mistakes, so check important details. Full preservation of original Office formatting, formulas and macros is not supported.</p>
      </section>

      <section className={styles.announcement} aria-labelledby="announcement-title"><div><p className={styles.eyebrow}>✳ &nbsp; A QUICK UPDATE</p><h2 id="announcement-title">A little more time.<br /><em>A lot more GPTiti.</em></h2><p>We’re moving our launch to 2027 and keeping 2026 payment-free while we take care of the paperwork and build more useful things for you.</p></div><div className={styles.calendar} aria-hidden="true"><span>✦</span><div><i>•••</i><strong>2027</strong></div><span>✳</span></div></section>

      <section className={styles.benefits} aria-label="GPTiti benefits"><div><span className={styles.benefitIcon}>⊘</span><p><strong>No subscriptions</strong><br />Use AI without a monthly fee.</p></div><div><span className={styles.benefitIcon}>∞</span><p><strong>Tokens that don’t expire</strong><br />Use your balance when you need it.</p></div><div><span className={styles.benefitIcon}>✦</span><p><strong>Weekly free tokens</strong><br />A little extra to keep exploring.</p></div></section>
      <div className={styles.testing}><span>⚗ &nbsp; Python tools · in testing</span><p>More useful things are on the way.</p></div>
    </main>
  );
}
