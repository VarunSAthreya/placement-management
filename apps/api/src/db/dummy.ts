import { createUser, prisma ,createCompany} from '.';

export const addDummyData = async () => {

    // await  users.forEach((user) => {
    //     createUser(user);
    // });

    // await companies.forEach((company) => {
    //     createCompany(company, 'ADMIN');
    // })

    // await prisma.applied.createMany({ data: applied });

    // await prisma.selected.createMany({ data: selected });

    // createCompany(companies[2], 'ADMIN').then(() => {console.log('done')}).catch(err => console.log(err));
};

const users = [
    {
        USN: '1JS19CS186',
        role: 'STUDENT',
        password: 'asdfghjkl',
        details:{
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
        }
    },
    {
        USN: '1JS19CS146',
        role: 'STUDENT',
        password: 'asdfghjkl',
        details:{
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
        }
    },
    {
        USN: '1JS19CS183',
        role: 'STUDENT',
        password: 'asdfghjkl',
        details :{
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
        }
    },
    {
        USN: '1JS19CS157',
        role: 'STUDENT',
        password: 'asdfghjkl',
        details:{
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
        }
    },
];


const companies = [
    {
        name: 'Google',
        arrival_date: new Date().toISOString(),
        package: 100000,
        type: 'PRODUCT',
        eligibility: {
            CGPA: 8.5,
            backlogs: 0,
            tenth: 8.5,
            twelth: 8.5,
        },
    },
    {
        name: 'Amazon',
        arrival_date: new Date().toISOString(),
        package: 100000,
        type: 'PRODUCT',
        eligibility:{
            CGPA: 8.5,
            backlogs: 0,
            tenth: 8.5,
            twelth: 8.5,
        }
    },
    {
        name: 'Microsoft',
        arrival_date: new Date().toISOString(),
        package: 100000,
        type: 'PRODUCT',
        eligibility: {
            CGPA: 8.5,
            backlogs: 0,
            tenth: 8.5,
            twelth: 8.5,
        }
    },
    {
        name: 'TCS',
        arrival_date: new Date().toISOString(),
        package: 100000,
        type: 'SERVICE',
        eligibility: {
            CGPA: 8.5,
            backlogs: 0,
            tenth: 8.5,
            twelth: 8.5,
        }
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
