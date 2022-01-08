export const students: IUser[] = [
    {
        USN: '1JS19CS186',
        name: 'Varun S Athreya',
        email: '1js19cs186@jssateb.ac.in',
        type: UserType.STUDENT,
        password: 'asdfghjkl',
    },
    {
        USN: '1JS19CS146',
        name: 'Sandeep M',
        email: '1js19cs146@jssateb.ac.in',
        type: UserType.STUDENT,
        password: 'asdfghjkl',
    },
    {
        USN: '1JS19CS183',
        name: 'Ullas HP',
        email: '1js19cs183@jssateb.ac.in',
        type: UserType.STUDENT,
        password: 'asdfghjkl',
    },
    {
        USN: '1JS19CS157',
        name: 'Shithin Shetty',
        email: '1js19cs157@jssateb.ac.in',
        type: UserType.STUDENT,
        password: 'asdfghjkl',
    },
];

export const studentDetails: IStudentDetails[] = [
    {
        USN: '1JS19CS186',
        CGPA: 8.5,
        backlogs: 0,
        tenth: 8.5,
        twelth: 8.5,
        placed: false,
        branch: Branch.CSE,
        section: Section.C,
        eligible: true,
        package: 0,
        year: 2023,
    },
    {
        USN: '1JS19CS157',
        CGPA: 8.5,
        backlogs: 0,
        tenth: 8.5,
        twelth: 8.5,
        placed: true,
        package: 10,
        branch: Branch.CSE,
        section: Section.C,
        eligible: true,
        year: 2023,
    },
    {
        USN: '1JS19CS183',
        CGPA: 8.5,
        backlogs: 0,
        branch: Branch.CSE,
        year: 2023,
        section: Section.C,
        eligible: true,
        tenth: 8.5,
        twelth: 8.5,
        placed: false,
        package: 0,
    },
    {
        USN: '1JS19CS146',
        CGPA: 8.5,
        backlogs: 0,
        year: 2023,
        branch: Branch.CSE,
        section: Section.C,
        eligible: true,
        tenth: 8.5,
        twelth: 8.5,
        placed: true,
        package: 10,
    },
];

export const companies: ICompany[] = [
    {
        name: 'Google',
        dateOfArrival: '2019-04-01',
        CTC: 100000,
        type: CompanyType.PRODUCT,
    },
    {
        name: 'Amazon',
        dateOfArrival: '2019-05-01',
        CTC: 100000,
        type: CompanyType.PRODUCT,
    },
    {
        name: 'Microsoft',
        dateOfArrival: '2019-06-01',
        CTC: 100000,
        type: CompanyType.PRODUCT,
    },
    {
        name: 'TCS',
        dateOfArrival: '2019-06-01',
        CTC: 100000,
        type: CompanyType.SERVICE,
    },
];

export const eligibility: ICompanyEdibility[] = [
    {
        name: 'TCS',
        CGPA: 8.5,
        backlogs: 0,
        tenth: 8.5,
        twelth: 8.5,
    },
    {
        name: 'Microsoft',
        CGPA: 8.5,
        backlogs: 0,
        tenth: 8.5,
        twelth: 8.5,
    },
    {
        name: 'Amazon',
        CGPA: 8.5,
        backlogs: 0,
        tenth: 8.5,
        twelth: 8.5,
    },
    {
        name: 'Google',
        CGPA: 8.5,
        backlogs: 0,
        tenth: 8.5,
        twelth: 8.5,
    },
];

export const applied: IApplied[] = [
    {
        student: '1JS19CS186',
        company: 'Google',
    },
    {
        student: '1JS19CS183',
        company: 'Google',
    },
    {
        student: '1JS19CS186',
        company: 'Microsoft',
    },
    {
        student: '1JS19CS146',
        company: 'Amazon',
    },
    {
        student: '1JS19CS157',
        company: 'TCS',
    },
    {
        student: '1JS19CS146',
        company: 'Microsoft',
    },
    {
        student: '1JS19CS183',
        company: 'TCS',
    },
];

export const selected: ISelected[] = [
    {
        student: '1JS19CS183',
        company: 'TCS',
    },
    {
        student: '1JS19CS186',
        company: 'Google',
    },
    {
        student: '1JS19CS146',
        company: 'Amazon',
    },
];
