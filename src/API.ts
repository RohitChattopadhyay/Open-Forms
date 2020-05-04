/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateFormInput = {
  id?: string | null,
  meta?: FormMetadataInput | null,
  isActive?: boolean | null,
  questions?: Array< QuestionInput > | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type FormMetadataInput = {
  description?: string | null,
  title?: string | null,
};

export type QuestionInput = {
  type: QuestionType,
  title: string,
  description?: string | null,
  isRequired?: boolean | null,
  options?: Array< string | null > | null,
};

// Supported types of questions
export enum QuestionType {
  ShortAns = "ShortAns",
  LongAns = "LongAns",
  SingleChoice = "SingleChoice",
  MultipleChoice = "MultipleChoice",
}


export type ModelFormConditionInput = {
  isActive?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelFormConditionInput | null > | null,
  or?: Array< ModelFormConditionInput | null > | null,
  not?: ModelFormConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateFormInput = {
  id: string,
  meta?: FormMetadataInput | null,
  isActive?: boolean | null,
  questions?: Array< QuestionInput > | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteFormInput = {
  id?: string | null,
};

export type UpdateResponseInput = {
  formCreator?: string | null,
  id: string,
  formID?: string | null,
  answers?: Array< AnswersInput > | null,
  createdAt?: string | null,
};

export type AnswersInput = {
  question: string,
  answer?: string | null,
};

export type ModelResponseConditionInput = {
  formCreator?: ModelStringInput | null,
  formID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelResponseConditionInput | null > | null,
  or?: Array< ModelResponseConditionInput | null > | null,
  not?: ModelResponseConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type DeleteResponseInput = {
  id?: string | null,
};

export type CreateResponseInput = {
  formCreator?: string | null,
  id?: string | null,
  formID: string,
  answers?: Array< AnswersInput > | null,
  createdAt?: string | null,
};

export type ModelResponseFilterInput = {
  formCreator?: ModelStringInput | null,
  id?: ModelIDInput | null,
  formID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelResponseFilterInput | null > | null,
  or?: Array< ModelResponseFilterInput | null > | null,
  not?: ModelResponseFilterInput | null,
};

export type ModelFormFilterInput = {
  id?: ModelIDInput | null,
  isActive?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelFormFilterInput | null > | null,
  or?: Array< ModelFormFilterInput | null > | null,
  not?: ModelFormFilterInput | null,
};

export type CreateFormMutationVariables = {
  input: CreateFormInput,
  condition?: ModelFormConditionInput | null,
};

export type CreateFormMutation = {
  createForm:  {
    __typename: "Form",
    id: string,
    // Contains the author,description,title of the form
    meta:  {
      __typename: "FormMetadata",
      description: string | null,
      title: string | null,
    } | null,
    isActive: boolean | null,
    questions:  Array< {
      __typename: "Question",
      type: QuestionType,
      title: string,
      description: string | null,
      isRequired: boolean | null,
      // Applicable for SingleChoice and MultipleChoice questions
      options: Array< string | null > | null,
    } > | null,
    responses:  {
      __typename: "ModelResponseConnection",
      items:  Array< {
        __typename: "Response",
        formCreator: string | null,
        id: string,
        formID: string,
        createdAt: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string | null,
    updatedAt: string | null,
    owner: string | null,
  } | null,
};

export type UpdateFormMutationVariables = {
  input: UpdateFormInput,
  condition?: ModelFormConditionInput | null,
};

export type UpdateFormMutation = {
  updateForm:  {
    __typename: "Form",
    id: string,
    // Contains the author,description,title of the form
    meta:  {
      __typename: "FormMetadata",
      description: string | null,
      title: string | null,
    } | null,
    isActive: boolean | null,
    questions:  Array< {
      __typename: "Question",
      type: QuestionType,
      title: string,
      description: string | null,
      isRequired: boolean | null,
      // Applicable for SingleChoice and MultipleChoice questions
      options: Array< string | null > | null,
    } > | null,
    responses:  {
      __typename: "ModelResponseConnection",
      items:  Array< {
        __typename: "Response",
        formCreator: string | null,
        id: string,
        formID: string,
        createdAt: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string | null,
    updatedAt: string | null,
    owner: string | null,
  } | null,
};

export type DeleteFormMutationVariables = {
  input: DeleteFormInput,
  condition?: ModelFormConditionInput | null,
};

export type DeleteFormMutation = {
  deleteForm:  {
    __typename: "Form",
    id: string,
    // Contains the author,description,title of the form
    meta:  {
      __typename: "FormMetadata",
      description: string | null,
      title: string | null,
    } | null,
    isActive: boolean | null,
    questions:  Array< {
      __typename: "Question",
      type: QuestionType,
      title: string,
      description: string | null,
      isRequired: boolean | null,
      // Applicable for SingleChoice and MultipleChoice questions
      options: Array< string | null > | null,
    } > | null,
    responses:  {
      __typename: "ModelResponseConnection",
      items:  Array< {
        __typename: "Response",
        formCreator: string | null,
        id: string,
        formID: string,
        createdAt: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string | null,
    updatedAt: string | null,
    owner: string | null,
  } | null,
};

export type UpdateResponseMutationVariables = {
  input: UpdateResponseInput,
  condition?: ModelResponseConditionInput | null,
};

export type UpdateResponseMutation = {
  updateResponse:  {
    __typename: "Response",
    formCreator: string | null,
    id: string,
    formID: string,
    answers:  Array< {
      __typename: "Answers",
      question: string,
      answer: string | null,
    } > | null,
    createdAt: string | null,
  } | null,
};

export type DeleteResponseMutationVariables = {
  input: DeleteResponseInput,
  condition?: ModelResponseConditionInput | null,
};

export type DeleteResponseMutation = {
  deleteResponse:  {
    __typename: "Response",
    formCreator: string | null,
    id: string,
    formID: string,
    answers:  Array< {
      __typename: "Answers",
      question: string,
      answer: string | null,
    } > | null,
    createdAt: string | null,
  } | null,
};

export type CreateResponseMutationVariables = {
  input: CreateResponseInput,
  condition?: ModelResponseConditionInput | null,
};

export type CreateResponseMutation = {
  createResponse:  {
    __typename: "Response",
    formCreator: string | null,
    id: string,
    formID: string,
    answers:  Array< {
      __typename: "Answers",
      question: string,
      answer: string | null,
    } > | null,
    createdAt: string | null,
  } | null,
};

export type GetResponseQueryVariables = {
  id: string,
};

export type GetResponseQuery = {
  getResponse:  {
    __typename: "Response",
    formCreator: string | null,
    id: string,
    formID: string,
    answers:  Array< {
      __typename: "Answers",
      question: string,
      answer: string | null,
    } > | null,
    createdAt: string | null,
  } | null,
};

export type ListResponsesQueryVariables = {
  filter?: ModelResponseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListResponsesQuery = {
  listResponses:  {
    __typename: "ModelResponseConnection",
    items:  Array< {
      __typename: "Response",
      formCreator: string | null,
      id: string,
      formID: string,
      answers:  Array< {
        __typename: "Answers",
        question: string,
        answer: string | null,
      } > | null,
      createdAt: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetFormQueryVariables = {
  id: string,
};

export type GetFormQuery = {
  getForm:  {
    __typename: "Form",
    id: string,
    // Contains the author,description,title of the form
    meta:  {
      __typename: "FormMetadata",
      description: string | null,
      title: string | null,
    } | null,
    isActive: boolean | null,
    questions:  Array< {
      __typename: "Question",
      type: QuestionType,
      title: string,
      description: string | null,
      isRequired: boolean | null,
      // Applicable for SingleChoice and MultipleChoice questions
      options: Array< string | null > | null,
    } > | null,
    responses:  {
      __typename: "ModelResponseConnection",
      items:  Array< {
        __typename: "Response",
        formCreator: string | null,
        id: string,
        formID: string,
        createdAt: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string | null,
    updatedAt: string | null,
    owner: string | null,
  } | null,
};

export type ListFormsQueryVariables = {
  filter?: ModelFormFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFormsQuery = {
  listForms:  {
    __typename: "ModelFormConnection",
    items:  Array< {
      __typename: "Form",
      id: string,
      // Contains the author,description,title of the form
      meta:  {
        __typename: "FormMetadata",
        description: string | null,
        title: string | null,
      } | null,
      isActive: boolean | null,
      questions:  Array< {
        __typename: "Question",
        type: QuestionType,
        title: string,
        description: string | null,
        isRequired: boolean | null,
        // Applicable for SingleChoice and MultipleChoice questions
        options: Array< string | null > | null,
      } > | null,
      responses:  {
        __typename: "ModelResponseConnection",
        nextToken: string | null,
      } | null,
      createdAt: string | null,
      updatedAt: string | null,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateFormSubscriptionVariables = {
  owner: string,
};

export type OnCreateFormSubscription = {
  onCreateForm:  {
    __typename: "Form",
    id: string,
    // Contains the author,description,title of the form
    meta:  {
      __typename: "FormMetadata",
      description: string | null,
      title: string | null,
    } | null,
    isActive: boolean | null,
    questions:  Array< {
      __typename: "Question",
      type: QuestionType,
      title: string,
      description: string | null,
      isRequired: boolean | null,
      // Applicable for SingleChoice and MultipleChoice questions
      options: Array< string | null > | null,
    } > | null,
    responses:  {
      __typename: "ModelResponseConnection",
      items:  Array< {
        __typename: "Response",
        formCreator: string | null,
        id: string,
        formID: string,
        createdAt: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string | null,
    updatedAt: string | null,
    owner: string | null,
  } | null,
};

export type OnUpdateFormSubscriptionVariables = {
  owner: string,
};

export type OnUpdateFormSubscription = {
  onUpdateForm:  {
    __typename: "Form",
    id: string,
    // Contains the author,description,title of the form
    meta:  {
      __typename: "FormMetadata",
      description: string | null,
      title: string | null,
    } | null,
    isActive: boolean | null,
    questions:  Array< {
      __typename: "Question",
      type: QuestionType,
      title: string,
      description: string | null,
      isRequired: boolean | null,
      // Applicable for SingleChoice and MultipleChoice questions
      options: Array< string | null > | null,
    } > | null,
    responses:  {
      __typename: "ModelResponseConnection",
      items:  Array< {
        __typename: "Response",
        formCreator: string | null,
        id: string,
        formID: string,
        createdAt: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string | null,
    updatedAt: string | null,
    owner: string | null,
  } | null,
};

export type OnDeleteFormSubscriptionVariables = {
  owner: string,
};

export type OnDeleteFormSubscription = {
  onDeleteForm:  {
    __typename: "Form",
    id: string,
    // Contains the author,description,title of the form
    meta:  {
      __typename: "FormMetadata",
      description: string | null,
      title: string | null,
    } | null,
    isActive: boolean | null,
    questions:  Array< {
      __typename: "Question",
      type: QuestionType,
      title: string,
      description: string | null,
      isRequired: boolean | null,
      // Applicable for SingleChoice and MultipleChoice questions
      options: Array< string | null > | null,
    } > | null,
    responses:  {
      __typename: "ModelResponseConnection",
      items:  Array< {
        __typename: "Response",
        formCreator: string | null,
        id: string,
        formID: string,
        createdAt: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string | null,
    updatedAt: string | null,
    owner: string | null,
  } | null,
};

export type OnUpdateResponseSubscription = {
  onUpdateResponse:  {
    __typename: "Response",
    formCreator: string | null,
    id: string,
    formID: string,
    answers:  Array< {
      __typename: "Answers",
      question: string,
      answer: string | null,
    } > | null,
    createdAt: string | null,
  } | null,
};

export type OnDeleteResponseSubscription = {
  onDeleteResponse:  {
    __typename: "Response",
    formCreator: string | null,
    id: string,
    formID: string,
    answers:  Array< {
      __typename: "Answers",
      question: string,
      answer: string | null,
    } > | null,
    createdAt: string | null,
  } | null,
};

export type OnCreateResponseSubscription = {
  onCreateResponse:  {
    __typename: "Response",
    formCreator: string | null,
    id: string,
    formID: string,
    answers:  Array< {
      __typename: "Answers",
      question: string,
      answer: string | null,
    } > | null,
    createdAt: string | null,
  } | null,
};
