import Homepage from '@/components/templates/homepage/Homepage'
import client from '@/utils/contentful'
import { unstable_cache } from 'next/cache'

async function fetchSliderData() {
    try {
        const response = await client.getEntries({
            content_type: 'slider',
            order: ['fields.order'],
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

const getCachedSliderData = unstable_cache(
    async () => fetchSliderData(),
    ['decors-data'], // Cache key
    {
        revalidate: 3600, // 1h
        tags: ['decors'], // Pour revalidation ciblée
    }
)

export default async function Home() {
    const data = await getCachedSliderData()

    return <Homepage data={data} />
}
