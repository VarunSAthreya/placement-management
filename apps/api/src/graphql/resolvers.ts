import {
    applied,
    companies,
    eligibility,
    selected,
    userDetails,
    users,
} from '../db';

export const resolvers = {
    Query: {
        users: () => users,
        user: (_: any, { USN }: { USN: string }) =>
            users.find((student) => student.USN === USN.toUpperCase()),
        companies: () => companies,
        company: (_: any, { name }: { name: string }) =>
            companies.find(
                (company) => company.name.toLowerCase() === name.toLowerCase()
            ),
        applied: () => applied,
        selected: () => selected,
    },
    User: {
        details: (user: IUser) => {
            user.details = userDetails.filter((std) => std.USN === user.USN)[0];

            const appliedCompanies = applied.filter(
                (app) => app.user === user.USN
            );

            user.details.applied = appliedCompanies.map((comp) => {
                return {
                    company: companies.filter(
                        (company) => company.name === comp.company
                    )[0],
                };
            });

            const selectedCompanies = selected.filter(
                (sle) => sle.user === user.USN
            );

            user.details.selected = selectedCompanies.map((comp) => {
                return {
                    company: companies.filter(
                        (company) => company.name === comp.company
                    )[0],
                };
            });

            return user.details;
        },
    },
    Company: {
        applied: (company: ICompany) => {
            const appliedStudentsUSN = applied.filter(
                (app) => app.company === company.name
            );

            return appliedStudentsUSN.map((usn) => {
                return {
                    user: users.filter((std) => std.USN === usn.user)[0],
                };
            });
        },
        selected: (company: ICompany) => {
            const selectedStudentsUSN = selected.filter(
                (sle) => sle.company === company.name
            );

            return selectedStudentsUSN.map((usn) => {
                return {
                    user: users.filter((std) => std.USN === usn.user)[0],
                };
            });
        },
        eligibility: (company: ICompany) => {
            return eligibility.filter((elg) => elg.name === company.name)[0];
        },
    },
};
