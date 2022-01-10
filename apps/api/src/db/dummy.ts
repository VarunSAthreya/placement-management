export const users: IUser[] = [
    {
        USN: '1JS19CS186',
        role: 'STUDENT',
        password: 'asdfghjkl',
    },
    {
        USN: '1JS19CS146',
        role: 'STUDENT',
        password: 'asdfghjkl',
    },
    {
        USN: '1JS19CS183',
        role: 'STUDENT',
        password: 'asdfghjkl',
    },
    {
        USN: '1JS19CS157',

        role: 'STUDENT',
        password: 'asdfghjkl',
    },
];

export const userDetails: IUserDetails[] = [
    {
        USN: '1JS19CS186',
        CGPA: 8.5,
        name: 'Varun S Athreya',
        email: '1js19cs186@jssateb.ac.in',
        backlogs: 0,
        tenth: 8.5,
        twelth: 8.5,
        placed: false,
        branch: 'CSE',
        section: 'C',
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
        name: 'Shithin Shetty',
        email: '1js19cs157@jssateb.ac.in',
        package: 10,
        branch: 'CSE',
        section: 'C',
        eligible: true,
        year: 2023,
    },
    {
        USN: '1JS19CS183',
        CGPA: 8.5,
        backlogs: 0,
        branch: 'CSE',
        name: 'Ullas HP',
        email: '1js19cs183@jssateb.ac.in',
        year: 2023,
        section: 'C',
        eligible: true,
        tenth: 8.5,
        twelth: 8.5,
        placed: false,
        package: 0,
    },
    {
        USN: '1JS19CS146',
        CGPA: 8.5,
        name: 'Sandeep M',
        email: '1js19cs146@jssateb.ac.in',
        backlogs: 0,
        year: 2023,
        branch: 'CSE',
        section: 'C',
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
        arrival_date: new Date().toISOString(),
        package: 100000,
        type: 'PRODUCT',
    },
    {
        name: 'Amazon',
        arrival_date: new Date().toISOString(),
        package: 100000,
        type: 'PRODUCT',
    },
    {
        name: 'Microsoft',
        arrival_date: new Date().toISOString(),
        package: 100000,
        type: 'PRODUCT',
    },
    {
        name: 'TCS',
        arrival_date: new Date().toISOString(),
        package: 100000,
        type: 'SERVICE',
    },
];

export const eligibility: ICompanyEligibility[] = [
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
        userID: '1JS19CS186',
        companyID: 'Google',
    },
    {
        userID: '1JS19CS183',
        companyID: 'Google',
    },
    {
        userID: '1JS19CS186',
        companyID: 'Microsoft',
    },
    {
        userID: '1JS19CS146',
        companyID: 'Amazon',
    },
    {
        userID: '1JS19CS157',
        companyID: 'TCS',
    },
    {
        userID: '1JS19CS146',
        companyID: 'Microsoft',
    },
    {
        userID: '1JS19CS183',
        companyID: 'TCS',
    },
];

export const selected: ISelected[] = [
    {
        userID: '1JS19CS183',
        companyID: 'TCS',
    },
    {
        userID: '1JS19CS186',
        companyID: 'Google',
    },
    {
        userID: '1JS19CS146',
        companyID: 'Amazon',
    },
];
