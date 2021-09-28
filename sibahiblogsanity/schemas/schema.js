// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  
  types: schemaTypes.concat([ // schema types can be found on: sanity.io/docs/schema-types
    {
      name: 'blog',
      type: 'document',
      title: 'Blog', // It shows up as the header 
      fields: [
        {
          name: 'title', // the name is how we access the data. here it's under the key of title
          type: 'string',
          title: 'Title' 
        }, 
        {
          name: 'sibtitle',
          type: 'string',
          title: 'Subtitle'
        }, 
        {
          name: 'slug',
        type: 'slug',
        title: 'Slug'
        }
      ]
    }
  ]),
})
