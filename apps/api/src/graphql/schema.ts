import { gql } from 'apollo-server';

export const typeDefs = gql`
    type User {
        USN: ID!
        password: String!
        role: Roles!
        details: UserDetails!
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

    type Company {
        name: String!
        arrival_date: String!
        package: Float!
        type: CompanyType!
        eligibility: CompanyEdibility!
        applied: [Applied]!
        selected: [Selected]!
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

    enum Roles {
        STUDENT
        ADMIN
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

    enum CompanyType {
        SERVICE
        PRODUCT
    }
`;
