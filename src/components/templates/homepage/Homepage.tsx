'use client'

/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react'
import styles from './Homepage.module.scss'
import Image from 'next/image'

export default function Homepage({ data }: any) {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length)
        }, 4000)

        return () => clearInterval(interval)
    }, [data.length])

    return (
        <main className={styles.homepage}>
            <section className={styles.imageContainer}>
                <Image
                    key={currentIndex}
                    src={`${data[currentIndex]?.fields?.img?.[0]?.original_secure_url}`}
                    alt=""
                    fill
                    className={styles.image}
                />
            </section>
        </main>
    )
}
