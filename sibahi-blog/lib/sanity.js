import sanityClient from '@sanity/client';


const options = {
    dataset: process.env.SANITY_DATASET_NAME,
    projectId: process.env.SANITY_PROJECT_ID,
    useCdn: process.env.NODE_ENV === 'production'
    // useCdn === true, gives you fast response, it will get you 
    // cashed data
    // useCdn === false, gives you little slower response, but
    // latest data
}

export default sanityClient(options);