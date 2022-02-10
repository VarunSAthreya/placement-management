interface ILocalStorageData {
    USN?: string;
    role?: string;
}

interface IUser {
    USN: string;
    password: string;
    role: Roles;
    details?: IUserDetails;
}

enum Roles {
    Admin = 'ADMIN',
    Student = 'STUDENT',
}
interface IUserDetails {
    USN?: string;
    year?: number;
    name?: string;
    email?: string;
    branch?: Branch;
    section?: Section;
    eligible?: boolean;
    placed?: boolean;
    CGPA?: number;
    backlogs?: number;
    tenth?: number;
    twelth?: number;
    package?: number;
    applied?: IApplied[];
    selected?: ISelected[];
}

enum Branch {
    Cse = 'CSE',
    Cv = 'CV',
    Ece = 'ECE',
    Eie = 'EIE',
    Iem = 'IEM',
    Ise = 'ISE',
    Me = 'ME',
}

enum Section {
    A = 'A',
    B = 'B',
    C = 'C',
}

interface ICompany {
    name: string;
    arrival_date?: string;
    package?: number;
    year?: number;
    type: CompanyType;
    eligibility?: ICompanyEligibility;
    applied?: IApplied[];
    selected?: ISelected[];
}
enum CompanyType {
    Service = 'SERVICE',
    Product = 'PRODUCT',
}

interface ICompanyEligibility {
    name: string;
    CGPA: number;
    backlogs: number;
    tenth: number;
    twelth: number;
}

interface IApplied {
    user?: IUserDetails;
    company?: ICompany;
}

interface ISelected {
    user?: IUserDetails;
    company?: ICompany;
}
