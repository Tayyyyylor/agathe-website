'use client'
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

import CounterSlide from '@/components/atoms/counterSlide/CounterSlide'
import styles from './Homepage.module.scss'

export default function Homepage({ data }: any) {
    const [currentIndex, setCurrentIndex] = useState<number>(0)
    const [currentTitle, setCurrentTitle] = useState<string>('')
    const [, setIsTransitioning] = useState<boolean>(false)
    const imageRef = useRef<HTMLDivElement>(null)

    const sortedData = React.useMemo(() => {
        return [...data].sort((a, b) => a.fields.order - b.fields.order)
    }, [data])

    // Hide vertical scroll
    useEffect(() => {
        document.body.style.overflow = 'hidden'
        document.body.style.height = '100%'

        return () => {
            document.body.style.overflow = ''
            document.body.style.height = ''
        }
    }, [])

    useEffect(() => {
        setCurrentTitle(sortedData[currentIndex]?.fields?.alt || '')
    }, [currentIndex, sortedData])

    useEffect(() => {
        const interval = setInterval(() => {
            setIsTransitioning(true) // Début de la transition
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length)
                setIsTransitioning(false) // Fin de la transition
            }, 1000) // Durée de la transition (1 seconde)
        }, 4000) // Intervalle entre les changements d'images (4 secondes)

        return () => clearInterval(interval)
    }, [data.length])

    return (
        <main className={styles.homepage}>
            <section className={styles.imageContainer} ref={imageRef}>
                {sortedData.map((item, index) => (
                    <div key={index}>
                        <Image
                            src={`${item?.fields?.img?.[0]?.original_secure_url}`}
                            alt=""
                            fill
                            className={`${styles.image} ${
                                index === currentIndex
                                    ? styles.active
                                    : styles.inactive
                            }`}
                            style={{
                                transition: 'opacity 1s ease-in-out',
                                opacity: index === currentIndex ? 1 : 0,
                            }}
                        />
                        {index === currentIndex && (
                            <p className={styles.title}>{currentTitle}</p>
                        )}
                    </div>
                ))}
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
