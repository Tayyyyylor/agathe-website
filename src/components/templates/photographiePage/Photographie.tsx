'use client'

/* eslint-disable @typescript-eslint/no-explicit-any */
import Cards from '@/components/molecules/cards/Cards'
import React, { useState } from 'react'
import styles from './Photographie.module.scss'
import Modal from '@/components/molecules/modal/Modal'
// import useContentful from '@/hooks/useContentful'

export default function Photographie({ data }: any) {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [selectedProject, setSelectedProject] = useState(null)

    const handleClickOpenModal = (project: any) => {
        console.log('project', project)
        setIsOpen(true)
        setSelectedProject(project)
    }

    console.log('selectedProject', selectedProject)

    const handleClickCloseModal = () => {
        setSelectedProject(null)
        setIsOpen(false)
    }
    return (
        <main className={styles.photographie}>
            <section className={styles.containerCards}>
                {data.map((card: any, index: number) => {
                    console.log('card', card)
                    return (
                        <Cards
                            key={index}
                            src={
                                card.fields?.imgCover?.[0]?.original_secure_url
                            }
                            alt="toto"
                            title={card.fields.title}
                            onClick={() => handleClickOpenModal(data[index])}
                        />
                    )
                })}
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
