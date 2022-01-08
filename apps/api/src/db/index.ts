const { PrismaClient } = require('@prisma/client');
export const prisma = new PrismaClient();

export const users: IUser[] = [
    {
        USN: '1JS19CS186',
        name: 'Varun S Athreya',
        email: '1js19cs186@jssateb.ac.in',
        role: 'STUDENT',
        password: 'asdfghjkl',
    },
    {
        USN: '1JS19CS146',
        name: 'Sandeep M',
        email: '1js19cs146@jssateb.ac.in',
        role: 'STUDENT',
        password: 'asdfghjkl',
    },
    {
        USN: '1JS19CS183',
        name: 'Ullas HP',
        email: '1js19cs183@jssateb.ac.in',
        role: 'STUDENT',
        password: 'asdfghjkl',
    },
    {
        USN: '1JS19CS157',
        name: 'Shithin Shetty',
        email: '1js19cs157@jssateb.ac.in',
        role: 'STUDENT',
        password: 'asdfghjkl',
    },
];

export const userDetails: IUserDetails[] = [
    {
        USN: '1JS19CS186',
        CGPA: 8.5,
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
        arrival_date: '2019-04-01',
        package: 100000,
        type: 'PRODUCT',
    },
    {
        name: 'Amazon',
        arrival_date: '2019-05-01',
        package: 100000,
        type: 'PRODUCT',
    },
    {
        name: 'Microsoft',
        arrival_date: '2019-06-01',
        package: 100000,
        type: 'PRODUCT',
    },
    {
        name: 'TCS',
        arrival_date: '2019-06-01',
        package: 100000,
        type: 'SERVICE',
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
        user: '1JS19CS186',
        company: 'Google',
    },
    {
        user: '1JS19CS183',
        company: 'Google',
    },
    {
        user: '1JS19CS186',
        company: 'Microsoft',
    },
    {
        user: '1JS19CS146',
        company: 'Amazon',
    },
    {
        user: '1JS19CS157',
        company: 'TCS',
    },
    {
        user: '1JS19CS146',
        company: 'Microsoft',
    },
    {
        user: '1JS19CS183',
        company: 'TCS',
    },
];

export const selected: ISelected[] = [
    {
        user: '1JS19CS183',
        company: 'TCS',
    },
    {
        user: '1JS19CS186',
        company: 'Google',
    },
    {
        user: '1JS19CS146',
        company: 'Amazon',
    },
];
