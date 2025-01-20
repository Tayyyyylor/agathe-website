'use client'

/* eslint-disable @typescript-eslint/no-explicit-any */
import Cards from '@/components/molecules/cards/Cards'
import React, { useState } from 'react'
import styles from './ModelPage.module.scss'
import Modal from '@/components/molecules/modal/Modal'

interface ModelPageProps {
    data: any
}

export default function ModelPage({ data }: ModelPageProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [selectedProject, setSelectedProject] = useState(null)

    const handleClickOpenModal = (project: any) => {
        setIsOpen(true)
        setSelectedProject(project)
    }

    const handleClickCloseModal = () => {
        setSelectedProject(null)
        setIsOpen(false)
    }
    return (
        <main className={styles.model}>
            <section className={styles.containerCards}>
                {data.map((card: any, index: number) => (
                    <Cards
                        key={index}
                        src={card.fields?.imgCover?.[0]?.original_secure_url}
                        alt="toto"
                        title={card.fields.title}
                        onClick={() => handleClickOpenModal(data[index])}
                    />
                ))}
            </section>
            {isOpen && selectedProject && (
                <Modal
                    title="toto"
                    onClick={handleClickCloseModal}
                    data={selectedProject}
                />
            )}
        </main>
    )
}
