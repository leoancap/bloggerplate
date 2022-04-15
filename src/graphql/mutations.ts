// @ts-ignore
import { mutationWithClientMutationId, fromGlobalId } from "graphql-relay";
import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLID,
} from "graphql";
import { postItemType, postConnection } from "./graphqlTypes";
import { postItems } from "./db";
import { PostItem } from "./types";

let addPostItemMutation = mutationWithClientMutationId({
  name: "AddPostItem",
  inputFields: () => ({
    title: {
      type: new GraphQLNonNull(GraphQLString),
    },
    body: {
      type: new GraphQLNonNull(GraphQLString),
    },
  }),
  outputFields: () => ({
    addedPostItem: {
      type: postItemType,
    },
    addedPostItemEdge: {
      type: postConnection.edgeType,
    },
  }),
  mutateAndGetPayload: (post: PostItem) => addPost(post),
});

let addPost = (post: PostItem) => {
  let lastPostItem = postItems.slice().pop();
  let nextIndex = lastPostItem ? lastPostItem.id + 1 : 1;

  let newPost: PostItem = {
    id: nextIndex.toString(),
    type: "PostItem",
    title: post.title,
    body: post.body,
  };

  postItems.push(newPost);
  return {
    addedPostItem: newPost,
    addedPostItemEdge: {
      cursor: "",
      node: newPost,
    },
  };
};

let updatePostItemMutation = mutationWithClientMutationId({
  name: "UpdatePostItem",
  inputFields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    title: {
      type: new GraphQLNonNull(GraphQLString),
    },
    body: {
      type: new GraphQLNonNull(GraphQLString),
    },
  }),
  outputFields: () => ({
    updatedPostItem: {
      type: postItemType,
    },
  }),
  mutateAndGetPayload: (post: PostItem) => {
    return updateTodo(post);
  },
});

let updateTodo = ({ title, body, id }: PostItem) => {
  let { type, id: postItemId } = fromGlobalId(id);
  let targetPostItem = postItems.find((t) => t.id === postItemId);

  if (!targetPostItem || type !== "PostItem") {
    return {
      updatedPostItem: null,
    };
  }

  targetPostItem.title = title;
  targetPostItem.body = body;

  return {
    updatedPostItem: targetPostItem,
  };
};

let deletePostItemMutation = mutationWithClientMutationId({
  name: "DeletePostItem",
  inputFields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  }),
  outputFields: () => ({
    deletedPostItemId: {
      type: GraphQLID,
    },
  }),
  mutateAndGetPayload: (post: PostItem) => {
    return deletePost(post);
  },
});

let deletePost = (post: PostItem) => {
  let { type, id: postItemId } = fromGlobalId(post.id);
  let targetPostItemIndex = postItems.findIndex((t) => t.id === postItemId);

  if (targetPostItemIndex === -1 || type !== "PostItem") {
    return {
      deleteTodoItemId: null,
    };
  }

  postItems.splice(targetPostItemIndex, 1);

  return {
    deletedPostItemId: post.id,
  };
};

export let mutationType = new GraphQLObjectType({
  name: "Mutation",
  fields: () => ({
    addPostItem: addPostItemMutation,
    updatePostItem: updatePostItemMutation,
    deletePostItem: deletePostItemMutation,
  }),
});
