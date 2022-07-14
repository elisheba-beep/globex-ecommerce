import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import GlobexButton from '../components/elements/GlobexButton/GlobexButton'
import GlobexCard from '../components/elements/GlobexCard/GlobexCard'
import GlobexCheckbox from '../components/elements/GlobexCheckbox/GlobexCheckbox'
import GlobexDropDown from '../components/elements/GlobexDropDown/GlobexDropDown'
import GlobexFilter from '../components/elements/GlobexFilter/GlobexFilter'
import GlobexRange from '../components/elements/GlobexRange/GlobexRange'
import GlobexSearch from '../components/elements/GlobexSearch/GlobexSearch'
import GlobexUser from '../components/elements/GlobexUser/GlobexUser'
import GlobexCTA from '../components/sectionComponents/GlobexCTA/GlobexCTA'
import GlobexGrid from '../components/sectionComponents/GlobexGrid/GlobexGrid'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>

        <GlobexButton variant='black'>add to cart</GlobexButton>
        <GlobexSearch/>
        <GlobexCheckbox tag='versace' number={27}/>
        <GlobexFilter tag='brand'/>
        <GlobexCard src='/image-four.png' width={400} height={300} display='flex'>
          
          <h1>there</h1>
          <p>hello</p>
        </GlobexCard>
        <GlobexUser userName='Anna Doe' src='/image-four.png'/>
        <GlobexDropDown tag='Brand'>
          <option>versace</option>
          <option>versace</option>
          <option>versace</option>
        </GlobexDropDown>
        <GlobexRange/>
       
       
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
