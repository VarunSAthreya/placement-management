const users = [
    {
        name: 'Octavio Flores',
        email: 'oflores@test.com',
        projects: [{ title: 'Site Upgrade - Summer 2021' }],
    },
    {
        name: 'Farah Bennis',
        email: 'fbennis@test.com',
        projects: [{ title: 'Site Upgrade - Summer 2021' }],
    },
];

export const resolvers = {
    Query: {
        users: async () => users,
    },
};
