import { gql } from 'apollo-server';
import company from './company';
import user from './user';

const typeDefs = gql`
    type Applied {
        user: UserDetails!
        company: Company!
    }

    type Selected {
        user: UserDetails!
        company: Company!
    }

    input AppliedInput {
        userID: String!
        companyID: String!
    }

    input SelectedInput {
        userID: String!
        companyID: String!
    }

    type Query {
        users: [User]!
        user(USN: ID!): User!
        company(name: String!): Company!
        companies: [Company]!
        applied: [Applied]!
        selected: [Selected]!
    }

    type Mutation {
        createUser(input: UserInput!): User!
        createCompany(input: CompanyInput!): Company!
        createApplied(input: AppliedInput!): Applied!
        createSelected(input: SelectedInput!): Selected!
        updateUserDetails(input: UserDetailsUpdateInput!): UserDetails!
        updateCompany(input: CompanyUpdateInput!): Company!
        deleteUser(USN: ID!): User!
        deleteCompany(name: String!): Company!
    }
`;

export default [typeDefs, user, company];
