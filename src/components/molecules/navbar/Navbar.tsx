'use client'
import React, { useState } from 'react'
import styles from './Navbar.module.scss'
import useMobile from '@/hooks/useMobile'
import Link from 'next/link'

export default function Navbar() {
    const isMobile = useMobile()
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const handleClick = () => {
        setIsOpen(false)
    }

    return isMobile ? (
        <div className={styles.burgerMenu}>
            <div className={styles.burgerIcon} onClick={toggleMenu}>
                <span
                    className={`${styles.line} ${isOpen ? styles.crossLine1 : ''}`}
                />
                <span
                    className={`${styles.line} ${isOpen ? styles.crossLine2 : ''}`}
                />
                <span
                    className={`${styles.line} ${isOpen ? styles.crossLine3 : ''}`}
                />
            </div>

            <nav className={`${styles.menu} ${isOpen ? styles.menuOpen : ''}`}>
                <ul>
                    <li>
                        <Link href="/decors" onClick={handleClick}>
                            decors
                        </Link>
                    </li>
                    <li>
                        <Link href="/photographie" onClick={handleClick}>
                            photographie
                        </Link>
                    </li>
                    <li>
                        <Link href="/scenographie" onClick={handleClick}>
                            scenographie
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" onClick={handleClick}>
                            contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    ) : (
        <nav className={styles.nav}>
            <ul className={styles.navContainer}>
                <li>
                    <Link href="/decors">decors</Link>
                </li>
                <li>
                    <Link href="/photographie">photographie</Link>
                </li>
                <li>
                    <Link href="/scenographie">scenographie</Link>
                </li>
                <li>
                    <Link href="/contact">contact</Link>
                </li>
            </ul>
        </nav>
    )
}
