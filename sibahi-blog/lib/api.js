

import client from './sanity';

//when defining blogFields, 'slug': slug.current displays the current blog we navigate to.
// it defiines all the blogs and displays the current blog selected.
const blogFields = `
    title,
    subtitle,
    'slug': slug.current 
`

// this function gets the blogs we created on sanity.
// fetch function determines what to get from sanity.

export async function getAllBlogs() {
   const results = await client
    .fetch(`*[_type == "blog"]{${blogFields}}`);
    return results;
}