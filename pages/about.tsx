import type { NextPage } from 'next'
import styles from '../styles/About.module.css'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1>ABOUT</h1>
      <div className={styles.layout}>
          <div className={styles.right}>
            <Image
              src='/images/ena.jpg'
              alt="Landscape picture"
              width={400}
              height={350}
            />
          </div>
          <div className={styles.left}>
            <p>Hi, my name is <span>Abhulimen Samson Enahoro</span>- but you can call me Ena :).</p>
            <p>I am a Full stack software and QA Engineer from Lagos, Nigeria skilled in <span>React</span>, <span>Typescript</span> and the <span>Django REST framework</span>.</p>
            <p>I have always been passionate about health care as it was the reason I got into tech in the first place, my passion was spurred by the severe lack of 21st century healthcare solutions in my community.</p>
            <p>I spend my free time listening to afrobeats music, watching anime, working out and currently; reading about how convolutional neural networks can be used in malignant tumor detection.</p>
          </div>
      </div>
    </div>
  )
}

export default Home
