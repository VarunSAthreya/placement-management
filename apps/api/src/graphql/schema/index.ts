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
        package: Float!
    }

    type Query {
        users: [User]!
        user(USN: ID!): User!
        studentDetails(USN: ID!): UserDetails!
        allStudentDetails: [UserDetails]!
        company(name: String!): Company!
        companies: [Company]!
        applied: [Applied]!
        selected: [Selected]!
        getSelectedByCompany(name: String!): [Selected]!
        studentCount: Int!
        companyCount: Int!
        appliedCount: Int!
        selectedCount: Int!
        eligibleCount: Int!
        placedStudentCount: Int!
        isStudentEligible(USN: ID!, company: String!): Boolean!
        getAllEligibleStudentsForCompany(company: String!): [UserDetails]!
        hasStudentApplied(USN: ID!, company: String!): Boolean!
    }

    type AuthResponse {
        user: User!
        token: String!
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
        deleteApplied(input: AppliedInput!): Applied!
        deleteSelected(input: SelectedInput!): Selected!
        authenticate(USN: ID!, password: String!): AuthResponse!
    }
`;

export default [typeDefs, user, company];
