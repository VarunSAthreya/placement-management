import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Applied = {
  __typename?: 'Applied';
  company: Company;
  user: UserDetails;
};

export type AppliedInput = {
  companyID: Scalars['String'];
  userID: Scalars['String'];
};

export type AuthResponse = {
  __typename?: 'AuthResponse';
  token: Scalars['String'];
  user: User;
};

export enum Branch {
  Cse = 'CSE',
  Cv = 'CV',
  Ece = 'ECE',
  Eie = 'EIE',
  Iem = 'IEM',
  Ise = 'ISE',
  Me = 'ME'
}

export type Company = {
  __typename?: 'Company';
  applied: Array<Maybe<Applied>>;
  arrival_date?: Maybe<Scalars['String']>;
  eligibility: CompanyEdibility;
  name: Scalars['String'];
  package?: Maybe<Scalars['Float']>;
  selected: Array<Maybe<Selected>>;
  type: CompanyType;
  year: Scalars['Int'];
};

export type CompanyEdibility = {
  __typename?: 'CompanyEdibility';
  CGPA: Scalars['Float'];
  backlogs: Scalars['Int'];
  name: Scalars['String'];
  tenth: Scalars['Float'];
  twelth: Scalars['Float'];
};

export type CompanyEdibilityInput = {
  CGPA: Scalars['Float'];
  backlogs: Scalars['Int'];
  tenth: Scalars['Float'];
  twelth: Scalars['Float'];
};

export type CompanyEdibilityUpdateInput = {
  CGPA?: InputMaybe<Scalars['Float']>;
  backlogs?: InputMaybe<Scalars['Int']>;
  tenth?: InputMaybe<Scalars['Float']>;
  twelth?: InputMaybe<Scalars['Float']>;
};

export type CompanyInput = {
  arrival_date?: InputMaybe<Scalars['String']>;
  eligibility: CompanyEdibilityInput;
  name: Scalars['String'];
  package?: InputMaybe<Scalars['Float']>;
  type: CompanyType;
  year: Scalars['Int'];
};

export enum CompanyType {
  Product = 'PRODUCT',
  Service = 'SERVICE'
}

export type CompanyUpdateInput = {
  arrival_date?: InputMaybe<Scalars['String']>;
  eligibility?: InputMaybe<CompanyEdibilityUpdateInput>;
  name: Scalars['String'];
  package?: InputMaybe<Scalars['Float']>;
  type?: InputMaybe<CompanyType>;
  year?: InputMaybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  authenticate: AuthResponse;
  createApplied: Applied;
  createCompany: Company;
  createSelected: Selected;
  createUser: User;
  deleteApplied: Applied;
  deleteCompany: Company;
  deleteSelected: Selected;
  deleteUser: User;
  getAllEligibleStudents: Array<Maybe<UserDetails>>;
  updateCompany: Company;
  updateUserDetails: UserDetails;
};


export type MutationAuthenticateArgs = {
  USN: Scalars['ID'];
  password: Scalars['String'];
};


export type MutationCreateAppliedArgs = {
  input: AppliedInput;
};


export type MutationCreateCompanyArgs = {
  input: CompanyInput;
};


export type MutationCreateSelectedArgs = {
  input: SelectedInput;
};


export type MutationCreateUserArgs = {
  input: UserInput;
};


export type MutationDeleteAppliedArgs = {
  input: AppliedInput;
};


export type MutationDeleteCompanyArgs = {
  name: Scalars['String'];
};


export type MutationDeleteSelectedArgs = {
  input: SelectedInput;
};


export type MutationDeleteUserArgs = {
  USN: Scalars['ID'];
};


export type MutationGetAllEligibleStudentsArgs = {
  input: Scalars['String'];
};


export type MutationUpdateCompanyArgs = {
  input: CompanyUpdateInput;
};


export type MutationUpdateUserDetailsArgs = {
  input: UserDetailsUpdateInput;
};

export type Query = {
  __typename?: 'Query';
  applied: Array<Maybe<Applied>>;
  companies: Array<Maybe<Company>>;
  company: Company;
  selected: Array<Maybe<Selected>>;
  studentDetails: Array<Maybe<UserDetails>>;
  user: User;
  users: Array<Maybe<User>>;
};


export type QueryCompanyArgs = {
  name: Scalars['String'];
};


export type QueryUserArgs = {
  USN: Scalars['ID'];
};

export enum Roles {
  Admin = 'ADMIN',
  Student = 'STUDENT'
}

export enum Section {
  A = 'A',
  B = 'B',
  C = 'C'
}

export type Selected = {
  __typename?: 'Selected';
  company: Company;
  user: UserDetails;
};

export type SelectedInput = {
  companyID: Scalars['String'];
  userID: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  USN: Scalars['ID'];
  details?: Maybe<UserDetails>;
  role: Roles;
};

export type UserDetails = {
  __typename?: 'UserDetails';
  CGPA: Scalars['Float'];
  USN: Scalars['String'];
  applied: Array<Maybe<Applied>>;
  backlogs: Scalars['Int'];
  branch: Branch;
  eligible: Scalars['Boolean'];
  email: Scalars['String'];
  name: Scalars['String'];
  package?: Maybe<Scalars['Float']>;
  placed: Scalars['Boolean'];
  section: Section;
  selected: Array<Maybe<Selected>>;
  tenth: Scalars['Float'];
  twelth: Scalars['Float'];
  year: Scalars['Int'];
};

export type UserDetailsInput = {
  CGPA: Scalars['Float'];
  backlogs: Scalars['Int'];
  branch: Branch;
  eligible: Scalars['Boolean'];
  email: Scalars['String'];
  name: Scalars['String'];
  package?: InputMaybe<Scalars['Float']>;
  placed: Scalars['Boolean'];
  section: Section;
  tenth: Scalars['Float'];
  twelth: Scalars['Float'];
  year: Scalars['Int'];
};

export type UserDetailsUpdateInput = {
  CGPA?: InputMaybe<Scalars['Float']>;
  USN: Scalars['String'];
  backlogs?: InputMaybe<Scalars['Int']>;
  branch?: InputMaybe<Branch>;
  eligible?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  package?: InputMaybe<Scalars['Float']>;
  placed?: InputMaybe<Scalars['Boolean']>;
  section?: InputMaybe<Section>;
  tenth?: InputMaybe<Scalars['Float']>;
  twelth?: InputMaybe<Scalars['Float']>;
  year?: InputMaybe<Scalars['Int']>;
};

export type UserInput = {
  USN: Scalars['ID'];
  details?: InputMaybe<UserDetailsInput>;
  password: Scalars['String'];
  role: Roles;
};

export type GetAllAppliedQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllAppliedQuery = { __typename?: 'Query', applied: Array<{ __typename?: 'Applied', user: { __typename?: 'UserDetails', USN: string, branch: Branch, section: Section, name: string, email: string }, company: { __typename?: 'Company', name: string, package?: number | null | undefined, type: CompanyType } } | null | undefined> };

export type GetCompanyQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCompanyQuery = { __typename?: 'Query', companies: Array<{ __typename?: 'Company', name: string, type: CompanyType, arrival_date?: string | null | undefined, package?: number | null | undefined, year: number, eligibility: { __typename?: 'CompanyEdibility', CGPA: number, backlogs: number } } | null | undefined> };

export type AuthMutationVariables = Exact<{
  usn: Scalars['ID'];
  password: Scalars['String'];
}>;


export type AuthMutation = { __typename?: 'Mutation', authenticate: { __typename?: 'AuthResponse', token: string, user: { __typename?: 'User', role: Roles, details?: { __typename?: 'UserDetails', name: string, backlogs: number, email: string } | null | undefined } } };

export type GetAllStudentsCardQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllStudentsCardQuery = { __typename?: 'Query', studentDetails: Array<{ __typename?: 'UserDetails', USN: string, email: string, name: string, branch: Branch, section: Section, CGPA: number } | null | undefined> };


export const GetAllAppliedDocument = gql`
    query getAllApplied {
  applied {
    user {
      USN
      branch
      section
      name
      email
    }
    company {
      name
      package
      type
    }
  }
}
    `;

/**
 * __useGetAllAppliedQuery__
 *
 * To run a query within a React component, call `useGetAllAppliedQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllAppliedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllAppliedQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllAppliedQuery(baseOptions?: Apollo.QueryHookOptions<GetAllAppliedQuery, GetAllAppliedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllAppliedQuery, GetAllAppliedQueryVariables>(GetAllAppliedDocument, options);
      }
export function useGetAllAppliedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllAppliedQuery, GetAllAppliedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllAppliedQuery, GetAllAppliedQueryVariables>(GetAllAppliedDocument, options);
        }
export type GetAllAppliedQueryHookResult = ReturnType<typeof useGetAllAppliedQuery>;
export type GetAllAppliedLazyQueryHookResult = ReturnType<typeof useGetAllAppliedLazyQuery>;
export type GetAllAppliedQueryResult = Apollo.QueryResult<GetAllAppliedQuery, GetAllAppliedQueryVariables>;
export const GetCompanyDocument = gql`
    query GetCompany {
  companies {
    name
    type
    arrival_date
    package
    year
    eligibility {
      CGPA
      backlogs
    }
  }
}
    `;

/**
 * __useGetCompanyQuery__
 *
 * To run a query within a React component, call `useGetCompanyQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCompanyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCompanyQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCompanyQuery(baseOptions?: Apollo.QueryHookOptions<GetCompanyQuery, GetCompanyQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCompanyQuery, GetCompanyQueryVariables>(GetCompanyDocument, options);
      }
export function useGetCompanyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCompanyQuery, GetCompanyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCompanyQuery, GetCompanyQueryVariables>(GetCompanyDocument, options);
        }
export type GetCompanyQueryHookResult = ReturnType<typeof useGetCompanyQuery>;
export type GetCompanyLazyQueryHookResult = ReturnType<typeof useGetCompanyLazyQuery>;
export type GetCompanyQueryResult = Apollo.QueryResult<GetCompanyQuery, GetCompanyQueryVariables>;
export const AuthDocument = gql`
    mutation Auth($usn: ID!, $password: String!) {
  authenticate(USN: $usn, password: $password) {
    user {
      role
      details {
        name
        backlogs
        email
      }
    }
    token
  }
}
    `;
export type AuthMutationFn = Apollo.MutationFunction<AuthMutation, AuthMutationVariables>;

/**
 * __useAuthMutation__
 *
 * To run a mutation, you first call `useAuthMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authMutation, { data, loading, error }] = useAuthMutation({
 *   variables: {
 *      usn: // value for 'usn'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useAuthMutation(baseOptions?: Apollo.MutationHookOptions<AuthMutation, AuthMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AuthMutation, AuthMutationVariables>(AuthDocument, options);
      }
export type AuthMutationHookResult = ReturnType<typeof useAuthMutation>;
export type AuthMutationResult = Apollo.MutationResult<AuthMutation>;
export type AuthMutationOptions = Apollo.BaseMutationOptions<AuthMutation, AuthMutationVariables>;
export const GetAllStudentsCardDocument = gql`
    query GetAllStudentsCard {
  studentDetails {
    USN
    email
    name
    branch
    section
    CGPA
  }
}
    `;

/**
 * __useGetAllStudentsCardQuery__
 *
 * To run a query within a React component, call `useGetAllStudentsCardQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllStudentsCardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllStudentsCardQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllStudentsCardQuery(baseOptions?: Apollo.QueryHookOptions<GetAllStudentsCardQuery, GetAllStudentsCardQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllStudentsCardQuery, GetAllStudentsCardQueryVariables>(GetAllStudentsCardDocument, options);
      }
export function useGetAllStudentsCardLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllStudentsCardQuery, GetAllStudentsCardQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllStudentsCardQuery, GetAllStudentsCardQueryVariables>(GetAllStudentsCardDocument, options);
        }
export type GetAllStudentsCardQueryHookResult = ReturnType<typeof useGetAllStudentsCardQuery>;
export type GetAllStudentsCardLazyQueryHookResult = ReturnType<typeof useGetAllStudentsCardLazyQuery>;
export type GetAllStudentsCardQueryResult = Apollo.QueryResult<GetAllStudentsCardQuery, GetAllStudentsCardQueryVariables>;