const blogQuery = `{
    allStrapiPosts {
      edges{
          node{
        id
        childSlug{
          internal{
            content
          }
        }
        preview {
          titulo
          featuredImage{
            url
          }
        }
      }
    }
    }
  }`

function pageToAlgoliaRecord({
  node: {
    id,
    childSlug: { internal: content },
    preview: {
      titulo,
      featuredImage: { url },
    },
  },
}) {
  return {
    objectID: id,
    content,
    titulo,
    url,
  }
}

const indexName = "blog"

const queries = [
  {
    query: blogQuery,
    transformer: ({ data }) =>
      data.allStrapiPosts.edges.map(pageToAlgoliaRecord),
    indexName,
    settings: { attributesToSnippet: [`excerpt:20`] },
  },
]

module.exports = queries
