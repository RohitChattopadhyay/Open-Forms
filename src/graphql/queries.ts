/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getResponse = /* GraphQL */ `
  query GetResponse($id: ID!) {
    getResponse(id: $id) {
      formCreator
      id
      formID
      answers {
        question
        answer
      }
      createdAt
    }
  }
`;
export const listResponses = /* GraphQL */ `
  query ListResponses(
    $filter: ModelResponseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listResponses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        formCreator
        id
        formID
        answers {
          question
          answer
        }
        createdAt
      }
      nextToken
    }
  }
`;
export const getForm = /* GraphQL */ `
  query GetForm($id: ID!) {
    getForm(id: $id) {
      id
      meta {
        description
        title
      }
      isActive
      questions {
        type
        title
        description
        isRequired
        options
      }
      responses {
        items {
          formCreator
          id
          formID
          createdAt
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listForms = /* GraphQL */ `
  query ListForms(
    $filter: ModelFormFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listForms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        meta {
          description
          title
        }
        isActive
        questions {
          type
          title
          description
          isRequired
          options
        }
        responses {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
