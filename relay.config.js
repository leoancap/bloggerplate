module.exports = {
  src: "./src", // Path to the folder containing your ReScript files
  schema: "./schema.gql", // Path to the schema.graphql you've exported from your API. Don't know what this is? It's a saved introspection of what your schema looks like. You can run `npx get-graphql-schema http://path/to/my/graphql/server > schema.graphql` in your root to generate it
  artifactDirectory: "./src/__generated__/rescript-relay", // The directory where all generated files will be emitted
};
