interface IUser {
    USN: string;
    name: string;
    email: string;
    password: string;
    role: string;
    details?: IUserDetails;
}

interface IUserDetails {
    USN: string;
    year: number;
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
    eligibility?: CompanyEdibility;
    applied?: Applied[];
    selected?: Selected[];
}

interface ICompanyEdibility {
    name: string;
    CGPA: number;
    backlogs: number;
    tenth: number;
    twelth: number;
}

interface IApplied {
    user: string;
    company: string;
}

interface ISelected {
    user: string;
    company: string;
}
