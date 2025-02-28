'use client'
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useState } from 'react'
import gsap from 'gsap'

import { useGSAP } from '@gsap/react'

import Cards from '@/components/molecules/cards/Cards'
import Modal from '@/components/molecules/modal/Modal'
import styles from './ModelPage.module.scss'

interface ModelPageProps {
    data: any
}

export default function ModelPage({ data }: ModelPageProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [selectedProject, setSelectedProject] = useState(null)
    const containerRef = useRef<HTMLDivElement>(null)

    const handleClickOpenModal = (project: any) => {
        setIsOpen(true)
        setSelectedProject(project)
    }

    const handleClickCloseModal = () => {
        setSelectedProject(null)
        setIsOpen(false)
    }

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            handleClickCloseModal()
        }
    }

    useGSAP(() => {
        if (!containerRef.current) return
        const cards = containerRef?.current?.querySelectorAll(`.${styles.card}`)
        console.log('cards', cards)
        if (cards) {
            gsap.fromTo(
                cards,
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    ease: 'back.out(1.7)',
                    stagger: 0.1,
                }
            )
        }
    }, [data])
    return (
        <main className={styles.model} ref={containerRef}>
            <section className={styles.containerCards}>
                {data.map((card: any, index: number) => (
                    <Cards
                        key={index}
                        className={styles.card}
                        src={card.fields?.imgCover?.[0]?.original_secure_url}
                        alt="toto"
                        title={card.fields.title}
                        onClick={() => handleClickOpenModal(data[index])}
                    />
                ))}
            </section>
            {isOpen && selectedProject && (
                <>
                    <div
                        className={styles.backdrop}
                        onClick={handleBackdropClick}
                    />
                    <Modal
                        onClick={handleClickCloseModal}
                        data={selectedProject}
                    />
                </>
            )}
        </main>
    )
}
