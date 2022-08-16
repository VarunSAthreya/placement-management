# [Placement Management](https://placement-management.vercel.app/)

Placement Management is a portal for managing the placement of students in the college. It is a web application with 2 login's one for the admin and one for the student.

The student can view the list of upcoming companies and apply for them if they are eligible for the company.
Can view their details such as basic details, academics details and placement details. And also they can select the companies if they have multiple offers.

The admin controls the academic details of the students which is provided by the college. And also adds and removes the companies from the list of companies, set the companies eligibility and date of arrival and package offered.

## Tech Stack

- Frontend:

  - [NextJS](https://nextjs.org/)
  - [Chakra UI](https://chakra-ui.com/)
  - [Typescript](https://www.typescriptlang.org/)
  - [Apollo Client](https://www.apollographql.com/docs/react/)

- Backend

  - [NodeJS](https://nodejs.org/)
  - [Apollo Server](https://www.apollographql.com/)
  - [Typescript](https://www.typescriptlang.org/)
  - [Prisma](https://www.prisma.io/)

- Database

  - [PostgreSQL](https://www.postgresql.org/)

- Others
  - [Turborepo](https://turborepo.org/)
  - [GraphQL Codegen](https://www.graphql-code-generator.com/)
  - [JWT](https://jwt.io/)

## Getting Started

### Installing Dependencies

```bash
yarn
```

### Generate the GraphQL Schema and Resolvers

```bash
yarn gen
```

### Adding evniroment variables

- Frontend: `./apps/web/.env.local`

```.env
NEXT_PUBLIC_API_URL = <BACKEND URL>
```

- Backend: `./apps/api/.env`

```.env
DATABASE_URL = <DATABASE URL>
JWT_SECRET = <JWT SECRET>
```
