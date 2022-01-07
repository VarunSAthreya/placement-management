import {
    applied,
    companies,
    eligibility,
    selected,
    studentDetails,
    students,
} from '../db';

export const resolvers = {
    Query: {
        students: () => students,
        student: (_: any, { USN }: { USN: string }) =>
            students.find((student) => student.USN === USN.toUpperCase()),
        companies: () => companies,
        company: (_: any, { name }: { name: string }) =>
            companies.find(
                (company) => company.name.toLowerCase() === name.toLowerCase()
            ),
        applied: () => applied,
        selected: () => selected,
    },
    Student: {
        details: (student: any) => {
            student.details = studentDetails.filter(
                (std) => std.USN === student.USN
            )[0];

            const appliedCompanies = applied.filter(
                (app) => app.student === student.USN
            );

            student.details.applied = appliedCompanies.map((comp) => {
                return {
                    company: companies.filter(
                        (company) => company.name === comp.company
                    )[0],
                };
            });

            const selectedCompanies = selected.filter(
                (sle) => sle.student === student.USN
            );

            student.details.selected = selectedCompanies.map((comp) => {
                return {
                    company: companies.filter(
                        (company) => company.name === comp.company
                    )[0],
                };
            });

            return student.details;
        },
    },
    Company: {
        applied: (company: any) => {
            const appliedStudentsUSN = applied.filter(
                (app) => app.company === company.name
            );

            return appliedStudentsUSN.map((usn) => {
                return {
                    student: students.filter(
                        (std) => std.USN === usn.student
                    )[0],
                };
            });
        },
        selected: (company: any) => {
            const selectedStudentsUSN = selected.filter(
                (sle) => sle.company === company.name
            );

            return selectedStudentsUSN.map((usn) => {
                return {
                    student: students.filter(
                        (std) => std.USN === usn.student
                    )[0],
                };
            });
        },
        eligibility: (company: any) => {
            return eligibility.filter((elg) => elg.name === company.name)[0];
        },
    },
};
