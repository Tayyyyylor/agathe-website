import Stands from '@/components/templates/stands/Stands'
import client from '@/utils/contentful'
import { Metadata } from 'next'
import { unstable_cache } from 'next/cache'

export const metadata: Metadata = {
    title: 'scenographie',
}

async function fetchScenoData() {
    try {
        const response = await client.getEntries({
            content_type: 'sceno',
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

const getCachedScenoData = unstable_cache(
    async () => fetchScenoData(),
    ['sceno-data'], // Cache key
    {
        revalidate: 3600, // 1h
        tags: ['sceno'], // Pour revalidation ciblée
    }
)

export default async function ScenographiePage() {
    const data = await getCachedScenoData()
    return <Stands data={data} />
}
