import { gql } from 'apollo-server';

const company = gql`
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

    input CompanyInput {
        name: String!
        arrival_date: String
        package: Float
        type: CompanyType!
        eligibility: CompanyEdibilityInput!
    }

    input CompanyEdibilityInput {
        CGPA: Float!
        backlogs: Int!
        tenth: Float!
        twelth: Float!
    }

    input CompanyUpdateInput {
        name: String!
        arrival_date: String
        package: Float
        type: CompanyType
        eligibility: CompanyEdibilityUpdateInput
    }

    input CompanyEdibilityUpdateInput {
        CGPA: Float
        backlogs: Int
        tenth: Float
        twelth: Float
    }
`;

export default company;
