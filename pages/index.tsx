import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>
          Michael Vernau - Software Engineer
        </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/mv_logo.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          I am Michael Vernau.
        </h1>

        <p className={styles.description}>
          Software Engineer | Data Scientist | Biologist{' '}

        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.linkedin.com/in/michael-vernau-8b4330210/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.logo}>
            <Image src="/linkedIn_logo.svg" alt="Vercel Logo" width={144} height={32} />
          </span>
        </a>
        <a
          href="https://github.com/MichaelRuns"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.logo}>
            <Image src="/github_logo.svg" alt="Vercel Logo" width={144} height={32} />
          </span>
        </a>
      </footer>
    </div>
  )
}
