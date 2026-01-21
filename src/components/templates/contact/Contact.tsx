'use client'
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Link from 'next/link'
import styles from './Contact.module.scss'

export default function Contact({ data }: any) {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!containerRef.current) return

        const links = containerRef.current.querySelectorAll(`.${styles.link}`)

        gsap.fromTo(
            links,
            { y: 100, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.5,
                ease: 'back.out(1.7)',
                stagger: 0.1,
            }
        )
    }, [])

    return (
        <main className={styles.contact} ref={containerRef}>
            <Link target="_blank" href={data.instagram} className={styles.link}>
                Instagram
            </Link>
            <Link target="_blank" href={data.imdb} className={styles.link}>
                ImDB
            </Link>
            <Link target="_blank" href={data.linkedIn} className={styles.link}>
                LinkedIn
            </Link>
            <Link href={`mailto:${data.mail}`} className={styles.link}>
                {data.mail}
            </Link>
        </main>
    )
}
