'use client'
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

import CounterSlide from '@/components/atoms/counterSlide/CounterSlide'
import styles from './Homepage.module.scss'

export default function Homepage({ data }: any) {
    const [currentIndex, setCurrentIndex] = useState<number>(0)
    const imageRef = useRef<HTMLDivElement>(null)

    const sortedData = React.useMemo(() => {
        return [...data].sort((a, b) => a.fields.order - b.fields.order)
    }, [data])

    // Hide vertical scroll
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
            <section className={styles.imageContainer} ref={imageRef}>
                <Image
                    key={currentIndex}
                    src={`${sortedData[currentIndex]?.fields?.img?.[0]?.original_secure_url}`}
                    alt=""
                    fill
                    className={styles.image}
                />
            </section>
            <CounterSlide
                className={styles.counter}
                data={sortedData}
                index={currentIndex}
                setIndex={setCurrentIndex}
            />
        </main>
    )
}
