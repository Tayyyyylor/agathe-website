'use client'

/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react'
import styles from './Homepage.module.scss'
import Image from 'next/image'
import CounterSlide from '@/components/atoms/counterSlide/CounterSlide'

export default function Homepage({ data }: any) {
    const [currentIndex, setCurrentIndex] = useState<number>(0)

    useEffect(() => {
        // Ajoute directement des styles inline au body
        document.body.style.overflow = 'hidden'
        document.body.style.height = '100%'

        return () => {
            // Nettoie les styles inline lorsque le composant est démonté
            document.body.style.overflow = ''
            document.body.style.height = ''
        }
    }, [])

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
            <CounterSlide
                className={styles.counter}
                data={data}
                index={currentIndex}
                setIndex={setCurrentIndex}
            />
        </main>
    )
}
