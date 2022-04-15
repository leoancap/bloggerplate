import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLID,
  GraphQLList,
} from "graphql";

import {
  fromGlobalId,
  globalIdField,
  nodeDefinitions,
  connectionDefinitions,
  // @ts-ignore
} from "graphql-relay";

import { data } from "./db";

// @ts-ignore
export let { nodeInterface, nodeField } = nodeDefinitions(
  (globalId: string) => {
    let { type, id } = fromGlobalId(globalId);
    // @ts-ignore
    let source = data[type];

    if (source) {
      return source.find(
        (item: { id: number }) => item.id === parseInt(id, 10)
      );
    }

    return null;
  },
  // @ts-ignore
  (obj: { type: string }) => {
    switch (obj.type) {
      case "PostItem":
        return postItemType;
    }
  }
);

const paginationDefinitions = (objectType: GraphQLObjectType, name: string) =>
  new GraphQLObjectType({
    name,
    fields: () => ({
      total: { type: new GraphQLNonNull(GraphQLInt) },
      hasNextPage: { type: new GraphQLNonNull(GraphQLBoolean) },
      results: {
        type: new GraphQLNonNull(
          new GraphQLList(new GraphQLNonNull(objectType))
        ),
      },
    }),
  });

export let postItemType: GraphQLObjectType = new GraphQLObjectType({
  name: "PostItem",
  fields: () => ({
    id: globalIdField(),
    dbId: {
      type: new GraphQLNonNull(GraphQLID),
      resolve: (obj) => obj.id,
    },
    title: { type: new GraphQLNonNull(GraphQLString) },
    body: { type: new GraphQLNonNull(GraphQLString) },
  }),
  interfaces: [nodeInterface],
});

export let postConnection = connectionDefinitions({ nodeType: postItemType });

export let postsPaginatedType: GraphQLObjectType = paginationDefinitions(
  postItemType,
  "PostsPaginated"
);
