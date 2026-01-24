import * as contentful from 'contentful'

const serverClient = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN as string,
})

export default serverClient
