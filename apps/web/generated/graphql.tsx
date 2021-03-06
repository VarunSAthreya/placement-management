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
  changePassword: Scalars['String'];
  createApplied: Applied;
  createCompany: Company;
  createSelected: Selected;
  createUser: User;
  deleteApplied: Applied;
  deleteCompany: Company;
  deleteSelected: Selected;
  deleteUser: User;
  updateCompany: Company;
  updateUserDetails: UserDetails;
};


export type MutationAuthenticateArgs = {
  USN: Scalars['ID'];
  password: Scalars['String'];
};


export type MutationChangePasswordArgs = {
  USN: Scalars['ID'];
  newPassword: Scalars['String'];
  oldPassword: Scalars['String'];
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


export type MutationUpdateCompanyArgs = {
  input: CompanyUpdateInput;
};


export type MutationUpdateUserDetailsArgs = {
  input: UserDetailsUpdateInput;
};

export type Query = {
  __typename?: 'Query';
  allStudentDetails: Array<Maybe<UserDetails>>;
  applied: Array<Maybe<Applied>>;
  appliedCount: Scalars['Int'];
  companies: Array<Maybe<Company>>;
  company: Company;
  companyCount: Scalars['Int'];
  eligibleCount: Scalars['Int'];
  getAllEligibleStudentsForCompany: Array<Maybe<UserDetails>>;
  getSelectedByCompany: Array<Maybe<Selected>>;
  getUpcomingCompanies: Array<Maybe<Company>>;
  hasStudentApplied: Scalars['Boolean'];
  isStudentEligible: Scalars['Boolean'];
  placedStudentCount: Scalars['Int'];
  selected: Array<Maybe<Selected>>;
  selectedCount: Scalars['Int'];
  studentCount: Scalars['Int'];
  studentDetails: UserDetails;
  user: User;
  users: Array<Maybe<User>>;
};


export type QueryCompanyArgs = {
  name: Scalars['String'];
};


export type QueryGetAllEligibleStudentsForCompanyArgs = {
  company: Scalars['String'];
};


export type QueryGetSelectedByCompanyArgs = {
  name: Scalars['String'];
};


export type QueryHasStudentAppliedArgs = {
  USN: Scalars['ID'];
  company: Scalars['String'];
};


export type QueryIsStudentEligibleArgs = {
  USN: Scalars['ID'];
  company: Scalars['String'];
};


export type QueryStudentDetailsArgs = {
  USN: Scalars['ID'];
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
  package: Scalars['Float'];
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

export type CreateAppliedMutationVariables = Exact<{
  input: AppliedInput;
}>;


export type CreateAppliedMutation = { __typename?: 'Mutation', createApplied: { __typename?: 'Applied', user: { __typename?: 'UserDetails', USN: string }, company: { __typename?: 'Company', name: string } } };

export type AuthMutationVariables = Exact<{
  usn: Scalars['ID'];
  password: Scalars['String'];
}>;


export type AuthMutation = { __typename?: 'Mutation', authenticate: { __typename?: 'AuthResponse', token: string, user: { __typename?: 'User', role: Roles, details?: { __typename?: 'UserDetails', name: string, backlogs: number, email: string } | null | undefined } } };

export type ChangePasswordMutationVariables = Exact<{
  usn: Scalars['ID'];
  oldPassword: Scalars['String'];
  newPassword: Scalars['String'];
}>;


export type ChangePasswordMutation = { __typename?: 'Mutation', changePassword: string };

export type GetCompaniesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCompaniesQuery = { __typename?: 'Query', companies: Array<{ __typename?: 'Company', name: string, type: CompanyType, arrival_date?: string | null | undefined, package?: number | null | undefined, year: number, eligibility: { __typename?: 'CompanyEdibility', CGPA: number, backlogs: number } } | null | undefined> };

export type GetCompanyDetailsWithStudentEligibilityQueryVariables = Exact<{
  name: Scalars['String'];
  usn: Scalars['ID'];
}>;


export type GetCompanyDetailsWithStudentEligibilityQuery = { __typename?: 'Query', isStudentEligible: boolean, company: { __typename?: 'Company', name: string, type: CompanyType, package?: number | null | undefined, arrival_date?: string | null | undefined, eligibility: { __typename?: 'CompanyEdibility', CGPA: number, backlogs: number, tenth: number, twelth: number } } };

export type GetCompanyDetailsQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type GetCompanyDetailsQuery = { __typename?: 'Query', company: { __typename?: 'Company', name: string, type: CompanyType, package?: number | null | undefined, arrival_date?: string | null | undefined, year: number, eligibility: { __typename?: 'CompanyEdibility', CGPA: number, backlogs: number, tenth: number, twelth: number } } };

export type CreateCompanyMutationVariables = Exact<{
  input: CompanyInput;
}>;


export type CreateCompanyMutation = { __typename?: 'Mutation', createCompany: { __typename?: 'Company', name: string } };

export type GetSelectedForAllCompaniesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSelectedForAllCompaniesQuery = { __typename?: 'Query', companies: Array<{ __typename?: 'Company', name: string, package?: number | null | undefined, selected: Array<{ __typename?: 'Selected', user: { __typename?: 'UserDetails', USN: string, name: string } } | null | undefined> } | null | undefined> };

export type GetSelectedPerCompanyQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type GetSelectedPerCompanyQuery = { __typename?: 'Query', company: { __typename?: 'Company', name: string, package?: number | null | undefined, selected: Array<{ __typename?: 'Selected', user: { __typename?: 'UserDetails', name: string, USN: string, email: string, branch: Branch, section: Section, CGPA: number } } | null | undefined> } };

export type UpdateCompanyMutationVariables = Exact<{
  input: CompanyUpdateInput;
}>;


export type UpdateCompanyMutation = { __typename?: 'Mutation', updateCompany: { __typename?: 'Company', name: string } };

export type GetAllDetailsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllDetailsQuery = { __typename?: 'Query', studentCount: number, companyCount: number, appliedCount: number, selectedCount: number, eligibleCount: number, placedStudentCount: number, companies: Array<{ __typename?: 'Company', name: string, selected: Array<{ __typename?: 'Selected', user: { __typename?: 'UserDetails', name: string } } | null | undefined> } | null | undefined>, allStudentDetails: Array<{ __typename?: 'UserDetails', branch: Branch, placed: boolean } | null | undefined> };

export type GetStudentHomeDetailsQueryVariables = Exact<{
  usn: Scalars['ID'];
}>;


export type GetStudentHomeDetailsQuery = { __typename?: 'Query', getUpcomingCompanies: Array<{ __typename?: 'Company', name: string, type: CompanyType, arrival_date?: string | null | undefined, package?: number | null | undefined, applied: Array<{ __typename?: 'Applied', user: { __typename?: 'UserDetails', USN: string } } | null | undefined> } | null | undefined>, studentDetails: { __typename?: 'UserDetails', applied: Array<{ __typename?: 'Applied', company: { __typename?: 'Company', name: string, type: CompanyType, package?: number | null | undefined } } | null | undefined>, selected: Array<{ __typename?: 'Selected', company: { __typename?: 'Company', name: string, type: CompanyType, package?: number | null | undefined } } | null | undefined> } };

export type GetSelectedByCompanyQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type GetSelectedByCompanyQuery = { __typename?: 'Query', getSelectedByCompany: Array<{ __typename?: 'Selected', company: { __typename?: 'Company', name: string, package?: number | null | undefined }, user: { __typename?: 'UserDetails', name: string, USN: string, email: string, branch: Branch, section: Section, CGPA: number } } | null | undefined> };

export type CreateSelectedMutationVariables = Exact<{
  input: SelectedInput;
}>;


export type CreateSelectedMutation = { __typename?: 'Mutation', createSelected: { __typename?: 'Selected', user: { __typename?: 'UserDetails', USN: string } } };

export type GetAllStudentsCardQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllStudentsCardQuery = { __typename?: 'Query', allStudentDetails: Array<{ __typename?: 'UserDetails', USN: string, email: string, name: string, branch: Branch, section: Section, CGPA: number } | null | undefined> };

export type GetStudentDetailsQueryVariables = Exact<{
  usn: Scalars['ID'];
}>;


export type GetStudentDetailsQuery = { __typename?: 'Query', studentDetails: { __typename?: 'UserDetails', name: string, email: string, USN: string, branch: Branch, section: Section, year: number, CGPA: number, tenth: number, twelth: number, backlogs: number, eligible: boolean, placed: boolean, package?: number | null | undefined } };

export type GetProfileDetailsQueryVariables = Exact<{
  usn: Scalars['ID'];
}>;


export type GetProfileDetailsQuery = { __typename?: 'Query', user: { __typename?: 'User', role: Roles, details?: { __typename?: 'UserDetails', name: string, USN: string, branch: Branch, section: Section, email: string, year: number, CGPA: number, tenth: number, twelth: number, backlogs: number, eligible: boolean, placed: boolean, package?: number | null | undefined, applied: Array<{ __typename?: 'Applied', company: { __typename?: 'Company', name: string, package?: number | null | undefined, type: CompanyType } } | null | undefined>, selected: Array<{ __typename?: 'Selected', company: { __typename?: 'Company', name: string, package?: number | null | undefined, type: CompanyType } } | null | undefined> } | null | undefined } };

export type CreateUserMutationVariables = Exact<{
  input: UserInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', USN: string } };

export type IsStudentEligibleQueryVariables = Exact<{
  usn: Scalars['ID'];
  company: Scalars['String'];
}>;


export type IsStudentEligibleQuery = { __typename?: 'Query', isStudentEligible: boolean };

export type HasStudentAppliedQueryVariables = Exact<{
  usn: Scalars['ID'];
  company: Scalars['String'];
}>;


export type HasStudentAppliedQuery = { __typename?: 'Query', hasStudentApplied: boolean };

export type UpdateStudentMutationVariables = Exact<{
  input: UserDetailsUpdateInput;
}>;


export type UpdateStudentMutation = { __typename?: 'Mutation', updateUserDetails: { __typename?: 'UserDetails', USN: string } };


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
export const CreateAppliedDocument = gql`
    mutation CreateApplied($input: AppliedInput!) {
  createApplied(input: $input) {
    user {
      USN
    }
    company {
      name
    }
  }
}
    `;
export type CreateAppliedMutationFn = Apollo.MutationFunction<CreateAppliedMutation, CreateAppliedMutationVariables>;

/**
 * __useCreateAppliedMutation__
 *
 * To run a mutation, you first call `useCreateAppliedMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAppliedMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAppliedMutation, { data, loading, error }] = useCreateAppliedMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateAppliedMutation(baseOptions?: Apollo.MutationHookOptions<CreateAppliedMutation, CreateAppliedMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAppliedMutation, CreateAppliedMutationVariables>(CreateAppliedDocument, options);
      }
export type CreateAppliedMutationHookResult = ReturnType<typeof useCreateAppliedMutation>;
export type CreateAppliedMutationResult = Apollo.MutationResult<CreateAppliedMutation>;
export type CreateAppliedMutationOptions = Apollo.BaseMutationOptions<CreateAppliedMutation, CreateAppliedMutationVariables>;
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
export const ChangePasswordDocument = gql`
    mutation ChangePassword($usn: ID!, $oldPassword: String!, $newPassword: String!) {
  changePassword(USN: $usn, oldPassword: $oldPassword, newPassword: $newPassword)
}
    `;
export type ChangePasswordMutationFn = Apollo.MutationFunction<ChangePasswordMutation, ChangePasswordMutationVariables>;

/**
 * __useChangePasswordMutation__
 *
 * To run a mutation, you first call `useChangePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePasswordMutation, { data, loading, error }] = useChangePasswordMutation({
 *   variables: {
 *      usn: // value for 'usn'
 *      oldPassword: // value for 'oldPassword'
 *      newPassword: // value for 'newPassword'
 *   },
 * });
 */
export function useChangePasswordMutation(baseOptions?: Apollo.MutationHookOptions<ChangePasswordMutation, ChangePasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument, options);
      }
export type ChangePasswordMutationHookResult = ReturnType<typeof useChangePasswordMutation>;
export type ChangePasswordMutationResult = Apollo.MutationResult<ChangePasswordMutation>;
export type ChangePasswordMutationOptions = Apollo.BaseMutationOptions<ChangePasswordMutation, ChangePasswordMutationVariables>;
export const GetCompaniesDocument = gql`
    query GetCompanies {
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
 * __useGetCompaniesQuery__
 *
 * To run a query within a React component, call `useGetCompaniesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCompaniesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCompaniesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCompaniesQuery(baseOptions?: Apollo.QueryHookOptions<GetCompaniesQuery, GetCompaniesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCompaniesQuery, GetCompaniesQueryVariables>(GetCompaniesDocument, options);
      }
export function useGetCompaniesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCompaniesQuery, GetCompaniesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCompaniesQuery, GetCompaniesQueryVariables>(GetCompaniesDocument, options);
        }
export type GetCompaniesQueryHookResult = ReturnType<typeof useGetCompaniesQuery>;
export type GetCompaniesLazyQueryHookResult = ReturnType<typeof useGetCompaniesLazyQuery>;
export type GetCompaniesQueryResult = Apollo.QueryResult<GetCompaniesQuery, GetCompaniesQueryVariables>;
export const GetCompanyDetailsWithStudentEligibilityDocument = gql`
    query GetCompanyDetailsWithStudentEligibility($name: String!, $usn: ID!) {
  company(name: $name) {
    name
    type
    package
    arrival_date
    eligibility {
      CGPA
      backlogs
      tenth
      twelth
    }
  }
  isStudentEligible(USN: $usn, company: $name)
}
    `;

/**
 * __useGetCompanyDetailsWithStudentEligibilityQuery__
 *
 * To run a query within a React component, call `useGetCompanyDetailsWithStudentEligibilityQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCompanyDetailsWithStudentEligibilityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCompanyDetailsWithStudentEligibilityQuery({
 *   variables: {
 *      name: // value for 'name'
 *      usn: // value for 'usn'
 *   },
 * });
 */
export function useGetCompanyDetailsWithStudentEligibilityQuery(baseOptions: Apollo.QueryHookOptions<GetCompanyDetailsWithStudentEligibilityQuery, GetCompanyDetailsWithStudentEligibilityQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCompanyDetailsWithStudentEligibilityQuery, GetCompanyDetailsWithStudentEligibilityQueryVariables>(GetCompanyDetailsWithStudentEligibilityDocument, options);
      }
export function useGetCompanyDetailsWithStudentEligibilityLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCompanyDetailsWithStudentEligibilityQuery, GetCompanyDetailsWithStudentEligibilityQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCompanyDetailsWithStudentEligibilityQuery, GetCompanyDetailsWithStudentEligibilityQueryVariables>(GetCompanyDetailsWithStudentEligibilityDocument, options);
        }
export type GetCompanyDetailsWithStudentEligibilityQueryHookResult = ReturnType<typeof useGetCompanyDetailsWithStudentEligibilityQuery>;
export type GetCompanyDetailsWithStudentEligibilityLazyQueryHookResult = ReturnType<typeof useGetCompanyDetailsWithStudentEligibilityLazyQuery>;
export type GetCompanyDetailsWithStudentEligibilityQueryResult = Apollo.QueryResult<GetCompanyDetailsWithStudentEligibilityQuery, GetCompanyDetailsWithStudentEligibilityQueryVariables>;
export const GetCompanyDetailsDocument = gql`
    query GetCompanyDetails($name: String!) {
  company(name: $name) {
    name
    type
    package
    arrival_date
    year
    eligibility {
      CGPA
      backlogs
      tenth
      twelth
    }
  }
}
    `;

/**
 * __useGetCompanyDetailsQuery__
 *
 * To run a query within a React component, call `useGetCompanyDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCompanyDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCompanyDetailsQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useGetCompanyDetailsQuery(baseOptions: Apollo.QueryHookOptions<GetCompanyDetailsQuery, GetCompanyDetailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCompanyDetailsQuery, GetCompanyDetailsQueryVariables>(GetCompanyDetailsDocument, options);
      }
export function useGetCompanyDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCompanyDetailsQuery, GetCompanyDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCompanyDetailsQuery, GetCompanyDetailsQueryVariables>(GetCompanyDetailsDocument, options);
        }
export type GetCompanyDetailsQueryHookResult = ReturnType<typeof useGetCompanyDetailsQuery>;
export type GetCompanyDetailsLazyQueryHookResult = ReturnType<typeof useGetCompanyDetailsLazyQuery>;
export type GetCompanyDetailsQueryResult = Apollo.QueryResult<GetCompanyDetailsQuery, GetCompanyDetailsQueryVariables>;
export const CreateCompanyDocument = gql`
    mutation CreateCompany($input: CompanyInput!) {
  createCompany(input: $input) {
    name
  }
}
    `;
export type CreateCompanyMutationFn = Apollo.MutationFunction<CreateCompanyMutation, CreateCompanyMutationVariables>;

/**
 * __useCreateCompanyMutation__
 *
 * To run a mutation, you first call `useCreateCompanyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCompanyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCompanyMutation, { data, loading, error }] = useCreateCompanyMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateCompanyMutation(baseOptions?: Apollo.MutationHookOptions<CreateCompanyMutation, CreateCompanyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCompanyMutation, CreateCompanyMutationVariables>(CreateCompanyDocument, options);
      }
export type CreateCompanyMutationHookResult = ReturnType<typeof useCreateCompanyMutation>;
export type CreateCompanyMutationResult = Apollo.MutationResult<CreateCompanyMutation>;
export type CreateCompanyMutationOptions = Apollo.BaseMutationOptions<CreateCompanyMutation, CreateCompanyMutationVariables>;
export const GetSelectedForAllCompaniesDocument = gql`
    query GetSelectedForAllCompanies {
  companies {
    name
    package
    selected {
      user {
        USN
        name
      }
    }
  }
}
    `;

/**
 * __useGetSelectedForAllCompaniesQuery__
 *
 * To run a query within a React component, call `useGetSelectedForAllCompaniesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSelectedForAllCompaniesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSelectedForAllCompaniesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSelectedForAllCompaniesQuery(baseOptions?: Apollo.QueryHookOptions<GetSelectedForAllCompaniesQuery, GetSelectedForAllCompaniesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSelectedForAllCompaniesQuery, GetSelectedForAllCompaniesQueryVariables>(GetSelectedForAllCompaniesDocument, options);
      }
export function useGetSelectedForAllCompaniesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSelectedForAllCompaniesQuery, GetSelectedForAllCompaniesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSelectedForAllCompaniesQuery, GetSelectedForAllCompaniesQueryVariables>(GetSelectedForAllCompaniesDocument, options);
        }
export type GetSelectedForAllCompaniesQueryHookResult = ReturnType<typeof useGetSelectedForAllCompaniesQuery>;
export type GetSelectedForAllCompaniesLazyQueryHookResult = ReturnType<typeof useGetSelectedForAllCompaniesLazyQuery>;
export type GetSelectedForAllCompaniesQueryResult = Apollo.QueryResult<GetSelectedForAllCompaniesQuery, GetSelectedForAllCompaniesQueryVariables>;
export const GetSelectedPerCompanyDocument = gql`
    query GetSelectedPerCompany($name: String!) {
  company(name: $name) {
    name
    package
    selected {
      user {
        name
        USN
        email
        branch
        section
        CGPA
      }
    }
  }
}
    `;

/**
 * __useGetSelectedPerCompanyQuery__
 *
 * To run a query within a React component, call `useGetSelectedPerCompanyQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSelectedPerCompanyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSelectedPerCompanyQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useGetSelectedPerCompanyQuery(baseOptions: Apollo.QueryHookOptions<GetSelectedPerCompanyQuery, GetSelectedPerCompanyQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSelectedPerCompanyQuery, GetSelectedPerCompanyQueryVariables>(GetSelectedPerCompanyDocument, options);
      }
export function useGetSelectedPerCompanyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSelectedPerCompanyQuery, GetSelectedPerCompanyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSelectedPerCompanyQuery, GetSelectedPerCompanyQueryVariables>(GetSelectedPerCompanyDocument, options);
        }
export type GetSelectedPerCompanyQueryHookResult = ReturnType<typeof useGetSelectedPerCompanyQuery>;
export type GetSelectedPerCompanyLazyQueryHookResult = ReturnType<typeof useGetSelectedPerCompanyLazyQuery>;
export type GetSelectedPerCompanyQueryResult = Apollo.QueryResult<GetSelectedPerCompanyQuery, GetSelectedPerCompanyQueryVariables>;
export const UpdateCompanyDocument = gql`
    mutation UpdateCompany($input: CompanyUpdateInput!) {
  updateCompany(input: $input) {
    name
  }
}
    `;
export type UpdateCompanyMutationFn = Apollo.MutationFunction<UpdateCompanyMutation, UpdateCompanyMutationVariables>;

/**
 * __useUpdateCompanyMutation__
 *
 * To run a mutation, you first call `useUpdateCompanyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCompanyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCompanyMutation, { data, loading, error }] = useUpdateCompanyMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateCompanyMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCompanyMutation, UpdateCompanyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCompanyMutation, UpdateCompanyMutationVariables>(UpdateCompanyDocument, options);
      }
export type UpdateCompanyMutationHookResult = ReturnType<typeof useUpdateCompanyMutation>;
export type UpdateCompanyMutationResult = Apollo.MutationResult<UpdateCompanyMutation>;
export type UpdateCompanyMutationOptions = Apollo.BaseMutationOptions<UpdateCompanyMutation, UpdateCompanyMutationVariables>;
export const GetAllDetailsDocument = gql`
    query GetAllDetails {
  companies {
    name
    selected {
      user {
        name
      }
    }
  }
  allStudentDetails {
    branch
    placed
  }
  studentCount
  companyCount
  appliedCount
  selectedCount
  eligibleCount
  placedStudentCount
}
    `;

/**
 * __useGetAllDetailsQuery__
 *
 * To run a query within a React component, call `useGetAllDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllDetailsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllDetailsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllDetailsQuery, GetAllDetailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllDetailsQuery, GetAllDetailsQueryVariables>(GetAllDetailsDocument, options);
      }
export function useGetAllDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllDetailsQuery, GetAllDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllDetailsQuery, GetAllDetailsQueryVariables>(GetAllDetailsDocument, options);
        }
export type GetAllDetailsQueryHookResult = ReturnType<typeof useGetAllDetailsQuery>;
export type GetAllDetailsLazyQueryHookResult = ReturnType<typeof useGetAllDetailsLazyQuery>;
export type GetAllDetailsQueryResult = Apollo.QueryResult<GetAllDetailsQuery, GetAllDetailsQueryVariables>;
export const GetStudentHomeDetailsDocument = gql`
    query GetStudentHomeDetails($usn: ID!) {
  getUpcomingCompanies {
    name
    type
    arrival_date
    package
    applied {
      user {
        USN
      }
    }
  }
  studentDetails(USN: $usn) {
    applied {
      company {
        name
        type
        package
      }
    }
    selected {
      company {
        name
        type
        package
      }
    }
  }
}
    `;

/**
 * __useGetStudentHomeDetailsQuery__
 *
 * To run a query within a React component, call `useGetStudentHomeDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStudentHomeDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStudentHomeDetailsQuery({
 *   variables: {
 *      usn: // value for 'usn'
 *   },
 * });
 */
export function useGetStudentHomeDetailsQuery(baseOptions: Apollo.QueryHookOptions<GetStudentHomeDetailsQuery, GetStudentHomeDetailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStudentHomeDetailsQuery, GetStudentHomeDetailsQueryVariables>(GetStudentHomeDetailsDocument, options);
      }
export function useGetStudentHomeDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStudentHomeDetailsQuery, GetStudentHomeDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStudentHomeDetailsQuery, GetStudentHomeDetailsQueryVariables>(GetStudentHomeDetailsDocument, options);
        }
export type GetStudentHomeDetailsQueryHookResult = ReturnType<typeof useGetStudentHomeDetailsQuery>;
export type GetStudentHomeDetailsLazyQueryHookResult = ReturnType<typeof useGetStudentHomeDetailsLazyQuery>;
export type GetStudentHomeDetailsQueryResult = Apollo.QueryResult<GetStudentHomeDetailsQuery, GetStudentHomeDetailsQueryVariables>;
export const GetSelectedByCompanyDocument = gql`
    query GetSelectedByCompany($name: String!) {
  getSelectedByCompany(name: $name) {
    company {
      name
      package
    }
    user {
      name
      USN
      email
      branch
      section
      CGPA
    }
  }
}
    `;

/**
 * __useGetSelectedByCompanyQuery__
 *
 * To run a query within a React component, call `useGetSelectedByCompanyQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSelectedByCompanyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSelectedByCompanyQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useGetSelectedByCompanyQuery(baseOptions: Apollo.QueryHookOptions<GetSelectedByCompanyQuery, GetSelectedByCompanyQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSelectedByCompanyQuery, GetSelectedByCompanyQueryVariables>(GetSelectedByCompanyDocument, options);
      }
export function useGetSelectedByCompanyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSelectedByCompanyQuery, GetSelectedByCompanyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSelectedByCompanyQuery, GetSelectedByCompanyQueryVariables>(GetSelectedByCompanyDocument, options);
        }
export type GetSelectedByCompanyQueryHookResult = ReturnType<typeof useGetSelectedByCompanyQuery>;
export type GetSelectedByCompanyLazyQueryHookResult = ReturnType<typeof useGetSelectedByCompanyLazyQuery>;
export type GetSelectedByCompanyQueryResult = Apollo.QueryResult<GetSelectedByCompanyQuery, GetSelectedByCompanyQueryVariables>;
export const CreateSelectedDocument = gql`
    mutation CreateSelected($input: SelectedInput!) {
  createSelected(input: $input) {
    user {
      USN
    }
  }
}
    `;
export type CreateSelectedMutationFn = Apollo.MutationFunction<CreateSelectedMutation, CreateSelectedMutationVariables>;

/**
 * __useCreateSelectedMutation__
 *
 * To run a mutation, you first call `useCreateSelectedMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSelectedMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSelectedMutation, { data, loading, error }] = useCreateSelectedMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateSelectedMutation(baseOptions?: Apollo.MutationHookOptions<CreateSelectedMutation, CreateSelectedMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSelectedMutation, CreateSelectedMutationVariables>(CreateSelectedDocument, options);
      }
export type CreateSelectedMutationHookResult = ReturnType<typeof useCreateSelectedMutation>;
export type CreateSelectedMutationResult = Apollo.MutationResult<CreateSelectedMutation>;
export type CreateSelectedMutationOptions = Apollo.BaseMutationOptions<CreateSelectedMutation, CreateSelectedMutationVariables>;
export const GetAllStudentsCardDocument = gql`
    query GetAllStudentsCard {
  allStudentDetails {
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
export const GetStudentDetailsDocument = gql`
    query GetStudentDetails($usn: ID!) {
  studentDetails(USN: $usn) {
    name
    email
    USN
    branch
    section
    year
    CGPA
    tenth
    twelth
    backlogs
    eligible
    placed
    package
  }
}
    `;

/**
 * __useGetStudentDetailsQuery__
 *
 * To run a query within a React component, call `useGetStudentDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStudentDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStudentDetailsQuery({
 *   variables: {
 *      usn: // value for 'usn'
 *   },
 * });
 */
export function useGetStudentDetailsQuery(baseOptions: Apollo.QueryHookOptions<GetStudentDetailsQuery, GetStudentDetailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStudentDetailsQuery, GetStudentDetailsQueryVariables>(GetStudentDetailsDocument, options);
      }
export function useGetStudentDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStudentDetailsQuery, GetStudentDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStudentDetailsQuery, GetStudentDetailsQueryVariables>(GetStudentDetailsDocument, options);
        }
export type GetStudentDetailsQueryHookResult = ReturnType<typeof useGetStudentDetailsQuery>;
export type GetStudentDetailsLazyQueryHookResult = ReturnType<typeof useGetStudentDetailsLazyQuery>;
export type GetStudentDetailsQueryResult = Apollo.QueryResult<GetStudentDetailsQuery, GetStudentDetailsQueryVariables>;
export const GetProfileDetailsDocument = gql`
    query GetProfileDetails($usn: ID!) {
  user(USN: $usn) {
    role
    details {
      name
      USN
      branch
      section
      email
      year
      CGPA
      tenth
      twelth
      backlogs
      eligible
      placed
      package
      applied {
        company {
          name
          package
          type
        }
      }
      selected {
        company {
          name
          package
          type
        }
      }
    }
  }
}
    `;

/**
 * __useGetProfileDetailsQuery__
 *
 * To run a query within a React component, call `useGetProfileDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProfileDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProfileDetailsQuery({
 *   variables: {
 *      usn: // value for 'usn'
 *   },
 * });
 */
export function useGetProfileDetailsQuery(baseOptions: Apollo.QueryHookOptions<GetProfileDetailsQuery, GetProfileDetailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProfileDetailsQuery, GetProfileDetailsQueryVariables>(GetProfileDetailsDocument, options);
      }
export function useGetProfileDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProfileDetailsQuery, GetProfileDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProfileDetailsQuery, GetProfileDetailsQueryVariables>(GetProfileDetailsDocument, options);
        }
export type GetProfileDetailsQueryHookResult = ReturnType<typeof useGetProfileDetailsQuery>;
export type GetProfileDetailsLazyQueryHookResult = ReturnType<typeof useGetProfileDetailsLazyQuery>;
export type GetProfileDetailsQueryResult = Apollo.QueryResult<GetProfileDetailsQuery, GetProfileDetailsQueryVariables>;
export const CreateUserDocument = gql`
    mutation CreateUser($input: UserInput!) {
  createUser(input: $input) {
    USN
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const IsStudentEligibleDocument = gql`
    query IsStudentEligible($usn: ID!, $company: String!) {
  isStudentEligible(USN: $usn, company: $company)
}
    `;

/**
 * __useIsStudentEligibleQuery__
 *
 * To run a query within a React component, call `useIsStudentEligibleQuery` and pass it any options that fit your needs.
 * When your component renders, `useIsStudentEligibleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIsStudentEligibleQuery({
 *   variables: {
 *      usn: // value for 'usn'
 *      company: // value for 'company'
 *   },
 * });
 */
export function useIsStudentEligibleQuery(baseOptions: Apollo.QueryHookOptions<IsStudentEligibleQuery, IsStudentEligibleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IsStudentEligibleQuery, IsStudentEligibleQueryVariables>(IsStudentEligibleDocument, options);
      }
export function useIsStudentEligibleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IsStudentEligibleQuery, IsStudentEligibleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IsStudentEligibleQuery, IsStudentEligibleQueryVariables>(IsStudentEligibleDocument, options);
        }
export type IsStudentEligibleQueryHookResult = ReturnType<typeof useIsStudentEligibleQuery>;
export type IsStudentEligibleLazyQueryHookResult = ReturnType<typeof useIsStudentEligibleLazyQuery>;
export type IsStudentEligibleQueryResult = Apollo.QueryResult<IsStudentEligibleQuery, IsStudentEligibleQueryVariables>;
export const HasStudentAppliedDocument = gql`
    query HasStudentApplied($usn: ID!, $company: String!) {
  hasStudentApplied(USN: $usn, company: $company)
}
    `;

/**
 * __useHasStudentAppliedQuery__
 *
 * To run a query within a React component, call `useHasStudentAppliedQuery` and pass it any options that fit your needs.
 * When your component renders, `useHasStudentAppliedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHasStudentAppliedQuery({
 *   variables: {
 *      usn: // value for 'usn'
 *      company: // value for 'company'
 *   },
 * });
 */
export function useHasStudentAppliedQuery(baseOptions: Apollo.QueryHookOptions<HasStudentAppliedQuery, HasStudentAppliedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HasStudentAppliedQuery, HasStudentAppliedQueryVariables>(HasStudentAppliedDocument, options);
      }
export function useHasStudentAppliedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HasStudentAppliedQuery, HasStudentAppliedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HasStudentAppliedQuery, HasStudentAppliedQueryVariables>(HasStudentAppliedDocument, options);
        }
export type HasStudentAppliedQueryHookResult = ReturnType<typeof useHasStudentAppliedQuery>;
export type HasStudentAppliedLazyQueryHookResult = ReturnType<typeof useHasStudentAppliedLazyQuery>;
export type HasStudentAppliedQueryResult = Apollo.QueryResult<HasStudentAppliedQuery, HasStudentAppliedQueryVariables>;
export const UpdateStudentDocument = gql`
    mutation UpdateStudent($input: UserDetailsUpdateInput!) {
  updateUserDetails(input: $input) {
    USN
  }
}
    `;
export type UpdateStudentMutationFn = Apollo.MutationFunction<UpdateStudentMutation, UpdateStudentMutationVariables>;

/**
 * __useUpdateStudentMutation__
 *
 * To run a mutation, you first call `useUpdateStudentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateStudentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateStudentMutation, { data, loading, error }] = useUpdateStudentMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateStudentMutation(baseOptions?: Apollo.MutationHookOptions<UpdateStudentMutation, UpdateStudentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateStudentMutation, UpdateStudentMutationVariables>(UpdateStudentDocument, options);
      }
export type UpdateStudentMutationHookResult = ReturnType<typeof useUpdateStudentMutation>;
export type UpdateStudentMutationResult = Apollo.MutationResult<UpdateStudentMutation>;
export type UpdateStudentMutationOptions = Apollo.BaseMutationOptions<UpdateStudentMutation, UpdateStudentMutationVariables>;