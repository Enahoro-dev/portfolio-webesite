import { NextPage } from 'next'
import styles from '../styles/Footer.module.css'
import {FaGithubSquare, FaLinkedin} from 'react-icons/fa'
import {HiMail} from 'react-icons/hi'

const Footer:NextPage = () => {
    return (
        <div className={styles.footer}>
            <ul>
                <li><a href="https://github.com/Enahoro-dev/" target='blank'><FaGithubSquare/></a></li>
                <li><a href="https://www.linkedin.com/in/enahoro-abhulimen-630020208" target='blank'><FaLinkedin/></a></li>
                <li><a href="mailto:abhulimenenahoro@gmail.com"><HiMail/></a></li>
            </ul>
        </div>
    )
}

export default Footer
