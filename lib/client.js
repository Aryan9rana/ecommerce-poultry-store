import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


export const client =sanityClient
({
    projectId: 'du9o5icy',
    dataset: 'production',
    apiVersion: '2022-11-23',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
    ignoreBrowserTokenWarning: true
 }
);

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);