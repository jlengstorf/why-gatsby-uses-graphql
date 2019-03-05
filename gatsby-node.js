exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const results = await graphql(`
    {
      allProductsJson {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  if (results.error) {
    console.error("Something went wrong!")
    return
  }

  results.data.allProductsJson.edges.forEach(edge => {
    const product = edge.node

    createPage({
      path: `/product/${product.slug}/`,
      component: require.resolve("./src/templates/product-graphql.js"),
      context: {
        slug: product.slug,
      },
    })
  })
}
