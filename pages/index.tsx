import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import mypic from '../public/assets/mypic.png'

const Home: NextPage = () => {
  return (
      <div className={styles.main}>
        <h1 className={styles.title}>
         <span className={styles.name}> Hi, I&apos;m Grant Kennedy.</span><br/>
         <span　className={styles.tagline}>Javascript Developer, UI/UX Designer, and Consultant.</span>
        </h1>

        <div className={styles.profilePic}>
          <Image src={mypic} 
                alt="illustration of Grant Kennedy Javascript Developer"
                width="300px"
                height="300px"
                />
        </div>

        <div className={styles.grid}>
          <Link href="/portfolio" className={styles.card}>
            <>
              <h2>Portfolio &rarr;</h2>
              <p>Check out my work and my projects</p>
            </> 
          </Link>

          <Link href="/about" className={styles.card}>
            <>
              <h2>About &rarr;</h2>
              <p>This is the place to learn all about me.</p>
            </>
          </Link>

          <Link href="/contact" className={styles.card}>
            <>
              <h2>Work Together &rarr;</h2>
              <p>Find out the best way to get in touch</p>
            </>
          </Link>

          <a
            href="https://medium.com/@malts_and_mash"
            className={styles.card}
          >
            <h2>Blog &rarr;</h2>
            <p>
              This is where I post my deep insights on... stuff
            </p>
          </a>
        </div>
      </div>
  )
}

export default Home
