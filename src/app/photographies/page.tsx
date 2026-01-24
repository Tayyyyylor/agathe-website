import { Metadata } from 'next'
import client from '@/utils/contentful'
import PhotoPage from '@/components/templates/photographiesPage/PhotoPage'
import { unstable_cache } from 'next/cache'

export const metadata: Metadata = {
    title: 'photographies',
}

async function fetchPhotosData() {
    try {
        const response = await client.getEntries({
            content_type: 'photographies',
            order: ['-fields.order'],
        })

        if (response.items.length > 0) {
            return response.items
        } else {
            return null
        }
    } catch (error) {
        console.error('Error fetching data from Contentful:', error)
        return null
    }
}

const getCachedPhotosData = unstable_cache(
    async () => fetchPhotosData(),
    ['photographies-data'], // Cache key
    {
        revalidate: 3600, // 1h
        tags: ['photographies'], // Pour revalidation ciblée
    }
)

export default async function PhotographiesPage() {
    const data = await getCachedPhotosData()

    return <PhotoPage data={data} />
}
