import Homepage from '@/components/templates/homepage/Homepage'
import client from '@/utils/contentful'

async function fetchSliderData() {
    try {
        const response = await client.getEntries({
            content_type: 'slider',
        })

        console.log('response', response)

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

export default async function Home() {
    const data = await fetchSliderData()

    return <Homepage data={data} />
}
