import type { NextPage } from 'next'
import React,{useRef, useState, useEffect} from 'react';
import Link from 'next/link'
import styles from '../styles/Nav.module.css'
import {FaBars} from 'react-icons/fa';

const Nav:NextPage = () => {
    const [active,setActive]= useState<boolean>(false)
    const barRef = useRef<HTMLButtonElement>(null)
    const listRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        document.body.addEventListener('click', ({target}: MouseEvent) =>{
            if (barRef.current?.contains(target as Node)  || listRef.current?.contains(target as Node)){
              return;
            }
            setActive(false)  
            
        });
    }, [barRef,setActive]);
    
    const toggleNav = () =>{
        setActive(!active)
    }

    return (
        <div className={styles.container}>
            <button ref={barRef} onClick={toggleNav}><FaBars className={styles.bars}/></button>
            <div ref={listRef} className={`${active? '':styles.hidden}`}>
                <ul>
                    <li><Link href='/'><p onClick={toggleNav}>HOME</p></Link></li>
                    <li><Link href='/projects'><p onClick={toggleNav}>PROJECTS</p></Link></li>
                    <li><Link href='/about'><p onClick={toggleNav}>ABOUT</p></Link></li>
                </ul>
            </div>   
        </div>
    )
}

export default Nav
