'use client'
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

import styles from './Homepage.module.scss'

export default function Homepage({ data }: any) {
    const [currentIndex, setCurrentIndex] = useState<number>(0)
    const [, setCurrentTitle] = useState<string>('')
    const [, setIsTransitioning] = useState<boolean>(false)
    const imageRef = useRef<HTMLDivElement>(null)

    const sortedData = React.useMemo(() => {
        return [...data].sort((a, b) => a.fields.order - b.fields.order)
    }, [data])

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
            setIsTransitioning(true)
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length)
                setIsTransitioning(false)
            }, 1000)
        }, 3000)

        return () => clearInterval(interval)
    }, [data.length])

    return (
        <main className={styles.homepage}>
            <section className={styles.imageContainer} ref={imageRef}>
                {sortedData.map((item, index) => (
                    <div key={index}>
                        <Image
                            src={item.fields.img[0].original_secure_url}
                            fill
                            unoptimized
                            quality={100}
                            alt=""
                            sizes="(max-width: 1920px) 100vw, 3840px"
                            priority={index === 0}
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
                    </div>
                ))}
            </section>
        </main>
    )
}
