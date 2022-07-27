import type { NextPage } from 'next'
import Link from 'next/link'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <div className={styles.head} >
        <h1>FrameSHIFT</h1>
        <h2>A collection of products built by <span className='name'>Abhulimen Enahoro</span></h2>
      </div>
      <div className={styles.nav}>
        <ul>
          <li><Link href='/projects'>[PROJECTS]</Link></li>
          <li><Link href='/about'>[ABOUT]</Link></li>
        </ul>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
