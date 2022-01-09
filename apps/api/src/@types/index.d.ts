interface IUser {
    USN: string;
    password: string;
    role: string;
    details?: IUserDetails;
}

interface IUserDetails {
    USN: string;
    year: number;
    name: string;
    email: string;
    branch: string;
    section: string;
    eligible: boolean;
    placed: boolean;
    CGPA: number;
    backlogs: number;
    tenth: number;
    twelth: number;
    package: number;
    applied?: Applied[];
    selected?: Selected[];
}

interface ICompany {
    name: string;
    arrival_date: string;
    package: number;
    type: string;
    eligibility?: ICompanyEligibility;
    applied?: Applied[];
    selected?: Selected[];
}

interface ICompanyEligibility {
    name: string;
    CGPA: number;
    backlogs: number;
    tenth: number;
    twelth: number;
}

interface IApplied {
    userID: string;
    companyID: string;
}

interface ISelected {
    userID: string;
    companyID: string;
}
