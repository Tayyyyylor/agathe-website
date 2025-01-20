'use client'
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGSAP } from '@gsap/react'
import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import styles from './CounterSlide.module.scss'

interface CounterSlideProps {
    className?: string
    data: any
    index: number
    setIndex: (index: number) => void
}

export default function CounterSlide({
    className,
    data,
    index,
    setIndex,
}: CounterSlideProps) {
    const containerRef = useRef<HTMLDivElement | null>(null)
    const currentNumberRef = useRef<HTMLDivElement | null>(null)
    const hoverContainerRef = useRef<HTMLDivElement | null>(null)
    const numberOfPhotos = data.length
    const [currentOrder, setCurrentOrder] = useState(
        data[index]?.fields?.order || 0
    )
    const [firstLoad, setFirstLoad] = useState(true)
    const [isHover, setIsHover] = useState(false)

    useEffect(() => {
        if (firstLoad) {
            setFirstLoad(false)
        }
    }, [firstLoad])

    useGSAP(() => {
        if (firstLoad) return
        const current = currentNumberRef.current
        console.log('current', current)

        if (current) {
            // Timeline pour synchroniser les animations
            const tl = gsap.timeline()
            tl.to(current, {
                y: -100,
                opacity: 0,
                duration: 0.5,
                ease: 'power2.inOut',
                onComplete: () => {
                    setCurrentOrder(data[index]?.fields?.order || 0)
                    gsap.set(current, { y: 100, opacity: 0 })
                },
            })

            // Le nouveau numéro monte et devient visible
            tl.to(current, {
                y: 0,
                opacity: 1,
                duration: 0.5,
                ease: 'power2.inOut',
            })
        }
    }, [index])

    useGSAP(() => {
        if (!isHover || !hoverContainerRef.current) return

        const items = Array.from(hoverContainerRef.current.children)
        const tl = gsap.timeline()
        tl.fromTo(
            items,
            { x: 50, opacity: 0 }, // Position initiale
            {
                x: 0,
                opacity: 1,
                duration: 0.5,
                ease: 'power2.out',
                stagger: 0.1, // Décalage entre les chiffres
            }
        )
    }, [isHover])

    useGSAP(() => {
        if (!containerRef.current) return

        gsap.fromTo(
            containerRef.current,
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.7, ease: 'back.out(1.7)' }
        )
    })

    if (numberOfPhotos === 0 || index < 0 || index >= numberOfPhotos) {
        return null
    }

    const handleHoverEnter = () => {
        setIsHover(true)
    }

    const handleHoverLeave = () => {
        setIsHover(false)
    }

    const handleNumberClick = (i: number) => {
        setIndex(i)
    }
    console.log('currentOrder', currentOrder)
    return (
        <div
            className={`${styles.counter} ${className}`}
            ref={containerRef}
            onMouseEnter={handleHoverEnter}
            onMouseLeave={handleHoverLeave}
        >
            {isHover && (
                <div className={styles.counterHover} ref={hoverContainerRef}>
                    {data.map((_: null, i: number) => (
                        <div
                            key={i}
                            className={styles.counterHoverItem}
                            onClick={() => handleNumberClick(i)}
                        >
                            {i + 1}.
                        </div>
                    ))}
                </div>
            )}
            {!isHover && <div ref={currentNumberRef}>{currentOrder}</div>}
            <span>/{numberOfPhotos}</span>
        </div>
    )
}
