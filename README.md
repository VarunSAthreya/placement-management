# [Placement Management](https://placement-management.vercel.app/)

The Placement Management portal is a tool that is used by both students and administrators in order to coordinate college placement. This portal allows students to view upcoming companies and their eligibility requirements. In addition, the portal allows administrators to add, edit, and delete companies and students as needed.

The portal is designed to be user-friendly and efficient. Students can easily view the list of upcoming companies and apply for them if they are eligible for the company. Additionally, students can view their own details such as basic details, academic details, and placement details. If a student has multiple offers, they can also use the portal to select the company they would like to work for.

On the other hand, administrators have complete control over the academic details of the students which are provided by the college. The administrators can also add and remove companies from the list of companies. They can also set the companies' eligibility and date of arrival, as well as the package offered.

## Demo

To go through the features provided to the student by the portal, you can use the following credentials:

```txt
UserID: DEMO
Password: DEMO@123
```

**PS: Don't change the password!**

## Tech Stack

-   Frontend:

    -   [NextJS](https://nextjs.org/)
    -   [Chakra UI](https://chakra-ui.com/)
    -   [Typescript](https://www.typescriptlang.org/)
    -   [Apollo Client](https://www.apollographql.com/docs/react/)

-   Backend

    -   [NodeJS](https://nodejs.org/)
    -   [Apollo Server](https://www.apollographql.com/)
    -   [Typescript](https://www.typescriptlang.org/)
    -   [Prisma](https://www.prisma.io/)

-   Database

    -   [PostgreSQL](https://www.postgresql.org/)

-   Others
    -   [Turborepo](https://turborepo.org/)
    -   [GraphQL Codegen](https://www.graphql-code-generator.com/)
    -   [JWT](https://jwt.io/)
    -   [Docker](https://www.docker.com/)

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

-   Frontend: `./apps/web/.env.local`

```.env
NEXT_PUBLIC_API_URL = <BACKEND URL>
```

-   Backend: `./apps/api/.env`

```.env
DATABASE_URL = <DATABASE URL>
JWT_SECRET = <JWT SECRET>
```

### Running the app

-   With [docker-compose](https://docs.docker.com/compose/):

```bash
docker-compose up
```

-   Without docker-compose:

    -   Development mode

        ```bash
                    yarn dev
        ```

    -   Production mode

        ```bash
                    yarn start
        ```
