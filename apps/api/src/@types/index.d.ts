interface IUser {
    USN: string;
    name: string;
    email: string;
    password: string;
    type: UserType;
    details?: IStudentDetails;
}

interface IStudentDetails {
    USN: string;
    year: number;
    branch: Branch;
    section: Section;
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
    dateOfArrival: string;
    CTC: number;
    type: CompanyType;
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
    student: string;
    company: string;
}

interface ISelected {
    student: string;
    company: string;
}

enum UserType {
    STUDENT = 'STUDENT',
    ADMIN = 'ADMIN',
}

enum Branch {
    CSE = 'CSE',
    ECE = 'ECE',
    ISE = 'ISE',
    ME = 'ME',
    CV = 'CV',
    EIE = 'EIE',
    IEM = 'IEM',
}

enum Section {
    A = 'A',
    B = 'B',
    C = 'C',
}

enum CompanyType {
    SERVICE = 'SERVICE',
    PRODUCT = 'PRODUCT',
}
