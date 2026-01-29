import { Metadata } from 'next'
import client from '@/utils/contentful'
import PdfViewer from '@/components/molecules/pdfViewver/PdfViewer'
import { Asset, Entry, EntrySkeletonType } from 'contentful'

export const metadata: Metadata = {
    title: 'CV Agathe',
}

export const revalidate = 0

interface CvSkeleton extends EntrySkeletonType {
    contentTypeId: 'cv'
    fields: {
        cvPdf: Asset
    }
}

async function fetchCvData(): Promise<
    Entry<CvSkeleton, undefined, string>[] | null
> {
    try {
        const response = await client.getEntries<CvSkeleton>({
            content_type: 'cv',
        })
        return response.items.length > 0 ? response.items : null
    } catch (error) {
        console.error('Error fetching data from Contentful:', error)
        return null
    }
}

export default async function Cv() {
    const data = await fetchCvData()

    if (!data || data.length === 0) {
        return <div>CV non disponible</div>
    }

    const cvEntry = data[0]
    const pdfAsset = cvEntry.fields.cvPdf as Asset<undefined, string>
    const pdfUrl = pdfAsset.fields?.file?.url

    if (!pdfUrl) {
        return <div>URL du CV introuvable</div>
    }

    const finalUrl = pdfUrl.startsWith('//') ? `https:${pdfUrl}` : pdfUrl

    return <PdfViewer pdfUrl={finalUrl} />
}
