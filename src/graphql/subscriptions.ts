/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateForm = /* GraphQL */ `
  subscription OnCreateForm($owner: String!) {
    onCreateForm(owner: $owner) {
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
export const onUpdateForm = /* GraphQL */ `
  subscription OnUpdateForm($owner: String!) {
    onUpdateForm(owner: $owner) {
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
export const onDeleteForm = /* GraphQL */ `
  subscription OnDeleteForm($owner: String!) {
    onDeleteForm(owner: $owner) {
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
export const onUpdateResponse = /* GraphQL */ `
  subscription OnUpdateResponse {
    onUpdateResponse {
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
export const onDeleteResponse = /* GraphQL */ `
  subscription OnDeleteResponse {
    onDeleteResponse {
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
export const onCreateResponse = /* GraphQL */ `
  subscription OnCreateResponse {
    onCreateResponse {
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
