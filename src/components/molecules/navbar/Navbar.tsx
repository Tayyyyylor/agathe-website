'use client'
import React, { useState } from 'react'
import styles from './Navbar.module.scss'
import useMobile from '@/hooks/useMobile'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
    const isMobile = useMobile()
    const [isOpen, setIsOpen] = useState(false)

    const pathname = usePathname()
    const isActive = (path: string) => pathname?.includes(path)

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
                            décors
                        </Link>
                    </li>
                    <li>
                        <Link href="/photographie" onClick={handleClick}>
                            photographie
                        </Link>
                    </li>
                    <li>
                        <Link href="/scenographie" onClick={handleClick}>
                            scénographie
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
            <Link
                href="/decors"
                className={`${styles.link} ${
                    isActive('/decors') ? styles.active : ''
                }`}
            >
                décors
            </Link>
            <Link
                href="/photographie"
                className={`${styles.link} ${
                    isActive('/photographie') ? styles.active : ''
                }`}
            >
                photographie
            </Link>
            <Link
                href="/scenographie"
                className={`${styles.link} ${
                    isActive('/scenographie') ? styles.active : ''
                }`}
            >
                scénographie
            </Link>
            <Link
                href="/contact"
                className={`${styles.link} ${
                    isActive('/contact') ? styles.active : ''
                }`}
            >
                contact
            </Link>
        </nav>
    )
}
