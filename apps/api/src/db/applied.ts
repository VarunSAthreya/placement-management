import { getCompany, getUserDetails, prisma } from '.';

const query = {
    user: true,
    company: {
        include: {
            eligibility: true,
        },
    },
};

export const getAllApplied = async () =>
    prisma.applied.findMany({
        include: query,
    });

export const getAppliedOnUSN = async (USN: string) =>
    prisma.applied.findMany({
        where: {
            userID: USN,
        },
        include: query,
    });

export const getAppliedOnCompany = async (companyID: string) =>
    prisma.applied.findMany({
        where: {
            companyID,
        },
        include: query,
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
        include: query,
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
