import { createApplied, createCompany, createSelected, createUser } from '.';

export const addDummyData = async () => {
    users.forEach((user) => {
        createUser(user, 'ADMIN');
    });

    companies.forEach((company) => {
        createCompany(company, 'ADMIN');
    });

    applied.forEach((app) => {
        createApplied(app);
    });

    selected.forEach((sel) => {
        createSelected(sel);
    });
};

const users = [
    {
        USN: 'ADMIN',
        password: 'ADMIN@123',
        role: 'ADMIN',
    },
    {
        USN: '1JS19CS186',
        role: 'STUDENT',
        password: '123456789',
        details: {
            CGPA: 8.5,
            name: 'Varun S Athreya',
            email: '1js19cs186@jssateb.ac.in',
            backlogs: 0,
            tenth: 85,
            twelth: 85,
            placed: false,
            branch: 'CSE',
            section: 'C',
            eligible: true,
            package: 0,
            year: 2023,
        },
    },
    {
        USN: '1JS19CS146',
        role: 'STUDENT',
        password: '123456789',
        details: {
            CGPA: 8.5,
            name: 'Sandeep M',
            email: '1js19cs146@jssateb.ac.in',
            backlogs: 0,
            year: 2023,
            branch: 'CSE',
            section: 'C',
            eligible: true,
            tenth: 85,
            twelth: 85,
            placed: true,
            package: 1000000,
        },
    },
    {
        USN: '1JS19CS183',
        role: 'STUDENT',
        password: '123456789',
        details: {
            CGPA: 8.5,
            backlogs: 0,
            branch: 'CSE',
            name: 'Ullas HP',
            email: '1js19cs183@jssateb.ac.in',
            year: 2023,
            section: 'C',
            eligible: true,
            tenth: 85,
            twelth: 85,
            placed: false,
            package: 0,
        },
    },
    {
        USN: '1JS19CS157',
        role: 'STUDENT',
        password: '123456789',
        details: {
            CGPA: 8.5,
            backlogs: 0,
            tenth: 85,
            twelth: 85,
            placed: true,
            name: 'Shithin Shetty',
            email: '1js19cs157@jssateb.ac.in',
            package: 10,
            branch: 'CSE',
            section: 'C',
            eligible: true,
            year: 2023,
        },
    },
];

const companies = [
    {
        name: 'Google',
        arrival_date: new Date().toISOString(),
        package: 100000,
        type: 'PRODUCT',
        eligibility: {
            CGPA: 7.5,
            backlogs: 0,
            tenth: 65,
            twelth: 65,
        },
    },
    {
        name: 'Amazon',
        arrival_date: new Date().toISOString(),
        package: 100000,
        type: 'PRODUCT',
        eligibility: {
            CGPA: 7.5,
            backlogs: 0,
            tenth: 65,
            twelth: 65,
        },
    },
    {
        name: 'Microsoft',
        arrival_date: new Date().toISOString(),
        package: 100000,
        type: 'PRODUCT',
        eligibility: {
            CGPA: 7.5,
            backlogs: 0,
            tenth: 65,
            twelth: 65,
        },
    },
    {
        name: 'TCS',
        arrival_date: new Date().toISOString(),
        package: 100000,
        type: 'SERVICE',
        eligibility: {
            CGPA: 6.5,
            backlogs: 2,
            tenth: 65,
            twelth: 65,
        },
    },
];

const applied: IApplied[] = [
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

const selected: ISelected[] = [
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

addDummyData()
    .then(() => {
        console.log('Dummy data added');
    })
    .catch((err) => {
        console.log(err);
    });
