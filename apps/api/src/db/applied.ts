import { getCompany, getUserDetails, prisma } from '.';

export const getAllApplied = async () =>
    prisma.applied.findMany({
        include: {
            user: true,
            company: {
                include: {
                    eligibility: true,
                },
            },
        },
    });

export const getAppliedOnUSN = async (USN: string) =>
    prisma.applied.findMany({
        where: {
            userID: USN,
        },
        include: {
            user: true,
            company: {
                include: {
                    eligibility: true,
                },
            },
        },
    });

export const getAppliedOnCompany = async (companyID: string) =>
    prisma.applied.findMany({
        where: {
            companyID,
        },
        include: {
            user: true,
            company: {
                include: {
                    eligibility: true,
                },
            },
        },
    });

export const getApplied = async (applied: IApplied) => {
    const { userID, companyID } = applied;

    return prisma.applied.findUnique({
        where: {
            userID_companyID: {
                userID,
                companyID,
            },
        },
        include: {
            user: true,
            company: {
                include: {
                    eligibility: true,
                },
            },
        },
    });
};

export const createApplied = async (applied: IApplied) => {
    const { userID, companyID } = applied;

    const userDetails = await getUserDetails(userID);
    const company = await getCompany(companyID);

    const { CGPA, backlogs, tenth, twelth } = userDetails!;
    const {
        CGPA: CGPA_cutoff,
        backlogs: backlogs_cutoff,
        tenth: tenth_cutoff,
        twelth: twelth_cutoff,
    } = company!.eligibility!;

    if (
        CGPA >= CGPA_cutoff &&
        backlogs <= backlogs_cutoff &&
        tenth >= tenth_cutoff &&
        twelth >= twelth_cutoff
    ) {
        await prisma.applied.create({
            data: {
                userID,
                companyID,
            },
        });

        return getApplied(applied);
    } else {
        return null;
    }
};

export const deleteApplied = async (applied: IApplied) => {
    const { userID, companyID } = applied;

    const res = await getApplied(applied);

    await prisma.applied.delete({
        where: {
            userID_companyID: {
                userID,
                companyID,
            },
        },
    });

    return res;
};
