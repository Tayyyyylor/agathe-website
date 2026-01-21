import Contact from '@/components/templates/contact/Contact'
import client from '@/utils/contentful'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'contact',
}

async function fetchContactData() {
    try {
        const response = await client.getEntries({
            content_type: 'contact',
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

export default async function ContactPage() {
    const data = await fetchContactData()
    return <Contact data={data?.[0]?.fields} />
}
