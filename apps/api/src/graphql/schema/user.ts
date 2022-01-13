import { gql } from 'apollo-server';

const user = gql`
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
    }

    input UserDetailsUpdateInput {
        USN: String!
        year: Int
        name: String
        email: String
        branch: Branch
        section: Section
        eligible: Boolean
        placed: Boolean
        CGPA: Float
        backlogs: Int
        tenth: Float
        twelth: Float
        package: Float
    }
`;

export default user;
