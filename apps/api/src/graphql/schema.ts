const { gql } = require('apollo-server');

export const typeDefs = gql`
    type Student {
        USN: ID!
        name: String!
        email: String!
        password: String!
        type: UserType!
        details: StudentDetails!
    }

    type StudentDetails {
        USN: String!
        year: Int!
        branch: Branch!
        section: Section!
        eligible: Boolean!
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
        dateOfArrival: String!
        CTC: Float!
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
        student: Student!
        company: Company!
    }

    type Selected {
        student: Student!
        company: Company!
    }

    type Query {
        students: [Student]!
        student(USN: ID!): Student!
        company(name: String!): Company!
        companies: [Company]!
        applied: [Applied]!
        selected: [Selected]!
    }

    enum UserType {
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
