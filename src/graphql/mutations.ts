/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createForm = /* GraphQL */ `
  mutation CreateForm(
    $input: CreateFormInput!
    $condition: ModelFormConditionInput
  ) {
    createForm(input: $input, condition: $condition) {
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
export const updateForm = /* GraphQL */ `
  mutation UpdateForm(
    $input: UpdateFormInput!
    $condition: ModelFormConditionInput
  ) {
    updateForm(input: $input, condition: $condition) {
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
export const deleteForm = /* GraphQL */ `
  mutation DeleteForm(
    $input: DeleteFormInput!
    $condition: ModelFormConditionInput
  ) {
    deleteForm(input: $input, condition: $condition) {
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
export const updateResponse = /* GraphQL */ `
  mutation UpdateResponse(
    $input: UpdateResponseInput!
    $condition: ModelResponseConditionInput
  ) {
    updateResponse(input: $input, condition: $condition) {
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
export const deleteResponse = /* GraphQL */ `
  mutation DeleteResponse(
    $input: DeleteResponseInput!
    $condition: ModelResponseConditionInput
  ) {
    deleteResponse(input: $input, condition: $condition) {
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
export const createResponse = /* GraphQL */ `
  mutation CreateResponse(
    $input: CreateResponseInput!
    $condition: ModelResponseConditionInput
  ) {
    createResponse(input: $input, condition: $condition) {
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
