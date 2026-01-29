/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React, { useEffect, useRef } from 'react'
import styles from './Modal.module.scss'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Keyboard } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import useMobile from '@/hooks/useMobile'
import { IoClose } from 'react-icons/io5'

interface ModalProps {
    onClick: () => void
    data: any
}

export default function Modal({ data, onClick }: ModalProps) {
    const isMobile = useMobile()
    const modalRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (modalRef.current) {
            modalRef.current.scrollTo(0, 0)
        }
    }, [])

    if (isMobile) {
        return (
            <section className={styles.modal} ref={modalRef}>
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
                            <Image
                                src={img.original_secure_url}
                                width={800}
                                height={600}
                                alt={`Image ${index + 1}`}
                                className={styles.image}
                            />
                        </div>
                    ))}
                </div>
            </section>
        )
    }

    return (
        <section className={styles.modalDesktop} onClick={onClick}>
            <div
                className={styles.modalContent}
                onClick={(e) => e.stopPropagation()}
            >
                <button className={styles.closeButton} onClick={onClick}>
                    <IoClose size={32} />
                </button>

                <Swiper
                    modules={[Navigation, Pagination, Keyboard]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    keyboard={{ enabled: true }}
                    loop={data.fields.img.length > 1}
                    className={styles.swiperContainer}
                >
                    {data.fields.img.map((img: any, index: number) => (
                        <SwiperSlide key={index}>
                            <div className={styles.slideContent}>
                                <Image
                                    src={img.original_secure_url}
                                    fill
                                    sizes="90vw"
                                    alt={`Image ${index + 1}`}
                                    className={styles.imageDesktop}
                                    unoptimized
                                    quality={100}
                                    priority={index === 0}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}
