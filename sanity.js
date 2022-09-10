import {
     createCurrentUserHook,
     createClient,
} from "next-sanity";

import imageUrlBuilder from '@sanity/image-url'


export const config = {
    /**
     * Find your project ID and dataset in `sanity.json` in your studio project.
     * These are considered “public”, but you can use environment variables
     * if you want differ between local dev and production.
     *
     * https://nextjs.org/docs/basic-features/environment-variables
     **/
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion: "2022-09-10", // or today's date for latest
    /**
     * Set useCdn to `false` if your application require the freshest possible
     * data always (potentially slightly slower and a bit more expensive).
     * Authenticated request (like preview) will always bypass the CDN
     **/
    useCdn: process.env.NODE_ENV === "production",
  };


// This is used to make queries to the sanity backend
export const sanityClient = createClient(config);

//Heper fucntion for generatin image URLs with only the asse reference 
export const urlFor = (source) => imageUrlBuilder(config).image(source);

