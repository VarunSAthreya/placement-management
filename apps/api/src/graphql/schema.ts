const { gql } = require('apollo-server');

export const typeDefs = gql`
    type Student {
        USN: ID!
        name: String!
        branch: Branch!
        section: Section!
        eligible: Boolean!
        email: String!
        password: String!
        details: StudentDetails!
    }

    type StudentDetails {
        USN: String!
        CGPA: Float!
        backlogs: Int!
        tenth: Float!
        twelth: Float!
        package: Float
        applied: [Applied]!
        placed: [Placed]!
    }

    type Company {
        name: String!
        dateOfArrival: String!
        CTC: Float!
        type: CompanyType!
        eligibility: CompanyEdibility!
        applied: [Applied]!
        selected: [Placed]!
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

    type Placed {
        student: Student!
        company: Company!
    }

    type Query {
        students: [Student]!
        companies: [Company]!
        applied: [Applied]!
        placed: [Placed]!
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
