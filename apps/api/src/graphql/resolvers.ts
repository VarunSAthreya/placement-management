import {
    applied,
    companies,
    eligibility,
    placed,
    studentDetails,
    students,
} from '../db';

export const resolvers = {
    Query: {
        students: () => students,
        student: (_: any, { USN }: { USN: string }) =>
            students.find((student) => student.USN === USN),
        companies: () => companies,
        applied: () => applied,
        placed: () => placed,
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

            const placedCompanies = placed.filter(
                (plc) => plc.student === student.USN
            );

            student.details.placed = placedCompanies.map((comp) => {
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
            console.log(appliedStudentsUSN);

            return appliedStudentsUSN.map((usn) => {
                return {
                    student: students.filter(
                        (std) => std.USN === usn.student
                    )[0],
                };
            });
        },
        selected: (company: any) => {
            const selectedStudentsUSN = placed.filter(
                (pla) => pla.company === company.name
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
