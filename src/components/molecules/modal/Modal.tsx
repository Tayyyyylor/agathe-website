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
import useMobile from '@/hooks/useMobile'

interface ModalProps {
    onClick: () => void
    data: any
}

export default function Modal({ data, onClick }: ModalProps) {
    const isMobile = useMobile()

    return (
        <section className={styles.modal}>
            <div className={styles.imagesContainer}>
                {!isMobile ? (
                    <Swiper
                        modules={[Navigation, Pagination]} // Modules activés
                        spaceBetween={10} // Espace entre les slides
                        slidesPerView={1} // Nombre de slides visibles à la fois
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        loop // Activer le mode boucle
                        className={styles.swiperContainer}
                    >
                        {data.fields.img.map((img: any, index: number) => (
                            <SwiperSlide
                                key={index}
                                className={styles.swiperSlide}
                            >
                                <div className={styles.imgContainer}>
                                    <Image
                                        src={img.original_secure_url}
                                        width={800} // Ajustez la taille selon vos besoins
                                        height={600}
                                        alt={`Image ${index + 1}`}
                                        className={styles.image}
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                        <div
                            className={`swiper-button-prev ${styles.arrowLeft}`}
                        />
                        <div
                            className={`swiper-button-next ${styles.arrowRight}`}
                        />
                    </Swiper>
                ) : (
                    <div className={styles.mobileContainer}>
                        <Image
                            width={50}
                            height={50}
                            alt="cross"
                            src="/whiteCross.png"
                            className={styles.back}
                            onClick={onClick}
                        />
                        {data.fields.img.map((img: any, index: number) => (
                            <div key={index} className={styles.mobileSlide}>
                                <div className={styles.imgContainer}>
                                    <Image
                                        src={img.original_secure_url}
                                        width={800} // Ajustez la taille selon vos besoins
                                        height={600}
                                        alt={`Image ${index + 1}`}
                                        className={styles.image}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}
