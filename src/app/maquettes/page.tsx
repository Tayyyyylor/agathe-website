import { Metadata } from 'next'
import client from '@/utils/contentful'
import Maquettes from '@/components/templates/maquettesPage/Maquettes'
import { unstable_cache } from 'next/cache'

export const metadata: Metadata = {
    title: 'maquettes',
}

async function fetchMaquettesData() {
    try {
        const response = await client.getEntries({
            content_type: 'maquettes',
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

const getCachedMaquettesData = unstable_cache(
    async () => fetchMaquettesData(),
    ['decors-data'], // Cache key
    {
        revalidate: 3600, // 1h
        tags: ['decors'], // Pour revalidation ciblée
    }
)

export default async function PhotographiesPage() {
    const data = await getCachedMaquettesData()

    return <Maquettes data={data} />
}
