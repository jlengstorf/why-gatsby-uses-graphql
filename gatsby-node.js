exports.createPages = ({ actions: { createPage } }) => {
  createPage({
    path: "/page-with-context/",
    component: require.resolve("./src/templates/with-context.js"),
    context: {
      title: "We Don’t Need No Stinkin’ GraphQL",
      content: "<p>This is page content.</p><p>No GraphQL required!</p>",
    },
  })
}
