import type { NextPage } from 'next'
import {server} from '../config/index'
import {Project} from './api/projects/data'
import styles from '../styles/Projects.module.css'
import Image from 'next/image'

interface Props{
    projects:Project[]
}

const Home:NextPage<Props> = ({projects}) => {
  return (
    <div className={styles.container}>
        <h1>PROJECTS</h1>
        <div className={styles.grid}>
        {
                projects.map((project,index) =>(
                    <div className={styles.project} key={index}>
                        <h3>{project.title}</h3>
                        <p>{project.body}</p>
                        <Image
                            src={project.image}
                            alt="Landscape picture"
                            width={400}
                            height={300}
                        />
                        <div className={styles.links}>
                            <a href={project.github} target='blank'>Source code</a>
                            <a href={project.live} target='blank'>Live</a>
                        </div>
                    </div>
                      
                )) 
            }
        </div>  
    </div>
  )
}

export default Home


export const getStaticProps = async () => {
    const res = await fetch(`${server}/api/projects`)
    const projects = await res.json()

    return{
        props: {
            projects
        }
    }
}