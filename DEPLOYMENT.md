# Deployment checklist

## Database
Create PostgreSQL and set DATABASE_URL in the hosting provider.

## Build
npm install
npx prisma generate
npx prisma db push
npm run build
npm start

## Vercel
Import the repository, set DATABASE_URL and AUTH_SECRET, and deploy.

## Prisma
Current Prisma documentation supports PostgreSQL and Next.js deployment. See:
https://www.prisma.io/docs/guides/frameworks/nextjs
