import { gql } from 'apollo-server';

export const typeDefs = gql`
    type User {
        USN: ID!
        role: Roles!
        details: UserDetails
    }

    enum Roles {
        STUDENT
        ADMIN
    }

    type UserDetails {
        USN: String!
        year: Int!
        name: String!
        email: String!
        branch: Branch!
        section: Section!
        eligible: Boolean!
        placed: Boolean!
        CGPA: Float!
        backlogs: Int!
        tenth: Float!
        twelth: Float!
        package: Float
        applied: [Applied]!
        selected: [Selected]!
    }

    enum Branch {
        CSE
        ECE
        ISE
        ME
        CV
        EIE
        IEM
    }

    enum Section {
        A
        B
        C
    }

    type Company {
        name: String!
        arrival_date: String
        package: Float
        type: CompanyType!
        eligibility: CompanyEdibility!
        applied: [Applied]!
        selected: [Selected]!
    }

    enum CompanyType {
        SERVICE
        PRODUCT
    }

    type CompanyEdibility {
        name: String!
        CGPA: Float!
        backlogs: Int!
        tenth: Float!
        twelth: Float!
    }

    type Applied {
        user: UserDetails!
        company: Company!
    }

    type Selected {
        user: UserDetails!
        company: Company!
    }

    type Query {
        users: [User]!
        user(USN: ID!): User!
        company(name: String!): Company!
        companies: [Company]!
        applied: [Applied]!
        selected: [Selected]!
    }

    input UserInput {
        USN: ID!
        role: Roles!
        password: String!
        details: UserDetailsInput
    }

    input UserDetailsInput {
        year: Int!
        name: String!
        email: String!
        branch: Branch!
        section: Section!
        eligible: Boolean!
        placed: Boolean!
        CGPA: Float!
        backlogs: Int!
        tenth: Float!
        twelth: Float!
        package: Float
        applied: [AppliedInput]
        selected: [SelectedInput]
    }

    input CompanyInput {
        name: String!
        arrival_date: String
        package: Float
        type: CompanyType!
        eligibility: CompanyEdibilityInput!
        applied: [AppliedInput]
        selected: [SelectedInput]
    }

    input CompanyEdibilityInput {
        CGPA: Float!
        backlogs: Int!
        tenth: Float!
        twelth: Float!
    }

    input AppliedInput {
        userID: String!
        companyID: String!
    }

    input SelectedInput {
        userID: String!
        companyID: String!
    }

    type Mutation {
        createUser(input: UserInput!): User!
        createCompany(input: CompanyInput!): Company!
        createApplied(input: AppliedInput!): Applied!
    }
`;
