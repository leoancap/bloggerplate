import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLList,
} from "graphql";

// @ts-ignore
import { connectionArgs, connectionFromArray } from "graphql-relay";

import { postItems } from "./db";
import { paginate } from "./utils";

import {
  nodeField,
  postsPaginatedType,
  postItemType,
  postConnection,
} from "./graphqlTypes";

import { mutationType } from "./mutations";
import { PaginatedList, PostItem } from "./types";

let queryType = new GraphQLObjectType({
  name: "Query",
  fields: () => ({
    node: nodeField,
    postsConnection: {
      type: new GraphQLNonNull(postConnection.connectionType),
      args: connectionArgs,
      resolve(_, args, __) {
        return connectionFromArray(postItems, args);
      },
    },
    posts: {
      type: new GraphQLNonNull(postsPaginatedType),
      args: {
        limit: {
          type: new GraphQLNonNull(GraphQLInt),
        },
        offset: {
          type: new GraphQLNonNull(GraphQLInt),
        },
      },
      resolve(_, args, __): PaginatedList<PostItem> {
        const offset = parseInt(args.offset, 10);
        const limit = parseInt(args.limit, 10);

        return paginate(offset, limit, postItems);
      },
    },
    allPosts: {
      type: new GraphQLNonNull(
        new GraphQLList(new GraphQLNonNull(postItemType))
      ),
      resolve(): PostItem[] {
        return postItems;
      },
    },
  }),
});

export let schema = new GraphQLSchema({
  query: queryType,
  mutation: mutationType,
});
