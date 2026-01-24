'use client'
import { FaFilePdf } from 'react-icons/fa'
import styles from './PdfViewer.module.scss'

type PDFViewerProps = {
    pdfUrl: string
}

export default function PDFViewer({ pdfUrl }: PDFViewerProps) {
    console.log('pdfUrl :>> ', pdfUrl)

    return (
        <div className={styles.container}>
            <a href="/api/cv" className={styles.button}>
                <FaFilePdf size={30} />
                Télécharger CV PDF
            </a>
            <iframe
                src={`${pdfUrl}#view=FitH&toolbar=0&navpanes=0`}
                className={styles.iframe}
                title="CV PDF"
            />
        </div>
    )
}
