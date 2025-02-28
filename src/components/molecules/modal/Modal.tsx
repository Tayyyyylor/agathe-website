/* eslint-disable @typescript-eslint/no-explicit-any */
'use client' // Assurez-vous que ce composant est rendu côté client
import React from 'react'
import styles from './Modal.module.scss'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react' // Importez Swiper
import { Navigation, Pagination } from 'swiper/modules' // Importez les modules nécessaires
import 'swiper/css' // Styles de base de Swiper
import 'swiper/css/navigation' // Styles pour la navigation
import 'swiper/css/pagination' // Styles pour la pagination

interface ModalProps {
    title: string
    onClick: () => void
    data: any
}

export default function Modal({ title, onClick, data }: ModalProps) {
    return (
        <section className={styles.modal}>
            <button className={styles.close} onClick={onClick}>
                X
            </button>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.imagesContainer}>
                {/* Utilisation de Swiper pour le slider */}
                <Swiper
                    modules={[Navigation, Pagination]} // Modules activés
                    spaceBetween={10} // Espace entre les slides
                    slidesPerView={1} // Nombre de slides visibles à la fois
                    navigation // Activer la navigation (flèches)
                    pagination={{ clickable: true }} // Activer la pagination (points)
                    loop // Activer le mode boucle
                    className={styles.swiperContainer}
                >
                    {data.fields.img.map((img: any, index: number) => (
                        <SwiperSlide key={index} className={styles.swiperSlide}>
                            <div className={styles.imgContainer}>
                                <Image
                                    src={img.original_secure_url}
                                    width={800} // Ajustez la taille selon vos besoins
                                    height={600}
                                    layout="responsive"
                                    alt={`Image ${index + 1}`}
                                    className={styles.image}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}
