# Teebay Backend

Written in Typescript using Express, Apollo, Graphql and for Database Prisma and Postgres is used

## Requirements

Node version: 18.16.0.

# How to install backend

1. Clone the project using `git clone https://github.com/jwd222/teebay-backend.git` in terminal of code editor, preferably VSCODE
2. Navigate to project directory and open terminal
3. Install the project using `npm install`
4. Create a .env file in the root directory with contents
   - DATABASE_URL="url_string_from_own_postgres_database" //Database url is of the format "postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
   - PORT=8000
5. To map the data model in "./prisma/schema.prisma" to your database schema, run `npx prisma dev --name a_name_for_the_migration` in terminal
6. Finally run `npm run dev` to run the backend application

#### Contact shahjawad@iut-dhaka.edu if you encounter any errors
