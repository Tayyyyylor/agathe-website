import Decors from '@/components/templates/decors/Decors'
import client from '@/utils/contentful'
import { Metadata } from 'next'
import { unstable_cache } from 'next/cache'

export const metadata: Metadata = {
    title: 'decors',
}

async function fetchDecorsData() {
    try {
        const response = await client.getEntries({
            content_type: 'decors',
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

const getCachedDecorsData = unstable_cache(
    async () => fetchDecorsData(),
    ['decors-data'],
    {
        revalidate: 3600,
        tags: ['decors'],
    }
)

export default async function DecorsPage() {
    const data = await getCachedDecorsData()
    return <Decors data={data} />
}
